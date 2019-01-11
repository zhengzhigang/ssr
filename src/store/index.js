import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            fetchItem({commit}) {
                return axios.get('http://localhost:9001/api/getItem').then((res) => {
                    commit('setItem', res.data)
                })
            }
        },
        mutations: {
            setItem(state, res) {
                state.items = res
            }
        }
    })
}