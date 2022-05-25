import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PER_PAGE = 20;

const initialState = {
    entities: [],
    totalPages: 1,
    currentPage: 1,
    isLoading: false,
};

export const fetchRepositories = createAsyncThunk(
    "repositories/fetchRepositories",
    async ({ inputValue, page }) => {
        const response = await axios(
            "https://api.github.com/search/repositories",
            {
                params: {
                    q: inputValue,
                    per_page: PER_PAGE,
                    page: page,
                },
            }
        );
        return response.data;
    }
);

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                const entities = action.payload.items.map(
                    ({
                        id,
                        name,
                        owner,
                        watchers,
                        language,
                        description,
                        stargazers_count,
                    }) => ({
                        id,
                        name,
                        watchers,
                        language,
                        description,
                        author: owner.login,
                        stars: stargazers_count,
                        imageUrl: owner.avatar_url,
                    })
                );
                //the maximum value for total count of items is 1000 because of
                //gitHub API restrictions - "Only the first 1000 search results are available"
                const totalCount =
                    action.payload.total_count < 1000
                        ? action.payload.total_count
                        : 1000;

                state.totalPages = Math.ceil(totalCount / PER_PAGE);
                state.entities = entities;
                state.isLoading = false;

                const inputValue = action.meta.arg.inputValue;
                if (inputValue !== state.requestedValue) {
                    state.requestedValue = inputValue;
                    state.currentPage = 1;
                }
            });
    },
});

export const { setCurrentPage } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
