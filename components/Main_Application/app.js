import React, { Component } from 'react';
import PrimaryStage from './primarystage';
import SecondaryStage from './secondarystage';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayState: false,
            submittedData : [{
                name: '',
                data: ['','']
            }, {
                name: '',
                data: ['','']
            }, {
                name: '',
                data: ['','']
            }]
        };
        this.calculate = this.calculate.bind(this);
    }

    calculate(obj) {
        const { displayState } = this.state;
        this.setState({
            displayState: !displayState,
            submittedData : [{
                name: 'XXX',
                data: [obj.submittedData[0].data[0], obj.submittedData[0].data[1]]
            }, {
                name: 'XXX',
                data: [obj.submittedData[1].data[0], obj.submittedData[1].data[1]]
            }, {
                name: 'XXX',
                data: [obj.submittedData[2].data[0], obj.submittedData[2].data[1]]
            }]
        });
    }
    render(){
        return(
            <div className="app-wrapper">
                {!this.state.displayState &&
                    <div className="first-stage">
                        <PrimaryStage calculate={this.calculate} />
                    </div>
                }
                {this.state.displayState && 
                    <div className="second-stage">
                        <SecondaryStage primaryStageData={this.state} />
                    </div>
                }
            </div>
        );
    }
}

export default App;