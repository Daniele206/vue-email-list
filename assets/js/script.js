const { createApp } = Vue;

createApp({

  data(){
    return{
      title: 'Vue Email FileList',
      listMail: [],
      // loadMessage: ''
    }
  },

  methods:{
    getMail(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => {
          console.log(res.data.response);
          this.listMail.push(res.data.response);
        });
        // if(listMail.length < 10){
        //   loadMessage= 'Loading...'
        // }
      }
    }

  },

  mounted(){

  }

}).mount('#app');