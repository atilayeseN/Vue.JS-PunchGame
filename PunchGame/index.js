var app = new Vue({
    el: '#app',
    data: {
      health:100,
      ended:false,
      message:"Over",
      background:"background: url('bag.png') center no-repeat"
    },
    methods: {
      hit:function(){
        this.health -=5;
        if(this.health<=0){
          this.ended=true;
          this.background="background: url('bag-burst.png') center no-repeat";
        }
      },
      restart:function(){
        this.ended=false;
        this.health=100;
        this.background="background: url('bag.png') center no-repeat";
      },
      double:function(){
        this.health -=15;
        if(this.health<=0){
          this.ended=true;
          this.background="background: url('bag-burst.png') center no-repeat";
        }
      }
    }
  });
