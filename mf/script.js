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
      return '#d9d9d9';
    case 6:
      return '#fdb462'
    case 7:
      return '#b3de69'
    case 8:
      return '#bc80bd';
    case 9:
      return '#80b1d3';
    case 10:
      return '#fccde5';
    default:
      return 'white';
  }
}

function conditions(car){
  if (!app.intitution[car.tipo]){
    return false;
  }
  if (!app.shownAreas[car.area]){
    return false;
  }
  if (app.stringfilter != ''){
    var words_list = app.stringfilter.toLowerCase().split(" ");
    console.log(words_list);
    for (const word of words_list) {
      full_string = car.nombre + ' ' + car.institucion
      if (!full_string.toLowerCase().includes(word)){
        return false;
      }
    }
  }
  return true;
}


window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
      app.showMore();
  }
};


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
    areas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    shownAreas: {},
    filtered_info: [],
    leftd: '-620px',
    stringfilter: ''
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

      for (let k = 1; k <= 10; k++) {
        this.shownAreas[k.toString()] = true;
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
      this.filtered_info = this.info.filter(car => car.show)
      //this.$forceUpdate();
    },
    showMore: function () {
      this.shownumber += 72;
      this.filterType();
    },
    showInst: function(value){
      this.intitution[value] = !this.intitution[value];
      this.update();

    },
    showArea: function(value){

      this.shownAreas[value] = !this.shownAreas[value];
      this.update();
      //this.$forceUpdate();

    },
    sortby: function(value){

      for (let k = 0; k < this.info.length; k++) {
        this.info[k]["show"] = false;
      }
      this.shownumber = 72;
      this.filtered_info = [];
      //this.$forceUpdate();

      function compareSalary(a, b) {
        if (a['ingreso'] == "-"){
          a_ = 0;
        } else {
          a_ = parseFloat(a['ingreso']);
        }
        if (b['ingreso'] == "-"){
          b_ = 0;
        } else {
          b_ = parseFloat(b['ingreso']);
        }
        return - (a_ - b_);
      }
      function compareEmpl(a, b) {
        if (a['empleabilidad'] == "-"){
          a_ = 0;
        } else {
          a_ = parseFloat(a['empleabilidad']);
        }
        if (b['empleabilidad'] == "-"){
          b_ = 0;
        } else {
          b_ = parseFloat(b['empleabilidad']);
        }
        return - (a_ - b_);
      }
      function compareDuration(a, b) {
        if (a['duracion'] == "-"){
          a_ = 99;
        } else {
          a_ = parseFloat(a['duracion']);
        }
        if (b['duracion'] == "-"){
          b_ = 99;
        } else {
          b_ = parseFloat(b['duracion']);
        }
        return (a_ - b_);
      }
      function compareRetention(a, b) {
        if (a['retencion'] == "-"){
          a_ = 0;
        } else {
          a_ = parseFloat(a['retencion']);
        }
        if (b['retencion'] == "-"){
          b_ = 0;
        } else {
          b_ = parseFloat(b['retencion']);
        }
        return - (a_ - b_);
      }
      switch (value) {
        case "salary":
          this.info.sort(compareSalary);
          break;
        case 'empleabilidad':
          this.info.sort(compareEmpl);
          break;
        case 'duration':
          this.info.sort(compareDuration);
          break;
        case 'retention':
          this.info.sort(compareRetention);
          break;
      }
      this.update();

    }
    ,
    update: function(){
      this.k = 0;
      this.w = 0;
      this.shownumber = 72;
      for (let k = 0; k < this.info.length; k++) {
        this.info[k]["show"] = false;
      }
      this.filterType();
    },
    filterbar: function(){
      if (this.leftd == '0px'){
        this.leftd = '-620px'
      } else {
        this.leftd = '0px'
      }
    },
    changetext: function(value){
      this.stringfilter = value.target.value;
      this.update();
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