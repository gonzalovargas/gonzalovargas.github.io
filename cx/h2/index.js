
//var url = 'http://127.0.0.1:5000/q5data'
var url = 'http://cwcvrp.herokuapp.com/q5data'



var W = 1000;
var H = 800;

var i = 0
var duration = 750
var root;

var tree = d3.layout.tree().size([800, 1000]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", W)
    .attr("height", H)
    .append("g")
    .attr("transform", "translate(200,0)");

d3.json(url, function (error, data) {

    root = data;
    root.x0 = H / 2;
    root.y0 = 0;
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }
    root.children.forEach(collapse);
    update(root);
});

function paint(d, color) {
    var new_id = d.id.replace('/', '_').replace(' ', '_')
    d3.select('#text' + new_id).style("fill", color);
    if (d.parent) {
        paint(d.parent, color)
    }
}

function labelTextSize(d) {
    var c = 0;
    while (d.parent) {
        c++;
        d = d.parent
    }
    var sizes = [28, 18, 14, 10]
    return sizes[c];
}

d3.select(self.frameElement).style("height", "800px");

function update(source) {
    var nodes = tree.nodes(root).reverse();
    var links = tree.links(nodes);
    nodes.forEach(function (d) { d.y = d.depth * 180; });
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) {
            if (d._children){
                return 'black';
            } else{
                return 'white';
            }
        })
        .on('mouseover', function (d) {
            paint(d, 'blue');
        })
        .on('mouseout', function (d) {
            paint(d, 'black');
        });

    nodeEnter.append("text")
        .attr("x", function (d) {
            if (d.children || d._children){
                return -10
            } else {
                return 10
            }})
        .attr("text-anchor", function (d) {
            if (d.children || d._children){
                return 'end'
            } else {
                return 'start'
            }})
        .attr("alignment-baseline", "middle")
        .text(function (d) { return d.data.name; })
        .style("fill-opacity", 0)
        .style("font-size", function (d) { return labelTextSize(d); })
        .attr("id", function (d) {
            var new_id = d.id.replace('/', '_').replace(' ', '_')
            return "text" + new_id;
        })
        .on('mouseover', function (d) {
            paint(d, 'blue');
        })
        .on('mouseout', function (d) {
            paint(d, 'black');
        });

    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 4.5)
        .style("fill", function (d) { 
            if (d._children){
                return 'blue'
            } else {
                return 'white'
            }
        });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 0);

    nodeExit.select("text")
        .style("fill-opacity", 0);


    var link = svg.selectAll("path.link")
        .data(links, function (d) { return d.target.id; });


    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        });


    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}