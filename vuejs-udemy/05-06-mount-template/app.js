var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

var vm1 = new Vue({
  // We comment out $el
  // el: '#app1',
  data: data, // We assign 'data' to vm1.$data
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      console.log(this.$refs.myButton);
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

// We can dynamically mount template '#app1'
vm1.$mount('#app1');

setTimeout(function() {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

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

var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

// We can also use Vue to mount template #app3 and populate it using with our custom template
// vm3.$mount('#app3');  

// or we can mount our custome template first (without any target)
vm3.$mount();
// and append it to '#app3' manually
document.getElementById('app3').appendChild(vm3.$el);
