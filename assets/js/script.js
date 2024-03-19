const { createApp } = Vue;

createApp({

  data(){
    return{
      title: 'Vue Email FileList',
      listMail: [],
      clicked: false,
      click: 0,
      loadMessage: 'Loading...'
    }
  },

  methods:{
    getMail(){
      if(this.listMail.length < 1){
        for(let i = 0; i < 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(res => {
            console.log(res.data.response);
            this.listMail.push(res.data.response);
          });
        }
      }
      this.clicked = true;
      this.click++
    },

    getNewMail(){
      this.listMail.splice(0, this.listMail.length)
      if(this.listMail.length < 1){
        for(let i = 0; i < 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(res => {
            console.log(res.data.response);
            this.listMail.push(res.data.response);
          });
        }
      }
    }
  },

  mounted(){

  }

}).mount('#app');