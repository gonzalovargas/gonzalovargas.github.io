var app = new Vue({
      el: '#app',
      data: {
        info: null
      },

      created: function () {
        // `this` points to the vm instance
        this.$http.get('https://raw.githubusercontent.com/gonzalovargas/gonzalovargas.github.io/master/data.json').then(response => {

            // get body data
            this.info = JSON.parse(response.bodyText);

            console.log(response.body);
        
          }, response => {
            // error callback
            console.log('error');
          });
      },
      methods: {
        filterType: function () {
          console.log("button");
          
        }
      }
      
    })