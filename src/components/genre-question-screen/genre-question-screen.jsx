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
    const {onAnswer, question} = this.props;
    evt.preventDefault();
    onAnswer(question, this.state.answers);
  }

  render() {
    const {question} = this.props;
    const {answers: userAnswers} = this.state;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>

          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={this.handleSubmit}
          >
            {answers.map((answer, i) => (
              <div key={`${i}-${answer.src}`} className="track">
                <button className="track__button track__button--play" type="button"/>
                <div className="track__status">
                  <audio
                    src={answer.src}
                  />
                </div>
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
};

export default GenreQuestionScreen;
