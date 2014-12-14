"use strict"

var lineChart = c3.generate({
    bindto: '#lineChart',
    data: {
    	columns: [
    		['Online', 30350, 23671, 22879, 33769, 37264, 35229],
        	['In-Store', 24875, 18213, 35758, 35877, 28241, 26231],
        	['Total', 55225, 41884, 58637, 69646, 65505, 61460]
      	],
      	types: {
    		Dave: "line"
      	}
    },

    axis: {
    	x: {
    		label: {
    			text: 'Month',
    			position: 'outer-right'
    		}
    	},
    	y: {
    		label: {
    			text: 'Revenue',
    			position: 'outer-middle'
    		}
    	}
    }

});

var gaugeChart = c3.generate({
    bindto: '#gaugeChart',
    data: {
        columns: [
            ['Current revenue', 35523]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
        min: 0,
        max: 50000
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [20000, 25000, 40000, 50000]
        }
    },
    size: {
        height: 180
    }
});

var donutChart = c3.generate({
    bindto: "#donutChart",
    data: {
        columns: [
            ["Appliances", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["Electronics", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["Phones", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});


$(document).ready(function() {
    $.get( "decemberSales.json", function( data ) {
        for(var i = 0; i<data.sales.length; i++) {
            var sale = data.sales[i];
            $("#salesReport").append("<tr><td>" + sale.date + "</td><td>" + sale.itemNum + "</td><td>" + sale.itemName + "</td><td>" + sale.profit + "</td></tr>");
        }
    });
});