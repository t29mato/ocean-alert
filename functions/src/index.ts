import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as request from 'request';
import * as iconv from 'iconv-lite';
import * as constants from './constants';

admin.initializeApp();

export const crawlingDivingSpot = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
    const options = {
        method: 'GET',
        uri: constants.spots.iwa.uri,
        encoding: null,
    };
    request(options, (error, response, body) => {
        const buf = Buffer.from(body, 'binary');
        const retStr = iconv.decode(buf, constants.spots.iwa.charset);
        const result = retStr.match(constants.spots.iwa.regexp);
        if (result) {
            console.log(result[1]);
        }
    })
})

// export const addMessage = functions.https.onRequest(async (req, res) => {
//     const original = req.query.text;
//     const snapshot = await admin.database().ref('/messages').push({original: original});
//     res.redirect(303, snapshot.ref.toString());
// });

// export const makeUppercase = functions.database.ref('/messages/{pushId}/original').onCreate((snapshot, context) => {
//     const original = snapshot.val();
//     console.log('Uppercasing', context.params.pushId, original);
//     const uppercase = original.toUpperCase();
//     if (snapshot.ref.parent) {
//         return snapshot.ref.parent.child('uppercase').set(uppercase);
//     }
//     return null;
// })

// export const scheduledFunction = functions.pubsub.schedule('every 1 minutes').onRun((context) => {
//     console.log('This will be run every 1 minutes!');
// })
