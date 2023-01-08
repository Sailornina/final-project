import axios from "axios";

export const getNasaImages = async (query) => {
    try {
        const res = await axios.get(`https://final-project-w5otwao4va-lz.a.run.app/images/search?q=${query}`);
        // const res = await axios.get(`http://localhost:8080/images/search?q=${query}`);
        return res.data;
    } catch (error) {
        return console.error("Failed to fetch nasa images", error);
    }
};

export const searchNasaImagesByPage = async (query, page) => {
    try {
        const response = await axios.get(`https://final-project-w5otwao4va-lz.a.run.app/images/search?q=${query}&page=${page}`);
        // const response = await axios.get(`http://localhost:8080/images/search?q=${query}&page=${page}`);
        return response.data;
    } catch (error) {
        return console.error("Failed to fetch nasa images", error);
    }
};
