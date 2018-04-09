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

function conditions(car){
  if (!app.intitution[car.tipo]){
    return false;
  }
  return true;
}


var app = new Vue({
  el: '#app',
  data: {
    w: 0,
    k: 0,
    info: null,
    bcol: "red",
    shownumber: 72,
    intitution: {
      'Universidad': true,
      'CFT': true,
      'IP': true
    },
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
        this.info[k]["show"] = false;
      }
      this.filterType();
    }, response => {
      // error callback
      console.log('error');
    });
  },
  methods: {
    filterType: function () {        
      while (this.w < this.shownumber && this.k < this.info.length){
        if (conditions(this.info[this.k])){
          this.info[this.k].show = true;
          this.w ++;
        }
        this.k ++;
        
      }
      this.$forceUpdate();
    },
    showMore: function () {
      this.shownumber += 72;
      this.filterType();
    },
    showCFT: function(){
      if (this.intitution['CFT']){
        this.intitution['CFT'] = false;
      } else {
        this.intitution['CFT'] = true;
      }
    },
    showIP: function(){
      if (this.intitution['IP']){
        this.intitution['IP'] = false;
      } else {
        this.intitution['IP'] = true;
      }
    },
    showU: function(){
      if (this.intitution['Universidad']){
        this.intitution['Universidad'] = false;
      } else {
        this.intitution['Universidad'] = true;
      }
    },
    update: function(){
      this.k = 0;
      this.w = 0;
      this.shownumber = 72;
      for (let k = 0; k < this.info.length; k++) {
        this.info[k]["show"] = false;
      }
      this.filterType();

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
        return '$' + value.charAt(0) + '.' + value.substring(1, 4) + '.' + value.substring(4, 7);
      }
    },
    pointtocomma: function (value) {
      if (!value) return '-------'
      if (value.toString() == '-') return '-------'
      return value.toString().replace(".", ",")
    }
  }

})