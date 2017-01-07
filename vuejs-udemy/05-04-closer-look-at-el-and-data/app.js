// We move data outside to test the vm1.$data
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

// Please take a look at vm1.$el and vm1.$data
// $el is to store the portion of DOM that is being managed by 'vm1'
// $data is to store the Vue data (data: {...})
console.log(vm1); 

// We can also access 'title' without proxy using $data.proxy
console.log(vm1.$data.title);

// We can test and verify that vm1.$data === data
console.log(vm1.$data === data);

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
