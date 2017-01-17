import ReactDOM from 'react-dom';
import React from 'react';
import MusicList from './MusicList';
import Header from './Header';
import MusicFetch from './MusicFetch';


const pushState = (obj, url) => 
    window.history.pushState(obj, '', url);


class App extends React.Component {
    
    constructor(props) {
            super(props);
            this.state = {
                music: this.props.initialMusic,
                headerTitle: "THE DAILY VIBE",
                currentSelection: ''
            };
        }

        componentDidMount() {

        }

        componentWillUnmount(){

        }

    fetchMusic = (musicId) => {
        pushState(
            {currentMusicId: musicId},
            `/music/${musicId}`
            );

        //lookup the contest
        this.setState({
            currentSelection: `${this.state.music[musicId].song} by ${this.state.music[musicId].artist}`,
            currentMusicId: musicId
        });
    };

    currentContent() {
        if (this.state.currentMusicId) {
            return <MusicFetch {...this.state.music[this.state.currentMusicId]}/>
            }
        return <MusicList 
                onMusicClick={this.fetchMusic}
                music={this.state.music}/>;
    }

    render(){
            return (
                <div className="App">
                    
                    <div className="Header">
                        <Header 
                        headerTitle={this.state.headerTitle}
                        currentSelection={this.state.currentSelection}/>
                    </div>  
                    
                    <div className="Main">
                        {this.currentContent()}
                    </div>
                    
                    <div className="Footer">
                        ...
                    </div>

                </div>
            )
    }
}


export default App;