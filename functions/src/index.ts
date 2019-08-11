import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as request from 'request';
import * as iconv from 'iconv-lite';
import * as constants from './constants';

admin.initializeApp();

export const crawlingDivingSpot = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
    // 最新のデータを取得する
    await admin.database().ref(constants.spots.iwa.dbPath).limitToLast(1).once('value')
        .then((snapshot) => {
            const options = {
                method: 'GET',
                uri: constants.spots.iwa.uri,
                encoding: null,
            };
            request(options, (error, response, body) => {
                if (error) {
                    console.warn(error);
                    return null;
                }

                // 文字化け対策のDecode処理
                const buf = Buffer.from(body, 'binary');
                const retStr = iconv.decode(buf, constants.spots.iwa.charset);

                // 更新トリガーに変更がなければ処理終了
                const resultUpdateTrigger = retStr.match(constants.spots.iwa.regexp.updateTrigger);
                const updateTrigger = resultUpdateTrigger && resultUpdateTrigger[1];
                if (snapshot.val() !== null) {
                    const keys = Object.keys(snapshot.val());
                    const updateTriggerLatest = snapshot.val()[keys[0]].updateTrigger;
                    if (updateTriggerLatest === updateTrigger) {
                        console.log('更新トリガーに変更がなかったためクローリング終了')
                        return null;
                    }
                }

                // 透明度取得
                const resultWaterClarity = retStr.match(constants.spots.iwa.regexp.waterClarity);
                const waterClarity = resultWaterClarity && resultWaterClarity[1];

                // DBへの書き込み
                try {
                    const seaCondition = {
                        waterClarity,
                        createdAt: response.headers.date,
                        updateTrigger,
                    }
                    admin.database().ref(constants.spots.iwa.dbPath).push(seaCondition);
                    console.log('DBへの書き込みに成功');
                    return null;
                } catch (error) {
                    console.warn('DBへの書き込みに失敗');
                    console.log(error);
                    return null;
                }
            })
        })
        .catch(function(error) {
            console.log("Error deleting app:", error);
        });
    return null;
})
