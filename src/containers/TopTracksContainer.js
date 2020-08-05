import React, { Component } from 'react';

class TopTracksContainer extends React.Component {
    state = {
      tracks: []
    }


    login(){
      fetch(`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
    }


    // componentDidMount() {
    //   fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DWSQuznw86tS8/tracks')
    //     .then(resp => resp.json())
    //     .then(track => this.setState({ tracks: data}))
    // }

    render() {
      const renderTracks = this.state.tracks.map((track, index) => <li key={ index }>{track}</li>)
      const logIn = <button onClick={this.login}>Spotify Log In</button>
        return (
            <>
            <h1>Top Tracks</h1>
            <ul>
              { logIn }
            </ul>
            </>
        );
    };

};

export default TopTracksContainer;
