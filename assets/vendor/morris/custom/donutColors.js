// Morris Donut
Morris.Donut({
	element: "donutColors",
	data: [
		{ value: 30, label: "foo" },
		{ value: 15, label: "bar" },
		{ value: 10, label: "baz" },
		{ value: 5, label: "A really really long label" },
	],
	backgroundColor: "#69c0f8",
	labelColor: "#69c0f8",
	colors: [
		"#ff7d41", "#ff41d3", "#796dd8", "#69c0f8", "#6eb960", "#111111"
	],
	resize: true,
	hideHover: "auto",
	gridLineColor: "5a5c68",
	formatter: function (x) {
		return x + "%";
	},
});
