const store = new Vuex.Store({
	state:{
		inventory:[
			{name:"Item1", price:10, held:0},
			{name:"Item2", price:20, held:0},
			{name:"Item3", price:30, held:0},
			{name:"Item4", price:40, held:0},
		],
		cash:1000
	},
	getters:{
		holdingValue(state) {
			return state.inventory.reduce(function(current,elm) {
				return current + (elm.price * elm.held);
			},0); 
		}
	},
	mutations:{
		changeStocks(state) {
			state.inventory.forEach(stock => {
				stock.price += Math.random();
				if(stock.price < 0) stock.price = 0;
			});
		},
		buyStock(state, order) {
			console.log('order is '+JSON.stringify(order));
			//first, find the stock
			let stock = state.inventory.findIndex(elm => {
				return elm.name === order.stock;
			});
			if(stock >= 0) {
				let purchasePrice = (state.inventory[stock].price * order.amount).toFixed(2);
				if(state.cash >= purchasePrice) {
					state.inventory[stock].held += order.amount;
					state.cash -= purchasePrice;
				}
			}
		},
		sellStock(state, order) {
			console.log('order is '+JSON.stringify(order));
			//first, find the stock
			let stock = state.inventory.findIndex(elm => {
				return elm.name === order.stock;
			});
			if(stock >= 0) {
				if(state.inventory[stock].held >= order.amount) {
					let sellPrice = (state.inventory[stock].price * order.amount).toFixed(2);
					state.inventory[stock].held -= order.amount;
					state.cash += Number(sellPrice);
				}
			}
		}
	}
});

const app = new Vue({
	el:'#app',
	store,
	data() {
		return {
			buy:0,
			buyStock:null,
			buyError:false,
			sell:0,
			sellStock:null,
			sellError:false
		}
	},
	filters:{
		money(value) {
			let numb = Number(value).toFixed(2);
			return '$'+numb;
		}
	},
	mounted:function() {	
	},
	computed:{
		inventory() {
			return store.state.inventory;
		},
		holdingValue() {
			return store.getters.holdingValue;
		},
		cash() {
			return store.state.cash;
		}
	},
	methods:{
		buyStocks() {
			if(this.buy < 0) this.buy = 0;
			if(this.buy === 0) return;
			console.log('going to buy '+this.buy +' of '+this.buyStock);
			store.commit('buyStock', { amount:this.buy, stock:this.buyStock });
			this.buy = 0;
			this.buyStock = null;
		},
		sellStocks() {
			if(this.sell < 0) this.sell = 0;
			if(this.sell === 0) return;
			console.log('going to sell '+this.sell +' of '+this.sellStock);
			store.commit('sellStock', { amount:this.sell, stock:this.sellStock });
			this.sell = 0;
			this.sellStock = null;
		}
	}
});