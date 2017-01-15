<template>
    <div>

        <!-- Passing payload through actions, which in turn can also channel payload to mutations -->

        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>

<!--         <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button> -->
    </div>
</template>

<script>
    // Unlike 'actions' which can run async operations, 'mutations' cannot 
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {

        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])

            /* These methods can take payload, and pass to Vuex's actions
               but we can comment them because Vuex will forward the payload */
            // increment(payload) {
            //     this.$store.dispatch('increment', payload);
            // },
            // decrement(payload) {
            //     this.$store.dispatch('decrement', payload);
            // }
        }

        // methods: {
        //     ...mapMutations([
        //         'increment',
        //         'decrement'
        //     ])
        // }

        // methods: {
        //     increment() {
                // this.$emit('updated', 1);

                /* Changing state directly can be ineffective in long run */
                // this.$store.state.counter++;

                /* Use mutation are better */
                /* 'commit' will look for mutation's functions */
            //     this.$store.commit('increment');
            // },
            // decrement() {
                // this.$emit('updated', -1);
                // this.$store.state.counter--;

                // this.$store.commit('decrement');
        //     }
        // }
    }
</script>