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
      if(this.click < 1){
        for(let i = 0; i < 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(res => {
            this.listMail.push(res.data.response);
          });
        }
      }
      this.clicked = true;
      this.click++
    },

    getNewMail(){
      if(this.listMail.length === 10){
        this.listMail.splice(0, this.listMail.length)
        for(let i = 0; i < 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(res => {
            this.listMail.push(res.data.response);
          });
        }
      }
    },

    index(i){
      if(i+1 < 10){
        return "0" + (i + 1)
      }
      return i + 1
    }
  },

  mounted(){

  }

}).mount('#app');