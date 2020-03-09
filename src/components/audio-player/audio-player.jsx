import React, {PureComponent, Fragment} from "react";
import propTypes from "prop-types";

export default class AudioPlayer extends PureComponent {
  render() {
    const {isLoading, isPlaying, onPlayButtonClick, children} = this.props;

    return (
      <Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onPlayButtonClick}
        />
        <div className="track__status">
          {children}
        </div>
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isLoading: propTypes.bool.isRequired,
  isPlaying: propTypes.bool.isRequired,
  onPlayButtonClick: propTypes.func.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired,
};
