const { createApp } = Vue;

createApp({

  data(){
    return{
      title: 'Vue Email FileList',
      listMail: [],
    }
  },

  methods:{
    getMail(){

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(res => {
        console.log(res.data.response);
        this.listMail.push(res.data.response);
      })

    }

  },

  mounted(){

  }

}).mount('#app');