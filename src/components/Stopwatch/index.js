// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerStarted: false, seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onClickStart = () => {
    this.timerId = setInterval(this.updateTimer, 1000)
    this.setState({timerStarted: true})
  }

  onClickStop = () => {
    clearInterval(this.timerId)
    this.setState({timerStarted: false})
  }

  onClickReset = () => {
    clearInterval(this.timerId)
    this.setState({timerStarted: false, seconds: 0})
  }

  getMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {seconds} = this.state
    const secs = Math.floor(seconds % 60)

    if (secs < 10) {
      return `0${secs}`
    }
    return secs
  }

  render() {
    const {timerStarted} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="icon"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="timer-text">{time}</h1>
            <div className="buttons-container">
              <button
                disabled={timerStarted}
                onClick={this.onClickStart}
                className="btn start-btn"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onClickStop}
                className="btn stop-btn"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onClickReset}
                className="btn reset-btn"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
