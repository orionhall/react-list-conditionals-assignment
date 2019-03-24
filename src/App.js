import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        inputText: ''
    };

    inputHandler = (event) => {
        let inputText = event.target.value;
        this.setState({ inputText });
    };

    charClickHandler = (index) => {
        let inputText = [...this.state.inputText.split('')];
        inputText.splice(index, 1);
        this.setState({inputText: inputText.join('') });
    };

    render () {
        let inputChars = this.state.inputText.split(''),
        charComponents = inputChars.map((char, index) => {
            return <CharComponent click={() => this.charClickHandler(index)}>{char}</CharComponent>;
        });

        return (
            <div className="App">
                <input type="text" onChange={this.inputHandler} value={this.state.inputText}/>
                <ValidationComponent inputText={this.state.inputText}/>
                {charComponents}
            </div>
        );
    }
}

export default App;
