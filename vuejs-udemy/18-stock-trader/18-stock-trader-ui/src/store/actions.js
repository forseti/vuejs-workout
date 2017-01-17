import Vue from 'vue';

export const loadData = ({ commit }) => {
    Vue.prototype.$http
        .get("trader")
        .then(function (response) {
            console.log(response.data);
            commit('SET_STOCKS', response.data.stocks);
            commit('SET_PORTFOLIO', {
                stocks: response.data.portfolios,
                funds: response.data.funds
            });
        })
        .catch(function (error) {
            console.log(error);
        });

}