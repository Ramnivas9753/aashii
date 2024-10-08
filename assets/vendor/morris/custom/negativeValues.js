// Morris Negative values
var neg_data = [
	{ period: "2023-02-12", a: 100 },
	{ period: "2023-01-03", a: 75 },
	{ period: "2022-08-08", a: 50 },
	{ period: "2022-05-10", a: 25 },
	{ period: "2022-03-14", a: 0 },
	{ period: "2022-01-10", a: -25 },
	{ period: "2021-12-10", a: -50 },
	{ period: "2021-10-07", a: -75 },
	{ period: "2021-09-25", a: -100 },
];
Morris.Line({
	element: "negativeValues",
	data: neg_data,
	xkey: "period",
	ykeys: ["a"],
	labels: ["Series A"],
	units: "%",
	resize: true,
	hideHover: "auto",
	gridLineColor: "#5a5c68",
	pointFillColors: ["#ffffff"],
	pointStrokeColors: [
		"#69c0f8", "#6eb960", "#111111"
	],
	lineColors: [
		"#69c0f8", "#6eb960", "#111111"
	],
});
