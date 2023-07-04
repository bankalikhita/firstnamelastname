// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {fc: false, lc: false}

  fn = () => {
    const {fc} = this.state
    this.setState(() => ({fc: !fc}))
  }

  ln = () => {
    const {lc} = this.state
    this.setState(() => ({lc: !lc}))
  }

  render() {
    const {fc, lc} = this.state
    return (
      <div className="div">
        <h1 className="head">Show/Hide</h1>
        <div className="rows">
          <div className="column1">
            <button className="btn" type="button" onClick={this.fn}>
              Show/Hide Firstname
            </button>
            {fc ? <p className="fl">Joe</p> : null}
          </div>
          <div className="column1">
            <button className="btn" type="button" onClick={this.ln}>
              Show/Hide Lastname
            </button>
            {lc ? <p className="fl">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
