<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result :counter="counter"></app-result>
                <app-another-result :counter="counter"></app-another-result>
                <hr>
                <app-counter @updated="counter += $event"></app-counter>
                <app-another-counter @updated="counter += $event"></app-another-counter>
                <hr>

                With updateValue(event) <input type="text" :value='value' @input='updateValue'>
                <br>
                With v-bind: <input type="text" v-model='value'>
                <p>{{ value }}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        computed: {
            /* you can turn this value() into getter and setter */
            // value() {
            //     return this.$store.getters.value;
            // }

            // Using getter and setter allow to use v-model with vuex
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value);
            }
        },
        data() {
            return {
                counter: 0
            }
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult
        }
    }
</script>

