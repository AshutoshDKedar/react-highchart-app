import React, { Component } from 'react';

class PrimaryStage extends Component{
    constructor(props){
        super(props);
        this.state = {
            submittedData: [{
                name: 'XXX',
                data: [0, 0]
            }, {
                name: 'XXX',
                data: [0, 0]
            }, {
                name: 'XXX',
                data: [0, 0]
            }]
        }
        this.value1 = React.createRef();
        this.value2 = React.createRef();
        this.value3 = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        //let updatedValue = this.item1.current.value;
        //let {name, value} = e.target;
        let value1 = this.value1.current.value, value2 = this.value2.current.value, value3 = this.value3.current.value;
        this.setState({
            displayState: false,
            submittedData:
            [{
                name: 'XXX',
                data: [value1, value1]
            }, {
                name: 'XXX',
                data: [value2, value2]
            }, {
                name: 'XXX',
                data: [value3, value3]
            }]
        });
    }
    render(){
        return(
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 primary-stage-container">
                    <div className="primary-stage">
                        <input className="form-control form-control-sm" type="text" placeholder="Enter the value" name="value1" ref={this.value1} onChange={this.handleChange} value={this.state.submittedData.value1} /><br/>
                        <input className="form-control form-control-sm" type="text" placeholder="Enter the value" name="value2" ref={this.value2} onChange={this.handleChange} value={this.state.submittedData.value2} /><br/>
                        <input className="form-control form-control-sm" type="text" placeholder="Enter the value" name="value3" ref={this.value3} onChange={this.handleChange} value={this.state.submittedData.value3} /><br/>
                        <input className="form-control form-control-sm btn btn-primary" type="button" value="Calculate" onClick={() => this.props.calculate(this.state)} disabled={this.state.submittedData.value1===""||this.state.submittedData.value2===""||this.state.submittedData.value3===""} />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-0 col-md-6 col-lg-6 primary-stage-container"></div>
            </div>
        );
    }
}

export default PrimaryStage;