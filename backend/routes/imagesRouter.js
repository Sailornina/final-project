import express from "express";
import axios from "axios";

const router = express.Router()

const parseQuery = (req) => {
    let paramsConfig = {};
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
        res.json(response.data);
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