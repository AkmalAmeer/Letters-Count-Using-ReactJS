import React, {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    const lettersCount = inputText.length

    return (
      <div className="letters-calculator-container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-label" htmlFor="phraseInput">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseInput"
            className="input-box"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <p className="letters-count">No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-image"
        />
      </div>
    )
  }
}

export default LettersCalculator
