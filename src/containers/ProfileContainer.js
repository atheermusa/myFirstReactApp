import React, { Component } from 'react'

class ProfileContainer extends React.Component {
  state = {
    artistName: 'Otis Redding',
    artistGenre: 'Soul',
    likeStatus: 'Click to like!',
    artistDescription: 'Otis Ray Redding Jr. (September 9, 1941 – December 10, 1967) was an American singer, songwriter, record producer, arranger, and talent scout. He is considered one of the greatest singers in the history of American popular music and a seminal artist in soul music and rhythm and blues. Reddings style of singing gained inspiration from the gospel music that preceded the genre. His singing style influenced many other soul artists of the 1960s.'
  }

  like = () => {(this.state.likeStatus === "Click to like!")? this.setState({likeStatus: "You've liked this artist!"}) : this.setState({likeStatus: "Click to like!"})};

  render() {
    return(
      <>
        <h1>{this.state.artistName}</h1>
        <h2>Genre: {this.state.artistGenre}</h2>
        <p>{this.state.artistDescription}</p>
        <button  onClick={this.like}>{this.state.likeStatus}</button>
      </>
    )
  }
}

export default ProfileContainer;
