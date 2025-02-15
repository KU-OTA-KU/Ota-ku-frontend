import axios from "axios";
import {Storage} from "@capacitor/storage";

const state = {
    topSliderAnimeList: [],
};

const getters = {
    getTopSliderAnimeLIst(state: any) {
        return state.topSliderAnimeList;
    },
};

const mutations = {
    SET_TOP_SLIDER_ANIME_LIST(state: any, animeList: any) {
        state.topSliderAnimeList = JSON.parse(animeList);
    },
    async SET_TOP_SLIDER_ANIME_LIST_IN_STORAGE(state: any, animeList: any) {
        await Storage.set({
            key: 'topSliderAnimeList',
            value: JSON.stringify(animeList),
        });

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);

        await Storage.set({
            key: 'topSliderAnimeListExpirationDate',
            value: expirationDate.getTime().toString(),
        });
    },
};

const actions = {
    async getTopSliderAnimeLIst({commit}) {
        try {
            const {value} = await Storage.get({key: 'topSliderAnimeList'});
            const {value: expirationDateString} = await Storage.get({key: 'topSliderAnimeListExpirationDate'});

            if (value && expirationDateString) {
                const expirationDate = parseInt(expirationDateString, 10);
                const currentDate = new Date().getTime();

                if (currentDate < expirationDate) {
                    commit('SET_TOP_SLIDER_ANIME_LIST', value);
                } else {
                    await fetchAnimeData(commit);
                }
            } else {
                await fetchAnimeData(commit);
            }
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    },
};

async function fetchAnimeData(commit: any) {
    try {
        const response = await axios.post("https://shikimori.one/api/graphql", {
            query: `
            query {
                animes(season: "2023_2024", limit: 5, order: popularity, status: "released", kind: "tv") {
                    id
                    russian
                    score
                    poster {
                        originalUrl
                    }
                    description
                    }
                }
            `
        }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });

        if (response.status !== 200) {
            throw new Error("Failed to fetch data");
        }

        commit('SET_TOP_SLIDER_ANIME_LIST', JSON.stringify(response.data.data.animes));
        commit('SET_TOP_SLIDER_ANIME_LIST_IN_STORAGE', response.data.data.animes)
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
