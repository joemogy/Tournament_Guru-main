import {
    configureEvents,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";

const initialState = {
    titles: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("game/genres", async () => {
    const {
    data: { genres },
    } = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    return genres;
});

const createArrayFromRawData = (array, gamesArray, genres) => {
    array.forEach((game) => {
        const gameGenres = [];
        game.genre_ids.forEach((genre) => {
            const name = genres.find(({ id }) => id === genre);
            if (name) gameGenres.push(name.name);
        });
        if (game.backdrop_path)
            gamesArray.push({
            id: game.id,
            name: game?.original_name ? game.original_name : game.original_title,
            image: game.backdrop_path,
            genres: gameGenres.slice(0, 3),
            });
    });
};

const getRawData = async (api, genres, paging = false) => {
    const gamesArray = [];
    for (let i = 1; gamesArray.length < 60 && i < 10; i++) {
        const {
        data: { results },
        } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
        createArrayFromRawData(results, gamesArray, genres);
    }
    return gamesArray;
};

export const fetchDataByGenre = createAsyncThunk(
        "event/genre",
        async ({ genre, type }, thunkAPI) => {
        const {
            event: { genres },
        } = thunkAPI.getState();
        return getRawData(
            `https://api.rawg.io/api/genres${type}?api_key=d451b548fef24ce69eb3f63a72853e01&with_genres=${genre}`,
            genres
        );
    }
);