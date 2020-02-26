'use strict';

var app = new Vue({
  el: '#app',
  data: {
    handArray: ['goo', 'choki', 'paa'],
    cpHand: 'goo',
    hand: '',
    result: ''
  },
  methods: {
    fight: function(myhand) {
      let index = Math.floor(Math.random() * 3);
      this.cpHand = this.handArray[index];
      console.log(this.cpHand);
      this.hand = myhand;
      console.log(this.hand);

      if (this.cpHand === this.hand) {
        setTimeout(function() {
          alert('引分け');
        }, 250);
      } else if (this.cpHand === 'goo' && this.hand === 'paa') {
        setTimeout(function() {
          alert('勝ちました');
        }, 250);
      } else if (this.cpHand === 'choki' && this.hand === 'goo') {
        setTimeout(function() {
          alert('勝ちました');
        }, 250);
      } else if (this.cpHand === 'paa' && this.hand === 'choki') {
        setTimeout(function() {
          alert('勝ちました');
        }, 250);
      } else if (this.cpHand === 'goo' && this.hand === 'choki') {
        setTimeout(function() {
          alert('負けました');
        }, 250);
      } else if (this.cpHand === 'choki' && this.hand === 'paa') {
        setTimeout(function() {
          alert('負けました');
        }, 250);
      } else if (this.cpHand === 'paa' && this.hand === 'goo') {
        setTimeout(function() {
          alert('負けました');
        }, 250);
      }
    }
  }
});
