import React from 'react'


export default class MyListItem extends React.Component {
  state = {
    items: [],
    isLoading: true,
    cursor: 0
  }

  componentDidMount() {

  }



  render() {
    return (
      <div>
      {this.props.title}
      </div>
    )
  }
}