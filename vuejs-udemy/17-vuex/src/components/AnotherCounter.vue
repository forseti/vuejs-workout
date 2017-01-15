<template>
    <div>
        <p>Another Counter</p>

        <!-- We can also pass an object {} as a payload -->
        <button class="btn btn-primary" @click="asyncIncrement({by: 90, duration: 3000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 200, duration: 1500})">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])

            /* These methods can take payload, and pass to Vuex's actions
               but we can comment them because Vuex will forward the payload */
            // asyncIncrement(payload) {
            //     this.$store.dispatch('asyncIncrement', payload);
            // },
            // asyncDecrement(payload) {
            //     this.$store.dispatch('asyncDecrement', payload);
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

            //     this.$store.commit('decrement');
            // }
        // }
    }
</script>