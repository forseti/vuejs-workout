<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                <h1>Animations</h1>
                <hr>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <div class="col-xs-10">
                    <h4>using v-if</h4>

                    <div class="col-xs-5">
                        <select v-model="alertAnimation" form-control>
                            <option value="fade">Fade</option>
                            <option value="slide">Slide</option>
                        </select>
                        <br><br>
                        <transition :name="alertAnimation" mode="out-in">         
                            <div class="alert alert-info" v-if="show" key="info">
                                This is some info (also controlled by select) but animated using keys and out-in modes (out-in means let the out animations finish before in animations start, in-out is the opposite)         
                            </div>
                            <div class="alert alert-warning" v-else key="warning">
                                This is some info (also controlled by select) by done using keys and out-in modes (out-in means let the out animations finish before in animations start, in-out is the opposite)
                            </div>
                        </transition>
                        <transition :name="alertAnimation">
                            <div class="alert alert-info" v-if="show">This is some info (controlled by select)</div>
                        </transition>
                    </div>

                    <div class="col-xs-5">
                        <transition name="fade">
                            <div class="alert alert-info" v-if="show">This is some info</div>
                        </transition>
                        <transition name="slide" type="animation">
                            <div class="alert alert-info" v-if="show">This is some info</div>
                        </transition>
                        <transition name="fade" appear>
                            <div class="alert alert-info" v-if="show">This is some info</div>
                        </transition>
                        <transition appear
                            appear-active-class="animated bounce"
                            enter-active-class="animated bounce"
                            leave-active-class="animated shake">
                            <div class="alert alert-info" v-if="show">This is some info</div>
                        </transition>
                    </div>
                </div>

                <div class="col-xs-2">
                    <h4>using v-show (unusual)</h4>                
                    <transition name="fade">
                        <div class="alert alert-info" v-show="show">This is some info</div>
                    </transition>
                    <transition name="slide" type="animation">
                        <div class="alert alert-info" v-show="show">This is some info</div>
                    </transition>

                </div>
                <br><br>
                
                <div class="col-xs-12">
                    <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>  
                    <hr>
                    <transition
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @enter-cancelled="enterCancelled"

                        @before-leave="beforeLeave"
                        @leave="leave"
                        @after-leave="afterLeave"
                        @leave-cancelled="leaveCancelled"
                        :css="false">
                        <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load">Element</div>
                    </transition>  
                    <hr>        
                    <button class="btn btn-primary" 
                            @click="selectedComponent == 'app-success-alert'? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Components</button> 
                    <hr>
                    <transition name="fade" mode="out-in">
                        <component :is="selectedComponent"></component>
                    </transition>
                    <hr>
                    <button class="btn btn-primary" @click="addNumber">Add Number</button>
                    <hr>
                    <ul class="list-group">
                        <transition-group name="slide">
                            <li class="list-group-item" 
                                v-for="(number, index) in numbers"
                                @click="removeNumber(index)"
                                style="cursor: pointer;"
                                :key="number">{{ number }}</li>
                        
                        </transition-group>
                    </ul>
                    <br>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [ 1, 2, 3, 4, 5 ]
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');

                let round = 1
                const interval  = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;

                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');

            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');

                let round = 1
                const interval  = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;

                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addNumber() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeNumber(index) {
                this.numbers.splice(index, 1);
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /* opacity: 1; */
    }

    .fade-leave-active {
        transition: 1s;
        opacity: 0;
    }


    .slide-enter {
        /*transform: translateY(20px);*/
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }

    .slide-leave {
        /*transform: translateY(20px); */
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity:0;

        /* required by transition group */
        position: absolute;
    }


    /* required by transition-group */
    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }

        to {
            transform: translateY(0px);
        }
    }    

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }  

        to {
            transform: translateY(20px);
        }
    }

</style>
