// Add your JavaScript code here
const MAX_WIDTH = Math.max(1080, window.innerWidth);
const MAX_HEIGHT = 800;
// const margin = {top: 40, right: 100, bottom: 40, left: 175};

// Assumes the same graph width, height dimensions as the example dashboard. Feel free to change these if you'd like
let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 400;
let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 400;
let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;

let filenames = ["data/Action_data.csv", "data/Adventure_data.csv", "data/Fighting_data.csv", "data/Misc_data.csv", "data/Platform_data.csv", "data/Puzzle_data.csv", "data/Racing_data.csv", "data/Role-Playing_data.csv", "data/Shooter_data.csv", "data/Simulation_data.csv", "data/Sports_data.csv", "data/Strategy_data.csv"]


let svg = d3.select("#graph1")
    .append("svg")
    .attr("width", graph_1_width)     // HINT: width
    .attr("height", graph_1_height)     // HINT: height
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);    // HINT: transform

// Set up reference to count SVG group
// let countRef = svg.append("g");

d3.csv("data/graph1_data.csv").then(function(data) {
    data = data.splice(0, NUM_EXAMPLES)

    var x = d3.scaleBand()
        .domain(data.map(function(d){return d.Name;}))
        .range([0, graph_1_width - margin.left - margin.right])
        .padding(1);  // Improves readability
    svg.append("g")
        .attr("transform", `translate(${0},${(graph_1_height - margin.top - margin.bottom)})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10, 0)rotate(-45)")
        .style("text-anchor", "end");

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){return parseFloat(d.Global_Sales);})])
        // .range([400, graph_1_height - 50]);
        .range([graph_1_height - margin.top - margin.bottom, 0]);
    svg.append("g")
        .call(d3.axisLeft(y).tickSize(0).tickPadding(10));


    let color = d3.scaleOrdinal()
        .domain(data.map(function(d) { return d["Name"] }))
        .range(d3.quantize(d3.interpolateHcl("#e26670", "#81c2c3"), NUM_EXAMPLES));

    svg.selectAll("myline")
    .data(data)
    .enter()
    .append("line")
      .attr("x1", function(d) { return x(d.Name); })
      .attr("x2", function(d) { return x(d.Name); })
      .attr("y1", function(d){return y(parseFloat(d.Global_Sales));})
      .attr("y2", y(0))
      .attr("stroke", "grey")
  
  // Circles
    svg.selectAll("mycircle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return x(d.Name); })
      .attr("cy", function(d) { return y(parseFloat(d.Global_Sales));})
      .attr("r", "4")
      .style("fill", "#69b3a2")
      .attr("stroke", "black")

    svg.append("text")
        .attr("transform", `translate(${(graph_1_width - margin.left - margin.right) / 2}, ${(graph_1_height - margin.top - margin.bottom) + 120})`)       // HINT: Place this at the bottom middle edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .text("Video Games");

    // TODO: Add y-axis label
    svg.append("text")
        .attr("transform", `translate(${-120}, ${(graph_1_height - margin.top - margin.bottom) /2})`)       // HINT: Place this at the center left edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .text("Global Sales (in millions)");

    // TODO: Add chart title
    svg.append("text")
        .attr("transform", `translate(${(graph_1_width - margin.left - margin.right) / 2}, ${-25})`)       // HINT: Place this at the top middle edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .style("font-size", 18)
        .text("Top 10 Video Games of all time");

});


//GRAPH2!!!!!

var svg2 = d3.select("#graph2")
    .append("svg")
    .attr("width", graph_2_width)
    .attr("height", graph_2_height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)


d3.csv("data/graph2_data.csv").then(function(data) {
    

    var subgroups = data.columns.slice(1)

    var groups = d3.map(data, function(d){return(d.Genre)}).keys()

    
    var x_2 = d3.scaleBand()
        .domain(groups)
        .range([0, graph_2_width - margin.left - margin.right])
        .padding(0.2)
    svg2.append("g")
         .attr("transform", `translate(${0},${graph_2_height - margin.top - margin.bottom})`)
        .call(d3.axisBottom(x_2).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(-10, 0)rotate(-45)")
        .style("text-anchor", "end");


    var y_2 = d3.scaleLinear()
        .domain([0, 1800])
        .range([graph_2_height - margin.top - margin.bottom, 0])
    svg2.append("g")
        .call(d3.axisLeft(y_2));


    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#3a405a','#aec5eb','#f9dec9', "#e9afa3"])

    var stacked_data = d3.stack()
        .keys(subgroups)
        (data)


    svg2.append("text")
        .attr("transform", `translate(${(graph_2_width - margin.left - margin.right) / 2}, ${(graph_2_height - margin.top - margin.bottom) + 70})`)       // HINT: Place this at the bottom middle edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .text("Genre");

    // TODO: Add y-axis label
    svg2.append("text")
        .attr("transform", `translate(${-120}, ${(graph_2_height - margin.top - margin.bottom)/2})`)       // HINT: Place this at the center left edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .text("Sales (in millions)");

    // TODO: Add chart title
    svg2.append("text")
        .attr("transform", `translate(${(graph_2_width - margin.left - margin.right) / 2}, ${0})`)       // HINT: Place this at the top middle edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .style("font-size", 18)
        .text("Genre Sales based on Region");


    var tooltip = d3.select("#graph2")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")

    var mouseover = function(d) {
        var subgroupName = d3.select(this.parentNode).datum().key;
        var subgroupValue = d.data[subgroupName];
        tooltip
            .html("Region: " + subgroupName + "<br>" + "Sales: " + parseFloat(subgroupValue).toFixed(1))
            .style("opacity", 1)
  }

    var mousemove = function(d) {
        tooltip
        .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", (d3.mouse(this)[1]+ 400) + "px")
    }
    var mouseleave = function(d) {
        tooltip
        .style("opacity", 0)
  }

    svg2.append("g")
        .selectAll()
        .data(stacked_data)
        .enter().append("g")
        .attr("fill", function(d) {return color(d.key); }) 
        .selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d) { return x_2(d.data.Genre); })
        .attr("y", function(d) { return y_2(d[1]); })
        .attr("width", x_2.bandwidth())
        .attr("height", function(d) { return y_2(d[0]) - y_2(d[1]); })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

});



//GRAPH3!!!!!!!

let svg3 = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width)     // HINT: width
    .attr("height", graph_3_height)     // HINT: height
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`); 

let x_3 = d3.scaleLinear()
    .range([0, graph_3_width - margin.left - margin.right]);

let y_3 = d3.scaleBand()
    .range([0, graph_3_height - margin.top - margin.bottom])
    .padding(0.1);  // Improves readability


let countRef3 = svg3.append("g");
// Set up reference to y axis label to update text in setData
let y_axis_label = svg3.append("g");

svg3.append("text")
    .attr("transform", `translate(${(graph_3_width - margin.left - margin.right) / 2}, ${(graph_3_height - margin.top - margin.bottom) + 15})`)       // HINT: Place this at the bottom middle edge of the graph
    .style("text-anchor", "middle")
    .text("Global Sales (in millions)");

svg3.append("text")
    .attr("transform", `translate(${-120}, ${(graph_3_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
    .style("text-anchor", "middle")
    .text("Publishers");


let title = svg3.append("text")
    .attr("transform", `translate(${(graph_3_width - margin.left - margin.right) / 2}, ${-20})`)       // HINT: Place this at the top middle edge of the graph
    .style("text-anchor", "middle")
    .style("font-size", 19);

function setData(index, attr) {
    // TODO: Load the artists CSV file into D3 by using the d3.csv() method. Index into the filenames array
    d3.csv(filenames[index]).then(function(data) {
        data = data.splice(0, NUM_EXAMPLES)

        x_3.domain([0, d3.max(data, function(d){return parseFloat(d.Global_Sales);})]);

        y_3.domain(data.map(function(d){return d[attr];}));

        y_axis_label.call(d3.axisLeft(y_3).tickSize(0).tickPadding(10));

        let bars = svg3.selectAll("rect").data(data);

        let color = d3.scaleOrdinal()
        .domain(data.map(function(d) { return d[attr] }))
        .range(d3.quantize(d3.interpolateHcl("#e26670", "#81c2c3"), NUM_EXAMPLES));


        bars.enter()
            .append("rect")
            .merge(bars)
            .transition()
            .duration(1000)
            .attr("x", x_3(0))
            .attr("fill", function(d) {return color(d[attr]); }) 
            .attr("y", function(d) {return y_3(d[attr]);})               // HINT: Use function(d) { return ...; } to apply styles based on the data point
            .attr("width", function(d){return x_3(parseFloat(d.Global_Sales));})
            .attr("height",  y_3.bandwidth()); 

        let counts = countRef3.selectAll("text").data(data);

        counts.enter()
            .append("text")
            .merge(counts)
            .transition()
            .duration(1000)
            .attr("x", function(d) { return x_3(parseFloat(d.Global_Sales)) + 12;})       // HINT: Add a small offset to the right edge of the bar, found by x(d.count)
            .attr("y", function(d) { return y_3(d[attr]) + 20})       // HINT: Add a small offset to the top edge of the bar, found by y(d.artist)
            .style("text-anchor", "start")
            .text(function(d) { return parseFloat(d.Global_Sales).toFixed(1)}); 
        
        if (attr == 'Action') {
            title.text("Top 10 Publishers for Action Games");
        } else if (attr == 'Adventure') {
            title.text("Top 10 Publishers for Adventure Games");
        } else if (attr == 'Fighting') {
            title.text("Top 10 Publishers for Fighting Games");
        } else if (attr == 'Platform') {
            title.text("Top 10 Publishers for Platform Games");
        } else if (attr == 'Puzzle') {
            title.text("Top 10 Publishers for Puzzle Games");
        } else if (attr == 'Racing') {
            title.text("Top 10 Publishers for Racing Games");
        } else if (attr == 'Misc') {
            title.text("Top 10 Publishers for Misc Games");
        } else if (attr == 'Role-Playing') {
            title.text("Top 10 Publishers for Role-Playing Games");
        } else if (attr == 'Shooter') {
            title.text("Top 10 Publishers for Shooter Games");
        } else if (attr == 'Simulation') {
            title.text("Top 10 Publishers for Simulation Games");
        } else if (attr == 'Sports') {
            title.text("Top 10 Publishers for Sports Games");
        } else {
            title.text("Top 10 Publishers for Strategy Games");
        }
            
        bars.exit().remove();
        counts.exit().remove();
    });
}

setData(0, "Action");





