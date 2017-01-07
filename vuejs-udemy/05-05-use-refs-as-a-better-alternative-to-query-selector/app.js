var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

var vm1 = new Vue({
  el: '#app1',
  data: data, // We assign 'data' to vm1.$data
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');

      // Check $refs. We can access particular DOM sections (for example: 'myButton' and 'heading').
      // No need of query selector like jQuery (for example: $('button[ref=myButton]'))
      console.log(this.$refs);

      // We can access just the <button> that has 'ref' == 'myButton'
      console.log(this.$refs.myButton);

      // We can modify the <button>'s innerText
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

setTimeout(function() {
  vm1.title = 'Changed by Timer';
  vm1.show(); // Notice that we call 'vm1.show' directly. This is because Vue instance proxies its members.
}, 3000);

// We can modify the <header>'s innerText
// However changes on $refs will only directly change the DOM, not the Vue template. It is not reactive.
// $refs are best to access just the DOM values not modifying them.
vm1.$refs.heading.innerText = 'Something else';

var vm2 = new Vue({
  el: '#app2',
  data: { 
    title: 'The second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});
