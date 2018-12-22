var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
      reverseMessage : function() {
        this.message = this.message.split('').reverse().join('')
      }
    }
})