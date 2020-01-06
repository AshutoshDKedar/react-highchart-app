import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class SecondaryStage extends Component{
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
            }]
        };
        this.value1 = React.createRef();
        this.value2 = React.createRef();
        this.value3 = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        var value1 = this.value1.current.value;
        var value2 = this.value2.current.value;
        var value3 = this.value3.current.value;
        //console.log(value1+" "+value2+" "+value3);
        this.setState({
            displayState: this.props.primaryStageData.displayState,
            submittedData: [{
                name: 'ABC',
                data: [parseInt(value1), parseInt(value1)]
            }, {
                name: 'DEF',
                data: [parseInt(value2), parseInt(value2)]
            }, {
                name: 'GHI',
                data: [parseInt(value3), parseInt(value3)]
            }]
        });
        //console.log(this.state.submittedData);
    }

    render(){
        const options = {
            chart: {
              type: 'column'
            },
            title: {
              text: ''
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
        return(
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 second-stage-container">
                    <div className="secondary-stage">
                        <input className="form-control form-control-sm custom-range slider" ref={this.value1} name="value1" type="range" min="1" max="10" step="1" value={parseInt(this.state.submittedData[0].data[0])} onChange={this.handleChange} onInput={this.handleChange} /><br/>
                        <input className="form-control form-control-sm custom-range slider" ref={this.value2} name="value2" type="range" min="1" max="10" step="1" value={parseInt(this.state.submittedData[1].data[0])} onChange={this.handleChange} onInput={this.handleChange} /><br/>
                        <input className="form-control form-control-sm custom-range slider" ref={this.value3} name="value3" type="range" min="1" max="10" step="1" value={parseInt(this.state.submittedData[2].data[0])} onChange={this.handleChange} onInput={this.handleChange} /><br/>
                        <input className="form-control form-control-sm btn btn-primary" type="button" value="Update" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 second-stage-container">
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        );
    }
}

export default SecondaryStage;