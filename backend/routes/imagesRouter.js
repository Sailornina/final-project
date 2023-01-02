import express from "express";
import axios from "axios";

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
    try {
        const response = await axios.get(`https://images-api.nasa.gov/search`, {
            params: query
        });
        const images = await Promise.all(response.data.collection.items.map(async (item) => {
            const imageResponse = await axios.get(item.href);

            const filterImage = imageResponse.data.find(size => size.includes("~small.jpg"))

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

        res.json({
            page: parseInt(query.page),
            total_pages: Math.min(Math.ceil(response.data.collection.metadata.total_hits / 100), 100),
            images: images.filter(image => image !== null)
        });
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