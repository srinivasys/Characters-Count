import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import CountDetails from './components/CountDetails'

import './App.css'

class App extends Component {
  state = {inputList: [], addInput: ''}

  onChangeInput = event => {
    this.setState({addInput: event.target.value})
  }

  onClickAdd = () => {
    const {addInput} = this.state

    const name = addInput
    const count = addInput.length
    const id = uuid()

    this.setState(prevState => ({
      inputList: [...prevState.inputList, {id, name, count}],
      addInput: '',
    }))
  }

  render() {
    const {inputList, addInput} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <div className="character-container">
            <div className="count-container">
              <h1 className="heading">
                Count the characters like a <br /> Boss...
              </h1>
            </div>
            <ul className="list-item">
              {inputList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="logo"
                />
              ) : (
                inputList.map(eachItem => (
                  <CountDetails key={eachItem.id} itemDetails={eachItem} />
                ))
              )}
            </ul>
          </div>
          <div className="counter-container">
            <h1 className="head">Character Counter</h1>
            <form className="form">
              <input
                type="text"
                className="input"
                placeHolder="Enter the characters here"
                onChange={this.onChangeInput}
                value={addInput}
              />
              <button type="button" className="btn" onClick={this.onClickAdd}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
