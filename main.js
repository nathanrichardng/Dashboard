"use strict"


$(document).ready(function() {
    $.get( "decemberSales.json", function( data ) {
        for(var i = 0; i<data.sales.length; i++) {
            var sale = data.sales[i];
            $("#salesReport").append("<tr><td>" + sale.date + "</td><td>" + sale.itemNum + "</td><td>" + sale.itemName + "</td><td>" + sale.profit + "</td></tr>");
        }
    });

    $.get( "lineChartData.json", function( data ) {
        var lineChart = c3.generate({
            bindto: '#lineChart',
            data: {
                columns: data,
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
    });

    $.get( "gaugeChartData.json", function( data ) {
        var gaugeChart = c3.generate({
            bindto: '#gaugeChart',
            data: {
                columns: [
                    ['Current revenue', data.current]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
                min: 0,
                max: data.goal
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
    });

    $.get( "donutChartData.json", function( data ) {
        console.log(data);
        var donutChart = c3.generate({
            bindto: "#donutChart",
            data: {
                columns: data,
                type : 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            }
        });
    });
});