import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import { dark } from "@material-ui/core/styles/createPalette"

class HealthyChart extends Component {
    state = {
        series: [{
            name: "Food Insecurity (overall)",
            data: [44, 54, 23],
        }, {
            name: 'Food Insecurity (low)',
            data: [76, 85, 101]
        }, {
            name: 'Food Insecurity (very low)',
            data: [35, 41, 36]
        }, {
            name: 'Overweight',
            data: [35, 41, 36]
        }, {
            name: 'Obesity',
            data: [35, 41, 36]
        }, {
            name: 'Diabetes',
            data: [35, 41, 36]
        }, {
            name: 'High Cholesterol',
            data: [35, 41, 36]
        }, {
            name: "Hypertension",
            data: [21, 2, 6]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '75%',
                    dataLabels: {
                        position: "top"
                    }
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val, opts) {
                    return `${val}%`
                },
                offsetY: -20,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: ["black"]
                },
            },
            legend: {
                showForSingleSeries: true
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [2011, 2015, 2018],
                title: {
                    text: "Years (2011-2018)"
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                title: {
                    text: 'Percentage of LA County population'
                }
            },
            fill: {
                opacity: 1
            },
            colors:['#DB5461', '#218380', '#4DFFF3'],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return `${val}%`
                    }
                }
            }
        },
    }
    componentDidMount() {
        // this.refreshGraph()
    }
    // refreshGraph = () => {
    //     const series = this.props.indicators.map(indicator => {
    //         if(indicator === "food-insecurity-overall") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if (indicator === "food-insecurity-low") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if(indicator === "food-insecurity-vlow") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if (indicator === "overweight") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if (indicator === "obesity") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if(indicator === "diabetes") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if(indicator === "high-cholesterol") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         } else if(indicator === "hypertension") {
    //             return {
    //                 name: "Food Insecurity (overall)",
    //                 data: [123,2141,45]
    //             }
    //         }
    //     })
    //     console.log(series, "this")
    //     // this.setState({
    //     //     series
    //     // })
    // }
    render() {
        return (
            <div id="chart">
                <ReactApexChart 
                    options={this.state.options} 
                    series={this.props.series} 
                    type="bar" 
                    height={500}
                    width={"100%"}
                />
            </div>
        )
    }
}

export default HealthyChart