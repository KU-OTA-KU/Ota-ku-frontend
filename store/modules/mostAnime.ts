import axios from "axios";
import {Storage} from '@capacitor/storage';

const state = {
    mostAnimeList: [],
};

const getters = {
    getMostAnimeList(state: any) {
        return state.mostAnimeList;
    },
};

const mutations = {
    SET_MOST_ANIME_LIST(state: any, animeList: any) {
        state.mostAnimeList = JSON.parse(animeList);
    },
    async SET_MOST_ANIME_LIST_IN_STORAGE(state: any, animeList: any) {
        await Storage.set({
            key: 'mostAnimeList',
            value: JSON.stringify(animeList),
        });

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);

        await Storage.set({
            key: 'mostAnimeListExpirationDate',
            value: expirationDate.getTime().toString(),
        });
    },
};

const actions = {
    async getMostAnimeList({commit}) {
        try {
            const {value} = await Storage.get({key: 'mostAnimeList'});
            const {value: expirationDateString} = await Storage.get({key: 'mostAnimeListExpirationDate'});

            if (value && expirationDateString) {
                const expirationDate = parseInt(expirationDateString, 10);
                const currentDate = new Date().getTime();

                if (currentDate < expirationDate) {
                    commit('SET_MOST_ANIME_LIST', value);
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
                  ongoingAnime: animes(season: "2023_2024", limit: 6, order: popularity, status: "ongoing", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  anonseAnime: animes(season: "2023_2024", limit: 6, order: popularity, status: "anons", kind: "tv,ona,ova") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  topAnime: animes(limit: 6, order: ranked, status: "released", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  releasedAnime: animes(limit: 6, order: popularity, status: "released", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  filmsAnime: animes(season: "2020_2024", limit: 6, order: popularity, status: "released", kind: "movie") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  ovaAnime: animes(season: "2022_2024", limit: 6, order: popularity, status: "released", kind: "ova") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  onaAnime: animes(season: "2022_2024", limit: 6, order: popularity, status: "released", kind: "ona") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                }
              `,
        }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        if (response.status !== 200) {
            throw new Error("Failed to fetch data");
        }

        const data = response.data;
        const animeList = [
            {
                title: "Онгоинги",
                description: "Вступай в новые эпизоды приключений, следи за сюжетом!",
                anime: data.data.ongoingAnime,
                moreLink: 'status=ongoing&order=popularity',
            },
            {
                title: "Популярные ONA",
                description: "ONA с уникальными и захватывающими сюжетами!",
                anime: data.data.onaAnime,
                moreLink: 'kind=ona&order=popularity',
            },
            {
                title: "Топ аниме",
                description: "Погружайся в лучшие произведения аниме!",
                anime: data.data.topAnime,
                moreLink: 'kind=tv&order=popularity',
            },
            {
                title: "Популярные OVA",
                description: "Эксклюзивные анимационные произведения!",
                anime: data.data.ovaAnime,
                moreLink: 'kind=ova&order=popularity',
            },
            {
                title: "Анонсы",
                description: "Узнавай первым о предстоящих релизах!",
                anime: data.data.anonseAnime,
                moreLink: 'status=anons&order=popularity',
            },
            {
                title: "Завершенные",
                description: "Проведи время в компании классических аниме!",
                anime: data.data.releasedAnime,
                moreLink: 'released=anons&order=popularity',
            },
            {
                title: "Фильмы",
                description: "Эксклюзивная коллекция фильмов для наслаждения!",
                anime: data.data.filmsAnime,
                moreLink: 'kind=movie&released=anons&order=popularity',
            },
        ];

        commit('SET_MOST_ANIME_LIST', JSON.stringify(animeList));
        commit('SET_MOST_ANIME_LIST_IN_STORAGE', animeList);

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
