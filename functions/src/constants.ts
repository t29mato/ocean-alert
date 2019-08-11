export const spots = {
    iwa: {
        uri: 'https://www.padi.co.jp/scuba-diving/scuba-vacations/vacation-spotlight/spot.aspx?sptcd=jp_1231',
        charset: 'utf-8',
        regexp: {
            updateTrigger: /<span id="ContentPlaceHolder1_DataList2_InfoMdLabel_0">★<span style="color:#0000ff;font-weight:bold;">([\s\S]*?)<\/span>/,
            waterClarity: /<span id="ContentPlaceHolder1_DataList2_ClearnessLabel_0">([\s\S]*?)<\/span><\/div>/,
        },
        dbPath: '/spots/iwa'
    },
};
