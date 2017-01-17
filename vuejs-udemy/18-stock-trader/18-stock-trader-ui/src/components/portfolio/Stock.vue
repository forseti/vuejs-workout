<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input type="number"
						   class="form-control"
						   placeholder="Quantity"
						   v-model="quantity" :class="{ danger: insufficientQuantity }">
				</div>
				<div class="pull-right">
					<button class="btn btn-info"
							@click="sellStock"
							:disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
						{{ insufficientQuantity? 'Not enough' : 'Sell' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
    import { mapActions } from 'vuex';

    export default {
        props: [ "stock" ],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                    price: this.price
                };

                console.log('sellStock', order);

                this.placeSellOrder(order);
//                this.$store.dispatch('sellStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
	.danger {
		border: 1px solid red;
	}
</style>