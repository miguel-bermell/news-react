import getAllNews from "../services/allNews"
import editNews from "../services/editNews"
import deleteNews from "../services/deleteNews"
import notify from "../services/notify"

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
    SET_NEWS: (state, payload) => {
      if (!state.news.length || Array.isArray(payload)) {
        return { ...state, news: payload }
      }

      return {
        ...state,
        news: [payload, ...state.news]
      }
    },
    deleteNewsById: (state, payload) => {
      const news = state.news.filter(news => news.id !== payload)
      return {
        ...state,
        news
      }
    },
    followToggled: (state, id) => {
      const newsToggled = state.news.map(news => {
        if (news.id === id) {
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
      const payloadToggle = dispatch.news.getNewsById(payload.id)
      const { call } = editNews(payloadToggle)
      await call
    },
    async deleteNews(id) {
      dispatch.news.deleteNewsById(id)
      const { call } = deleteNews(id)
      const { success, message } = await call
      if (!success) return notify.error(message)
      notify.success(message)
    }
  })
}
