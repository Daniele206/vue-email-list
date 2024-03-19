const { createApp } = Vue;

createApp({

  data(){

  },

  methods:{
    getMail(){

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

    }

  },

}).mount('#app');