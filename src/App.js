import React, { Component } from 'react';
import './Stylesheet.css';
import { Switch, Route } from 'react-router-dom';
import { ProfileContainer, AlbumsContainer, TopTracksContainer } from './containers';
import { NavBar, NotFound404 } from './components';

class App extends React.Component {
    render() {

        return (
            <div>

                <header>
                    <NavBar />
                </header>

            <main>
                <section>
                    <Switch>
                      <Route exact path="/" render={() => <h1 id="welcome">Welcome</h1>} />

                      <Route path="/profile" component={ ProfileContainer } />

                      <Route path="/albums" component={ AlbumsContainer } />

                      <Route path="/toptracks" component={ TopTracksContainer } />

                      <Route component={NotFound404} />

                    </Switch>
                </section>

            </main>

            </div>
        )
    }

}

export default App
