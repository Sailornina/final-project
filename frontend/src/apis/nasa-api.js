import axios from "axios";

export const getNasaImages = async (query) => {
    try {
        const res = await axios.get(`/images/search?q=${query}`);
        return res.data;
    } catch (error) {
        return console.error("Failed to fetch nasa images", error);
    }
};

export const getNasaImagesByPage = async (query, page) => {
    try {
        const response = await axios.get(`/images/search?q=${query}&page=${page}`);
        return response.data;
    } catch (error) {
        return console.error("Failed to fetch nasa images", error);
    }
};

export const getNasaDetailsById = async (id) => {
    try {
        const response = await axios.get(`/images/nasa-details/${id}`);
        return response.data;
    } catch (error) {
        return console.error("Failed to fetch nasa images", error);
    }
};