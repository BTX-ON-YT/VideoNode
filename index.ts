import express from "express";
import * as yt from 'youtube-search-without-api-key';

const app = express();
const port = 3000;

app.get('/api/search', async (req: any, res: any) => {
    const query = req.query.query;
    if (query) {
        try {
            const results = await yt.search(query);
            res.json({
                count: results.length,
                results: results,
            });
        } catch (e) {
            res.status(500).json({
                error: e,
            });
        }
    } else {
        res.status(400).send('Bad Request');
    }
});

app.get('/api/videoInfo', async (req: any, res: any) => {
    const query = req.query.query;
    if (query) {
        try {
            const results = await yt.search(query);
            let videoInfo: any;

            if (results.length > 0) {
                for (const result of results) {
                    if (result.id.videoId === query) {
                        videoInfo = result;
                        break;
                    }
                }
            }

            if (videoInfo) {
                res.json({
                    videoInfo: videoInfo,
                });
            } else {
                res.status(404).send('Not Found');
            }
        } catch (e) {
            res.status(500).json({
                error: e,
            });
        }
    } else {
        res.status(400).send('Bad Request');
    }
});

export default app;