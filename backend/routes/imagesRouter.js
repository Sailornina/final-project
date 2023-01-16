import express from "express";
import axios from "axios";
import Cache from "node-cache";

const imageCache = new Cache({ stdTTL: 60 * 60 * 24});
const imageQueryCache = new Cache({ stdTTL: 60 * 60 * 1});

const router = express.Router()

const parseQuery = (req) => {
    let paramsConfig = {
        "media_type": "image"
    };
    const q = req.query.q;
    if (q) {
        paramsConfig.q = q
    }
    const page = req.query.page;
    if (page) {
        paramsConfig.page = page;
    } else {
        paramsConfig.page = 1;
    }
    return paramsConfig
};

router.get('/search', async (req, res) => {
    const query = parseQuery(req);
    if (!query.q) {
        console.error("400 Bad request");
        res.status(400);
        return;
    }

    if(imageQueryCache.has(JSON.stringify(query))) {
        res.json(imageQueryCache.get(JSON.stringify(query)));
        return;
    }

    try {
        const response = await axios.get(`https://images-api.nasa.gov/search`, {
            params: query
        });
        const images = await Promise.all(response.data.collection.items.map(async (item) => {
            let imageData = null;

            if(imageCache.has(item.href)) {
                imageData = imageCache.get(item.href)
            } else {
                const imageResponse = await axios.get(item.href);
                imageData = imageResponse.data;
                if (imageData) {
                    imageCache.set(item.href, imageData)
                }
            }

            const filterImage = imageData.find(size => size.includes("~small.jpg"))

            if(!filterImage) {
                return null;
            }

            return {
                "id": item.data[0].nasa_id,
                "description": item.data[0].description,
                "title": item.data[0].title,
                "date_created": item.data[0].date_created,
                "url": filterImage
            }
        }));

        const queryResponse = {
            page: parseInt(query.page),
            total_pages: Math.min(Math.ceil(response.data.collection.metadata.total_hits / 100), 100),
            images: images.filter(image => image !== null)
        };

        imageQueryCache.set(JSON.stringify(query), queryResponse)

        res.json(queryResponse);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

router.get('/nasa-details/:id', async (req, res) => {
    try {
        const nasaId = req.params.id;
        const response = await axios.get(`https://images-api.nasa.gov/search?nasa_id=${nasaId}`);
        res.json(response.data);
    } catch (error) {
        console.log(error)
        res.status(500)
    }
});

export default router;