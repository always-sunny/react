import ReactDOM from 'react-dom';
import React from 'react';
import MusicList from './MusicList';
import Header from './Header';
import MusicFetch from './MusicFetch';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);


class App extends React.Component {
    static propTypes = {
        initialData: React.PropTypes.object.isRequired
    };
    state = this.props.initialData

    componentDidMount() {

    }

    componentWillUnmount(){

    }

    fetchMusic = (musicId) => {
        pushState(
            {currentMusicId: musicId},
            `/music/${musicId}`
            );

        api.fetchMusic(musicId).then( music => {
            // console.log(music);
            this.setState({
                currentSelection: `${music.song} by ${music.artist}`,
                currentMusicId: music.id,
                music: {
                    ...this.state.music,
                    [music.id]: music
                }
            });

        });
    };

    fetchMusicList = () => {
        pushState(
            {currentMusicId: null},
            `/`
            );

        api.fetchMusicList().then( music => {
            this.setState({
                currentMusicId: null,
                music
            });
        });
    };

    currentMusic() {
        return this.state.music[this.state.currentMusicId];
    }

    headerTitle() {
        return 'THE DAILY VIBE';
    }

    currentContent() {
        if (this.state.currentMusicId) {
            return <MusicFetch
                musicListClick={this.fetchMusicList}
                {...this.currentMusic()}/>
            }
        return <MusicList
                onMusicClick={this.fetchMusic}
                music={this.state.music}/>;
    }

    render(){
            return (
                <div className="App">
                    <Header
                        headerTitle={this.headerTitle()}
                        currentSelection={this.state.currentSelection}/>
                    <div className="mainContainer">
                    {this.currentContent()}
                    </div>
                </div>
            )
        }
}


export default App;
