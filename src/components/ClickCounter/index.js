// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  OnIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button onClick={this.OnIncrement} type="button" className="button">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
