// Melbourne Runs on Coffee — Vega-Lite visualisations
// FIT2179 Data Visualisation, Semester 1 2026
// Author: Eugene Sulistyo

var opt = { "actions": false, "renderer": "svg" };

// Section 1 — Where Are the Cafes?
var map        = "charts/map.json";
var bar        = "charts/bar.json";
var scatter    = "charts/scatter.json";

// Section 2 — Twenty Years of Growth
var growth     = "charts/growth.json";
var heatmap    = "charts/heatmap.json";
var bump       = "charts/bump.json";

// Section 3 — Inside vs Outside
var donut      = "charts/donut.json";
var stacked    = "charts/stacked.json";
var multiples  = "charts/multiples.json";
var multiples2 = "charts/multiples2.json";

// Section 4 — Hidden Gems
var gem_scatter    = "charts/gem_scatter.json";
var gem_map        = "charts/gem_map.json";
var waffle         = "charts/waffle.json";
var cafes_per_1000 = "charts/cafes_per_1000.json";
var seats_per_1000 = "charts/seats_per_1000.json";

vegaEmbed("#chart-map",            map,           opt).catch(console.error);
vegaEmbed("#chart-bar",            bar,           opt).catch(console.error);
vegaEmbed("#chart-scatter",        scatter,       opt).catch(console.error);
vegaEmbed("#chart-growth",         growth,        opt).catch(console.error);
vegaEmbed("#chart-heatmap",        heatmap,       opt).catch(console.error);
vegaEmbed("#chart-bump",           bump,          opt).catch(console.error);
vegaEmbed("#chart-donut",          donut,         opt).catch(console.error);
vegaEmbed("#chart-stacked",        stacked,       opt).catch(console.error);
vegaEmbed("#chart-multiples",      multiples,     opt).catch(console.error);
vegaEmbed("#chart-multiples2",     multiples2,    opt).catch(console.error);
vegaEmbed("#chart-seats-per-1000", seats_per_1000,opt).catch(console.error);
vegaEmbed("#chart-gem-scatter",    gem_scatter,   opt).catch(console.error);
vegaEmbed("#chart-gem-map",        gem_map,       opt).catch(console.error);
vegaEmbed("#chart-waffle",         waffle,        opt).catch(console.error);