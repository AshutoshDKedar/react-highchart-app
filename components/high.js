import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class High extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayState: this.props.primaryStageData.displayState,
            submittedData: [{
                name: 'ABC',
                data: [parseInt(this.props.primaryStageData.submittedData[0].data[0]), parseInt(this.props.primaryStageData.submittedData[0].data[1])]
            }, {
                name: 'DEF',
                data: [parseInt(this.props.primaryStageData.submittedData[1].data[0]), parseInt(this.props.primaryStageData.submittedData[1].data[1])]
            }, {
                name: 'GHI',
                data: [parseInt(this.props.primaryStageData.submittedData[2].data[0]), parseInt(this.props.primaryStageData.submittedData[2].data[1])]
            }
        ]};
    }
    
    render(){
        const options = {
            chart: {
              type: 'column'
            },
            title: {
              text: 'My chart'
            },
            xAxis: {
                categories: ['WITHOUT VA', 'WITH VA']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: this.state.submittedData
        };
        console.log(this.state.submittedData);
        
        return(
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} /*ref={this.chart}*/ />
            </div>
            
        );
    }
    
}

export default High;