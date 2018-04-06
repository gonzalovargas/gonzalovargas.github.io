function bcol(area){
  console.log(area);
  switch (area) {
    case 'Salud':
      return '#8dd3c7';
    case 'Tecnología':
      return '#ffffb3';
    case 'Administración y Comercio':
      return '#bebada';
    case 'Agropecuaria':
      return '#fb8072';
    case 'Arte y Arquitectura':
      return '#80b1d3';
    case 'Ciencias Sociales':
      return '#fdb462'
    case 'Derecho':
      return '#b3de69'
    case 'Educación':
      return '#fccde5';
    case 'Ciencias Básicas':
      return '#d9d9d9';
    case 'Humanidades':
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