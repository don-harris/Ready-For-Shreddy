import React from 'react'
import { connect } from 'react-redux'
import { fetchSkiResorts } from '../actions'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      skiResort: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      skiResort: evt.target.value
    })
    this.props.dispatch(fetchSkiResorts(evt.target.value))
  }

  render () {
    return (
      <div className="field">
        <span className="control">
          <input onChange={(e) => this.handleChange(e)} value={this.state.skiResort} type="text" placeholder="Search..." className="input is-medium" />
        </span>
      </div>
    )
  }
}

export default connect()(SearchBar)