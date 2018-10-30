const canvas = d3.select(".canvas");
const svg = canvas
  .append("svg")
  .attr("height", 600)
  .attr("width", 600);

const group = svg.append("g").attr("translate", "translate(50,100)");

// append shapes to svg container
group
  .append("rect")
  .attr("width", 600)
  .attr("height", 600)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20);
group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink");
group
  .append("line")
  .attr("x1", 370)
  .attr("x2", 400)
  .attr("y1", 20)
  .attr("y2", 120)
  .attr("stroke", "red");
svg
  .append("text")
  .attr("x", 20)
  .attr("y", 200)
  .attr("fill", "gray")
  .text("Hello ninjas")
  .style("font-family", "arial");
