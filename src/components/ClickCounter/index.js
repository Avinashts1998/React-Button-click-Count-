import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  OnIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="headline">
          The Button has been Clicked <span className="span">{count} </span>
          Times
        </h1>
        <p className="paragraph">Click the button to Increase the Count..!</p>
        <div className="button-container">
          <button className="button" onClick={this.OnIncrementCount}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
