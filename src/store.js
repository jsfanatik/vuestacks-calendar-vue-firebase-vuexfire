import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: vuexfireMutations,

  actions: {
    setEvents: firestoreAction(context => {
      return context.bindFirestoreRef('events', db.collection('calEvent'))
    }),
  },
})
