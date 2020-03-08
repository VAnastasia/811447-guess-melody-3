import React, {PureComponent} from "react";
import propTypes from "prop-types";

class GenreQuestionItem extends PureComponent {
  render() {
    const {answer, id, onChange, renderPlayer, userAnswer} = this.props;

    return (
      <div className="track">
        {renderPlayer(answer.src, id)}
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${id}`}
            id={`answer-${id}`}
            checked={userAnswer}
            onChange={(evt) => {
              const value = evt.target.checked;

              onChange(id, value);
            }}
          />
          <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

GenreQuestionItem.propTypes = {
  answer: propTypes.shape({
    src: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
  }).isRequired,
  id: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
  renderPlayer: propTypes.func.isRequired,
  userAnswer: propTypes.bool.isRequired,
};

export default GenreQuestionItem;
