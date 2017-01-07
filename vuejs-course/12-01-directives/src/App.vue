<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Strong Text</strong>'"></p>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight-no-value>Color this</p>
                <p v-highlight-with-value="'red'">Color this</p>
                <p v-highlight-with-arg:background="'yellow'">Color this</p>
                <p v-highlight-with-arg:text="'green'">Color this</p>
                <p v-highlight-with-modifier:background.delayed="'teal'">Color this</p>
                <p v-highlight-with-modifier:text.delayed="'pink'">Color this</p>
                <p v-local-highlight:background.delayed="'teal'">Color this, too</p>
                <p v-local-highlight:text.delayed="'pink'">Color this, too</p>
                <p v-local-highlight-with-multi-modifiers:background.delayed.blink="'brown'">Color this, too</p>
                <p v-local-highlight-with-multi-modifiers:text.delayed.blink="'gray'">Color this, too</p>
                <p v-local-highlight-with-multi-modifiers-complex-args:background.delayed.blink="{ mainColor: 'lime', secondColor: 'fuchsia', delay: 4000, interval: 2000 }">Color this, too</p>
                <p v-local-highlight-with-multi-modifiers-complex-args:text.delayed.blink="{ mainColor: 'darksalmon', secondColor: 'aqua', delay: 4000, interval: 2000 }">Color this, too</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	directives: {
    		'local-highlight': {
				bind(el, binding, vnode) {
					var delay = 0;

					if (binding.modifiers['delayed']) {
						delay = 3000;
					}

					setTimeout(() => {
						if (binding.arg == 'background') 
							el.style.backgroundColor = binding.value;

						else if (binding.arg == 'text')
							el.style.color = binding.value;
					}, delay);
				}
			},
    		'local-highlight-with-multi-modifiers': {
				bind(el, binding, vnode) {
					var delay = 0;

					if (binding.modifiers['delayed']) {
						delay = 3000;
					}

					if (binding.modifiers['blink']) {
						let mainColor = binding.value;
						let secondColor = 'blue';
						let currentColor = mainColor

						setTimeout(() => {
							setInterval(() => {
								currentColor == secondColor? currentColor = mainColor : currentColor = secondColor;

								if (binding.arg == 'background') 
									el.style.backgroundColor = currentColor;

								else if (binding.arg == 'text')
									el.style.color = currentColor;
							}, 1000);
						}, delay);
					} else {
						setTimeout(() => {
							if (binding.arg == 'background') 
								el.style.backgroundColor = binding.value;

							else if (binding.arg == 'text')
								el.style.color = binding.value;
						}, delay);
					}
				}
			},
			'local-highlight-with-multi-modifiers-complex-args': {
				bind(el, binding, vnode) {
					let value = binding.value
					let currentColor = value.mainColor

					var delay = 0;

					if (binding.modifiers['delayed']) {
						delay = value.delay;
					}

					if (binding.modifiers['blink']) {
						let mainColor = value.mainColor;
						let secondColor = value.secondColor;

						setTimeout(() => {
							setInterval(() => {
								currentColor == secondColor? currentColor = mainColor : currentColor = secondColor;

								if (binding.arg == 'background') 
									el.style.backgroundColor = currentColor;

								else if (binding.arg == 'text')
									el.style.color = currentColor;
							}, value.interval);
						}, delay);
					} else {
						setTimeout(() => {
							if (binding.arg == 'background') 
								el.style.backgroundColor = currentColor;

							else if (binding.arg == 'text')
								el.style.color = currentColor;
						}, delay);
					}
				}
			}
    	}
    }
</script>

<style>

</style>
