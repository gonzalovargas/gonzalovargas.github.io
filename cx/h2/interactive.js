


var data = [
    { franchise: 'Harry Potter', revenue: { 1: 974, 2: 878, 3: 796, 4: 896, 5: 942, 6: 935, 7: 960, 8: 1341 } },
    { franchise: 'Transformers', revenue: { 1: 708, 2: 836, 3: 1123, 4: 1104, 5: 603 } },
    { franchise: 'Mission Impossible', revenue: { 1: 457, 2: 549, 3: 397, 4: 694, 5: 700 } },
    { franchise: 'Fast and the Furious', revenue: { 1: 206, 2: 236, 3: 363, 4: 363, 5: 629, 6: 789, 7: 1516, 8: 1237 } },
    { franchise: 'Hunger Games', revenue: { 1: 677, 2: 864, 3: 766, 4: 650 } },
    { franchise: 'Pirates of the Caribbean', revenue: { 1: 634, 2: 1066, 3: 963, 4: 1045, 5: 794 } }
];


var H = 800;
var W = 1200;
var pad = 100;

var chH = 300;
var chW = 300;




var svg = d3.select("body").append("svg")
    .attr("width", W)
    .attr("height", H);

var w = 0;
for (movie of data) {
    var total_revenue = 0;
    for (m in movie.revenue) {
        total_revenue += movie.revenue[m]
    }
    movie["total_revenue"] = total_revenue;
    movie["id"] = 'bar' + w;
    movie["hover"] = false;
    w += 1;
}

console.log(data);


var xScale = d3.scale.linear();
xScale.range([0, 300]);
xScale.domain([0, d3.max(data, function (d) { return parseFloat(d.total_revenue); })]);


//http://jonathansoma.com/tutorials/d3/using-enter-and-append/


var new_rects = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', 275)
    .attr('y', function (d, i) {
        return i * 60;
    })
    .attr('id', function (d) { return d.id; })
    .attr('height', 50)
    .attr('width', function (d) {
        return xScale(d.total_revenue); // data point * 2 pixels wide
    })
    .style('fill', function (d) {
        return 'blue';
        if (d.hover) {
            return 'orange';
        } else {
            return 'blue';
        }
    })
    .on('mouseover', isHover)
    .on('mouseout', notHover);

function isHover(d) {
    var bar = d3.select('#' + d.id);
    bar.style('fill', 'red');
    showChart(d);

    d3.select("#month").style("opacity", 100);
    d3.select("#revenue").style("opacity", 100);

}

function notHover(d) {

    var bar = d3.select('#' + d.id);
    bar.style('fill', 'blue');
    for (var e of d["erase"]) {
        e.remove();
    }
    d3.select("#month").style("opacity", 0);
    d3.select("#revenue").style("opacity", 0);
}


var trev = svg.selectAll('.text')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'text')
    .attr('x', 275 + 10)
    .attr('y', function (d, i) { return i * 60 + 35; })
    .text(function (d) { return '$' + d.total_revenue; })
    .attr('font-size', 30)
    .attr('font-family', 'sans-serif')
    .attr('text-anchor', 'start')
    .style('fill', 'white')
    .on('mouseover', isHover)
    .on('mouseout', notHover);


    var trev = svg.selectAll('.text2')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'text2')
    .attr('x', 250)
    .attr('y', function (d, i) { return i * 60 + 35; })
    .text(function (d) { return d.franchise; })
    .attr('font-size', 22)
    .attr('font-family', 'sans-serif')
    .attr('text-anchor', 'end')
    .style('fill', 'black')
    .on('mouseover', isHover)
    .on('mouseout', notHover);

    //d3.select("#blueLine").style("opacity", newOpacity);

//to hide http://bl.ocks.org/d3noob/5d621a60e2d1d02086bf
svg.append('text').attr("id", "month").text("Month").attr('x', 800).attr('y', 380).attr('text-anchor', 'start').style("opacity", 0);
svg.append('text').attr("id", "revenue").text("Revenue").attr('text-anchor', 'end').attr("transform", "translate(650,175) rotate(-90)").style("opacity", 0);


function showChart(data) {

    var yScaleChart = d3.scale.linear();
    yScaleChart.range([0, 300]);

    var max_revenue = -999;
    var min_month = 999;
    var max_month = 0;


    var new_list = [];

    for (var rev in data.revenue) {
        if (rev < min_month) {
            min_month = rev
        }
        if (rev > max_month) {
            max_month = rev
        }
        if (data.revenue[rev] > max_revenue) {
            max_revenue = data.revenue[rev];
        }
        new_list.push({
            "month": rev,
            "rev": data.revenue[rev]
        })
    }

    new_list.sort(x => -x.month);

    yScaleChart.domain([max_revenue, 0]);

    var xScaleChart = d3.scale.linear();
    xScaleChart.range([0, 300]);
    xScaleChart.domain([min_month, max_month]);



    // Define the line
    var valueline = d3.svg.line()
        .x(function (d) { return xScaleChart(d.month) + 700; })
        .y(function (d) {
            return yScaleChart(d.rev) + 40;
        });

    // Define the axes
    var xAxis = d3.svg.axis().scale(xScaleChart)
        .orient("bottom")
        .ticks(max_month - min_month + 1);

    var yAxis = d3.svg.axis().scale(yScaleChart)
        .orient("left");

    // Add the valueline path.
    var line = svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(new_list));


    // Add the X Axis
    var xaxis = svg.append("g")
        .attr("transform", "translate(700," + (chH + 40) + ")")
        .call(xAxis)
        ;

    // Add the Y Axis
    var yaxis = svg.append("g")
        .call(yAxis)
        .attr("transform", "translate(700,40)");

    data["erase"] = [line, xaxis, yaxis];

}
