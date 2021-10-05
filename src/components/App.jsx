import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: {
        id: {
          videoId: null,
        },
        snippet: {
          title: null,
          description: null,
          thumbnails: {
            default: null
          }
        }
      }
    };
  }

  onVideoChange(newVideoObject) {
    this.setState({
      currentVideo: newVideoObject
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickCallback={this.onVideoChange.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let videos = [];
    //TODO: this is async so videos is an empty array when this.setState is called
    searchYouTube('test', (data) => {
      console.log(data);
      videos = data;
    });
    this.setState({
      videos: videos
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
