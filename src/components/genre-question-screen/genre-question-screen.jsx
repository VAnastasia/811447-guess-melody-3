import React, {PureComponent} from "react";
import propTypes from "prop-types";
import GenreQuestionItem from "../genre-question-item/genre-question-item.jsx";
import {GameType} from "../../const.js";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    onAnswer();
  }

  render() {
    const {
      onChange,
      question,
      renderPlayer,
      userAnswers,
    } = this.props;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={this.handleSubmit}
        >
          {answers.map((answer, i) => (
            <GenreQuestionItem
              answer={answer}
              id={i}
              key={`${i}-${answer.src}`}
              onChange={onChange}
              renderPlayer={renderPlayer}
              userAnswer={userAnswers[i]}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  question: propTypes.shape({
    answers: propTypes.arrayOf(propTypes.shape({
      src: propTypes.string.isRequired,
      genre: propTypes.string.isRequired,
    })).isRequired,
    genre: propTypes.string.isRequired,
    type: propTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: propTypes.func.isRequired,
  userAnswers: propTypes.arrayOf(propTypes.bool).isRequired,
};

export default GenreQuestionScreen;
