import React from 'react'
import './SearchPanel.css'

export default class SearchPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      term: ''
    }
  }

  searchResult = e => {
    const term = e.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-panel"
        placeholder="Search"
        value={this.state.term}
        onChange={this.searchResult}
      />
    )
  }
}
