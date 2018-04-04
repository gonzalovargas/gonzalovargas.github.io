

// based on http://bl.ocks.org/tjdecke/5558084

//var url = "http://127.0.0.1:5000/q4data";
var url = "http://cwcvrp.herokuapp.com/q4data";


let W = 600;
let H = 400;
var pad = 5;
var dataset;
var seasons_dict = {};
var sn = 6;
var fn = 6;
var en = 10;

var names = [
    "Baratheon",
    "Greyjoy",
    "Lannister",
    "Stark",
    "Targaryen",
    "Tyrell",
]

var svg = d3.select("body").append("svg")
    .attr("width", W + 250)
    .attr("height", H + 200);

function processData(callback) {
    for (let k = 1; k < sn + 1; k++) {
        seasons_dict[k] = [];
    }
    for (data of dataset) {
        e = parseInt(data.episode);
        s = parseInt(data.season);
        for (f in names) {
            seasons_dict[s].push({
                "season": s,
                "family": names[f],
                "fnumber": f,
                "appereances": parseInt(data[names[f]]),
                "episode": e
            })
        }
    }
    addHeatMap(seasons_dict[1]);

    
    for (let k = 1; k < sn + 1; k++) {
        var season_form = document.getElementById("select_season");
        var option = document.createElement("option");
        option.text = 'Season '+ k;
        option.value = k;
        season_form.add(option);
    }

}

function addHeatMap(season_list) {

    var wsep = W / en;
    var hsep = H / fn;



    //https://stackoverflow.com/questions/39796516/how-can-i-create-multiple-squares-in-d3

    var new_dataset = season_list;
    var minApp = d3.min(new_dataset, function (d) {
        return d.appereances;
    })
    var maxApp = d3.max(new_dataset, function (d) { return d.appereances });
    var newTilesArray = Array.from({ length: 9 }, (x, i) => ((minApp + (i) * (maxApp - minApp) / 9)));

    colors = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'] //http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3
    
    //http://bl.ocks.org/jfreyre/b1882159636cc9e1283a
    color = d3.scale.quantize();
    color.domain([0, maxApp]);
    color.range(colors);

    svg.selectAll(".tile")
        .data(new_dataset)
        .enter().append("rect")
        .attr("class", "tile")
        .attr("x", function (d) { return 100 + (parseInt(d.episode) - 1) * wsep; })
        .attr("y", function (d) { return parseInt(d.fnumber) * hsep; })
        .attr("width", wsep - pad)
        .attr("height", hsep - pad)
        .style("fill", function (d) {
            return color(d.appereances);
        });


    var newTiles = svg.selectAll(".newTile")
        .data(newTilesArray)
        .enter().append("rect")
        .attr("class", "newTile")
        .attr("x", function (d, i) { return 300 + i * hsep / 2; })
        .attr("y", function (d, i) { return H + 50; })
        .attr("width", (wsep - pad) / 2)
        .attr("height", (hsep - pad) / 2)
        .style("fill", function (d) {
            return color(d);
        });

    for (i = 0; i < 9; i++) {
        svg.append('text').text(Math.round(newTilesArray[i]))
            .attr('x', function (d) { return 300 + i * hsep / 2; })
            .attr('y', function (d, i) { return H + hsep + 35; })
            .attr('text-anchor', 'start');
    }

    svg.append('text').text('House').attr('text-anchor', 'start').attr("transform", "translate(20,300) rotate(-90)");
    svg.append('text').text('Episode').attr('x', W + 100).attr('y', H).attr('text-anchor', 'start');
    svg.append('text').text('Number of appareances').attr('x',400).attr('y', H + 130).attr('text-anchor', 'start');


    var houseScale = d3.scale.linear();
    houseScale.domain([1, 6]);
    houseScale.range([hsep / 2, H - pad - hsep / 2]);
    var yAxis = d3.svg.axis()
        .scale(houseScale)
        .orient("left")
        .tickFormat(function(d){ return names[d-1];}); // https://stackoverflow.com/questions/16549868/d3-remove-comma-delimiters-for-thousands

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 100 + ",0)")
        .call(yAxis);

    var episodeScale = d3.scale.linear();
    episodeScale.domain([1, 10]);
    episodeScale.range([Math.round(wsep / 2), Math.round(W - pad - wsep / 2)]).nice();

    var xAxis = d3.svg.axis()
        .scale(episodeScale)
        .orient("bottom");

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(100," + (H - pad) + ")")
        .call(xAxis);
}




d3.json(url, function (json) {
    dataset = json;
    processData(addHeatMap);
});

function onchange() {
    svg.selectAll("*").remove();
    new_value = parseInt(document.getElementById("select_season").value);
    addHeatMap(seasons_dict[new_value]);
}

var select = d3.select('#select_season').on('change', onchange);