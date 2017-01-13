<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Exercise 1</h3>
                <p>{{ 'Test tesT Test tesT Test tesT' | reverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Exercise 2</h3>
                <p>{{ 'Test tesT Test tesT Test tesT' | appendCount }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Exercise 3</h3>
                <p>{{ reversedText }}</p>
                <p>{{ countAppendedText }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h3>Exercise 4</h3>
                <p>{{ countAppendedText2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { textMixin } from './textMixin.js'

    export default {
        mixins: [ textMixin ],
        data() {
            return {
                text: "         Test        tesssst   w teeeeeeeesssst          teeeeeest Test test         "
            }
        },
        filters: {
            reverse(text) {
                return text.trim().split("").reverse().join("");
            }
        },
        computed: {
            reversedText() {
                return this.text.trim().split("").reverse().join("");
            },

            countAppendedText() {
                var words = this.text.trim().split(/\s+/);

                for (var i = 0; i < words.length; i++) {
                    words[i] += " (" + words[i].length + ")"
                }

                return words.join(" ");
            }
        }
    }
</script>

<style>
</style>
