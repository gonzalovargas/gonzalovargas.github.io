function bcol(area) {
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
    bcol: "red",
    shownumber: 72,
    showU: true,
    showCFT: true,
    showIP: true,
    areas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },

  created: function () {
    // `this` points to the vm instance
    this.$http.get('https://raw.githubusercontent.com/gonzalovargas/gonzalovargas.github.io/master/mf/data.json').then(response => {

      // get body data
      this.info = JSON.parse(response.bodyText);
      for (let k = 0; k < this.info.length; k++) {
        this.info[k]["bcolor"] = bcol(this.info[k].area);
        this.info[k]["id"] = k;
        this.info[k]["show"] = k < this.shownumber;
      }
    }, response => {
      // error callback
      console.log('error');
    });
  },
  methods: {
    filterType: function () {
      console.log("filter");
      for (let k = 0; k < this.info.length; k++) {
        if (this.info[k]["tipo"] == 'Universidad') {
          this.info[k]["show"] = false;
        }
      }
      this.$forceUpdate();
    },
    showMore: function () {
      this.shownumber += 72;
      for (let k = 0; k < this.shownumber; k++) {
        this.info[k]["show"] = true;
      }
      this.$forceUpdate();
    }
  },
  computed: {

  },
  filters: {
    addpoints: function (value) {
      if (!value) return '-------'
      if (value == '-') return '-------'
      value = value.toString()
      if (value.length <= 6){
        return '$' + value.substring(0, 3) + '.' + value.substring(3, 6);
      } else {
        return '$' + value.charAt(0) + '.' + value.substring(0, 3) + '.' + value.substring(3, 6);
      }
    },
    pointtocomma: function (value) {
      if (!value) return '-------'
      if (value.toString() == '-') return '-------'
      return value.toString().replace(".", ",")
    }
  }

})