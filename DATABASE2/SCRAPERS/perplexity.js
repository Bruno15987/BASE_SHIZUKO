 /*
- Format Result API By Herza
- Base: Perplexity-ai Scraper
- GROUP: https://chat.whatsapp.com/IyzRzK9dqEKIcovJybOKlu?mode=ems_copy_t
*/

const https = require('https');

async function eaiquery(prompt, model = "perplexity-ai") {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            message: prompt,
            model: model,
            history: []
        });

        const options = {
            hostname: 'whatsthebigdata.com',
            port: 443,
            path: '/api/ask-ai/',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'origin': 'https://whatsthebigdata.com',
                'referer': 'https://whatsthebigdata.com/ai-chat/',
                'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    resolve({
                        author: 'Herza',
                        status: 200,
                        msg: result.text
                    });
                } catch (error) {
                    reject({
                        author: 'Herza',
                        status: 500,
                        msg: error.message
                    });
                }
            });
        });

        req.on('error', error => reject({
            author: 'Herza',
            status: 500,
            msg: error.message
        }));
        req.write(postData);
        req.end();
    });
}

module.exports = { eaiquery };