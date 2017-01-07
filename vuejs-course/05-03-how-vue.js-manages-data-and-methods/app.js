var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
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

vm1.newProp='New!'; // This is a valid prop but it will not be managed by Vue. It is not going to be reactive.
console.log(vm1); // And if you check vm1 instance on Console. you will notice that 'newProp' has no 'get' and 'set'

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
