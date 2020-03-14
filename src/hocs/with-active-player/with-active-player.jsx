import React, {PureComponent} from 'react';
import Player from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio.jsx";

const AudioPlayer = withAudio(Player);

const withActivePlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.handleButtonClick = this.handleButtonClick.bind(this);

      this.state = {
        activePlayerId: 0,
      };
    }

    handleButtonClick(id) {
      const {activePlayerId} = this.state;
      return () => {
        this.setState({
          activePlayerId: activePlayerId === id ? -1 : id
        });
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={this.handleButtonClick(id)}
            />
          );
        }}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withActivePlayer;
