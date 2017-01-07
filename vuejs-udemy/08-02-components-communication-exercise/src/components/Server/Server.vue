<template>
    <li class="list-group-item" @click='showServerDetails' style='cursor: pointer'>
    	Server #{{ server.id }}
    </li>
</template>

<script>
	import { eventBus } from '../../main.js';

	export default {
		props: {
			server: Object	
		},
		methods: {
			showServerDetails(index) {
				eventBus.$emit('showServerDetailsClicked', this.server);		
			}
		}
	}
</script>