function bcol(area){
  console.log(area);
  switch (area) {
    case 1:
      return '#8dd3c7';
    case 2:
      return '#ffffb3';
    case 3:
      return '#bebada';
    case 4:
      return '#fb8072';
    case 5:
      return '#80b1d3';
    case 6:
      return '#fdb462'
    case 7:
      return '#b3de69'
    case 8:
      return '#fccde5';
    case 9:
      return '#d9d9d9';
    case 10:
      return '#bc80bd';
    default:
      return 'white';
  }
}


var app = new Vue({
      el: '#app',
      data: {
        info: null,
        bcol: "red"
      },

      created: function () {
        // `this` points to the vm instance
        this.$http.get('https://raw.githubusercontent.com/gonzalovargas/gonzalovargas.github.io/master/mf/data.json').then(response => {

            // get body data
            this.info = JSON.parse(response.bodyText);

            console.log(response.body);

            for (let k = 0; k < this.info.length; k++) {
              this.info[k]["bcolor"] = bcol(this.info[k].area);
              this.info[k]["id"] = k;
            }        
          }, response => {
            // error callback
            console.log('error');
          });
      },
      methods: {
        filterType: function () {
          console.log("button");
        },
        
      },
      computed: {
        
        }
      
    })