import getAllNews from "../services/allNews"
import editNews from "../services/editNews"
import store from "../store"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  state: {
    news: []
  },
  reducers: {
    loaded: (state, payload) => ({
      ...state,
      ...payload
    }),
    SET_NEWS: (state, payload) => ({
      ...state,
      news: payload
    }),
    SET_NEW_NEWS: (state, payload) => ({
      ...state,
      news: [...(Array.isArray(payload) ? payload : [payload]), ...state.news]
    }),
    followToggled: (state, payload) => {
      const newsToggled = state.news.map(news => {
        if (news.id === payload) {
          return { ...news, liked: !news.liked }
        }
        return news
      })
      return {
        ...state,
        news: newsToggled
      }
    }
  },
  effects: (dispatch) => ({
    getNewsById(id, state) {
      return state.news.news.find(news => news.id === id)
    },
    async loadNews() {
      const { call } = getAllNews()
      const response = await call
      // dispatch.news.loaded({ news: response.data })
      dispatch.news.SET_NEWS(response.data)
    },
    async likeToggled(payload, state) {
      dispatch.news.followToggled(payload.id)
      const payloadToggle = store.getState().news.news.find(news => news.id === payload.id)
      const { call } = editNews(payloadToggle)
      await call
    },
  })
}
