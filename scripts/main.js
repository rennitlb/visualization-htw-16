"use strict";$(function(){Highcharts.setOptions({chart:{type:"column"},credits:{enabled:!1},tooltip:{enabled:!1},xAxis:{visible:!1},yAxis:{min:0,visible:!1}}),$("#chart1").highcharts({title:{text:"Allgemeiner Tee Konsum 2015"},series:[{name:"Männer",data:[66]},{name:"Frauen",data:[77]}]}),$("#chart2").highcharts({title:{text:"Marktanteil 2011"},series:[{name:"Pepsi",data:[11.5]},{name:"Coca Cola",data:[25.9]}]}),$("#chart3").highcharts({title:{text:"Anzahl Vegan-/Vegetarier_innen in Österreich in % der Bevölkerung"},series:[{name:"2005",data:[2.9]},{name:"2013",data:[9]}]})});