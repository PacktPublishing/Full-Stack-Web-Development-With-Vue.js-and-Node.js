Vue.component('todo', {
    template: '<li @click="alerttodo(todo)">{{ todo.text }}</li>',
    props: ['todo'],
    methods:{
        alerttodo:function(c) {
            alert(c.text);
            this.$emit('todoevent', c);
		}
    }
    
})

const app = new Vue({
    el: '#app',
    data() {
        return {
            groceryList: [
                { id : 1, text:' Item 1'},
                { id : 2, text:' Item 2'},
                { id : 3, text:' Item 3'},
                { id : 4, text:' Item 4'}
            ]
        }
    }
})