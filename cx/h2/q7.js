

//var url = 'http://127.0.0.1:5000/q7data'
var url = 'http://cwcvrp.herokuapp.com/q7data'

var H = 580;
var W = 1000;

var world;
var countries;
var literacy;

var countries_data;


tip = d3.tip().attr('class', 'd3-tip').html(function (d) {
    return '<span>Country: </span>' + d.properties.name + '<br>' +
        '<span>Population: </span>' + d.population + '<br>' +
        '<span>Literacy: </span>' + d.literacy + '<br>'
});



var svg = d3.select("body").append("svg")
    .attr("width", W)
    .attr("height", H);
svg.call(tip)

function showMap() {


    var projection = d3.geo.equirectangular();
    //var projection = d3.geo.orthographic();

    var path = d3.geo.path().projection(projection);;

    minp = d3.min(countries_data, x => parseInt(x.population) + 1)
    maxp = d3.max(countries_data, x => parseInt(x.population))
    colors = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58']

    //minp = 1000000;
    //maxp = 400000000;
    //var new_domain = Array.from({ length: 9 }, (x, i) =>Math.round((minp + (i)* (maxp-minp)/9)/10000)/100);
    var new_domain = [.9, 3.67, 7.78, 27.8, 66.7, 189, 611]

    qwe = d3.scale.threshold();
    qwe.domain(new_domain)
    qwe.range(colors);

    svg.append("g")
        .attr("class", "counties")
        .selectAll("path")
        .data(countries_data)
        .enter().append("path")
        .attr("fill", function (d) {
            if (!d.population) {
                return 'silver'
            }
            if (d.population == 0) {
                return 'silver'
            }
            //return qwe((d.population));
            return qwe((d.population/1000000));
        })
        .attr("stroke", 'white')
        .attr("id", function (d) { return 'fig' + d.id })
        .attr("d", path)
        .on('mouseover', function (d) {
            tip.show(d);
            //d3.select('#' + 'fig' + d.id).attr("stroke", qwe((d.population) / 1000000))
        })
        .on('mouseout',function (d) {
            tip.hide(d);
            //d3.select('#' + 'fig' + d.id).attr("stroke", 'white')
        });


    
    var med = 50;
    var newTiles = svg.selectAll(".newTile")
        .data(new_domain)
        .enter().append("rect")
        .attr("class", "newTile")
        .attr("x", function (d, i) { return 400 + i*med; })
        .attr("y", function (d, i) { return 500; })
        .attr("width", med)
        .attr("height", med/2)
        .style("fill", function (d) {
            return qwe(d);
        });

    svg.selectAll(".text")
        .data(new_domain)
        .enter().append("text")
        .attr("class", "text")
        .attr("x", function (d, i) { return 400 + i*med; })
        .attr("y", function (d, i) { return 495 + med; })
        .text(function(d){ return d;})

    svg.append('text').text('Population (millions)').attr('x', 500).attr('y', 520 + med);

}


d3.json(url, function (data) {
    world = data.world;
    countries = data.countries;
    literacy = data.literacy;
    countriesById = {}
    for (country of countries.features) {
        countriesById[country.id] = country
    }

    for (country of world) {
        if (countriesById[country.id]) {
            countriesById[country.id]["population"] = country.population;
        }
    }
    for (country of literacy) {
        if (countriesById[country.id]) {
            countriesById[country.id]["literacy"] = country["Rate"];
        }
    }
    countries_data = Object.values(countriesById);
    showMap();

});
