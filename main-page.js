// $(document).ready(function () {
// 	var categories= ['','HTML', 'CSS', 'Less', 'OO JavaScript', 'juery', 'Angular.js', 'DOM', 'java','ajax','D3.js','Node.js','Bootstrap'];
// 	var skillRatings = [90, 90, 90, 85, 85, 70, 80, 85, 80, 75, 70, 80];
// 	var svgHeight = 600;
//
// 	var xscale = d3.scale.linear()
// 					.domain([10,250])
// 					.range([0,722]);
//
// 	var yscale = d3.scale.linear()
// 					.domain([0,categories.length])
// 					.range([0,480]);
//
// 	var svg = d3.select('#skills')
// 					.append('svg')
// 					.attr('width', '100%')
// 					.attr('height', svgHeight)
// 					.attr('class', 'jumbotron text-center professional-skills-chart');
//
// 	var	yAxis = d3.svg.axis();
// 		yAxis
// 			.orient('left')
// 			.scale(yscale)
// 			.tickSize(0)
// 			.tickFormat(function (d,i) {
// 				return categories[i];
// 			});
//
// 	var y_xis = svg.append('g')
// 					  .attr("transform", "translate(120, -10)")
// 					  .attr('class', 'technology-labels')
// 					  .call(yAxis);
//
// 	var chart = svg.append('g')
// 						.attr("transform", "translate(150,0)")
// 						.attr('id', 'bars')
// 						.selectAll('rect')
// 						.data(skillRatings)
// 						.enter()
// 						.append('rect')
// 						.attr('height', 15)
// 						.attr({'x': 0, 'y': function (d, i) {
// 							return yscale(i) + 19; }
// 						})
// 						.attr('class', 'skill-bars')
// 						.attr('width', function (d) {
// 							return 0;
// 						});
//
// 	var transit = d3.select("svg").selectAll("rect")
// 						.data(skillRatings)
// 						.transition()
// 						.duration(1000)
// 						.attr("width", function (d) {
// 							return xscale(d * 2);
// 						});
//
// 	var transitext = d3.select('#bars')
// 						.selectAll('text')
// 						.data(skillRatings)
// 						.enter()
// 						.append('text')
// 						.attr('class', 'skill-rate')
// 						.attr({'x': function (d) { return xscale (d * 2) + 20; },'y': function (d,i) { return yscale(i) + 30; }})
// 						.text(function (d) {
// 							 return d + '%';
// 						});
//
// 	$(function () {
// 		var $workDetailDiv = $("#work-details")
// 		var $contactDetailsDiv = $(".contact-details");
// 		var $aboutMeLabel = $(".about-me-lebel");
// 		var $sillsDiv = $("#skills");
// 		var $educationWrapper = $("#education-wrapper");
// 		var newWorkDetailDivTop =  $workDetailDiv.outerHeight() / 2;
// 		var newcontactDetailsDivTop =  $contactDetailsDiv.outerHeight() / 2;
// 		$workDetailDiv.css({ top: - newWorkDetailDivTop + 'px' });
// 		$sillsDiv.css({ top: - newWorkDetailDivTop + 100 + 'px' });
// 		$contactDetailsDiv.css({ top: - newcontactDetailsDivTop + 'px' });
// 		$aboutMeLabel.css({ top: - newWorkDetailDivTop - 50 + 'px' });
// 		$educationWrapper.css({ "padding-bottom": newcontactDetailsDivTop + 80 + 'px' });
// 	});
// });
