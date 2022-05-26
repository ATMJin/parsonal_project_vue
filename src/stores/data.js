import {
  defineStore
} from 'pinia'

export const useDataStore = defineStore({
  id: 'data',
  state: () => ({
    courses: [],
    masterpieces: [],
    skills: [],
  }),
  getters: {

  },
  actions: {

  }
})