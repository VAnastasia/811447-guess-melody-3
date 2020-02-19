import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {GameType} from "../../const.js";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  handleAnswerChange(index) {
    return (evt) => {
      const value = evt.target.checked;
      const userAnswers = this.state.answers;

      this.setState({
        answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)],
      });
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer, question} = this.props;
    onAnswer(question, this.state.answers);
  }

  render() {
    const {question, renderPlayer} = this.props;
    const {answers: userAnswers} = this.state;
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
            <div key={`${i}-${answer.src}`} className="track">
              {renderPlayer(answer.src, i)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={userAnswers[i]}
                  onChange={this.handleAnswerChange(i)}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: propTypes.func.isRequired,
  question: propTypes.shape({
    answers: propTypes.arrayOf(propTypes.shape({
      src: propTypes.string.isRequired,
      genre: propTypes.string.isRequired,
    })).isRequired,
    genre: propTypes.string.isRequired,
    type: propTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: propTypes.func.isRequired,
};

export default GenreQuestionScreen;
