new Vue({
	el:"#app",
	data(){
		return{
			info:null
		}
	},
	mounted(){
		axios
		.get('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then(response => (this.info = response.data.bpi))
		.catch(error => console.log(error))
	},
	filter:{
		currencydecimal (value){
			return value.toFixed(2)
		}
	}
})
