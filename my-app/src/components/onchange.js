import React, { Component } from 'react';

class myTest extends Component {
    constructor() {
        super();
        return { userInput: ''};
    }

    handerChange(e) {
        this.setState({ userInput: e.target.value});
    }
    clearAndFocusInput() {
        this.setState({ userInput:''}, () => {
            this.refs.theInput.focus();
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div onClick={this.clearAndFocusInput.bind(this)}>
                        click to focus and reset
                    </div>
                    <input 
                        ref="theInput"
                        value = {this.state.userInput}
                        onChange={this.handerChange.bind(this)} 
                    />
                </div>
            </div>
        );
    }
}
export default myTest;