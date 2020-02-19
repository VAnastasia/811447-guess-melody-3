import React from "react";
import propTypes from "prop-types";
import {GameType} from "../../const.js";

const ArtistQuestionScreen = (props) => {

  const handleAnswerChange = (answer) => {
    const {onAnswer, question} = props;
    return (evt) => {
      evt.preventDefault();
      onAnswer(question, answer);
    };
  };

  const {question, renderPlayer} = props;
  const {
    answers,
    song,
  } = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, i) => (
          <div key={answer.artist} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
              onChange={handleAnswerChange(answer)}
            />
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: propTypes.func.isRequired,
  question: propTypes.shape({
    answers: propTypes.arrayOf(propTypes.shape({
      artist: propTypes.string.isRequired,
      picture: propTypes.string.isRequired,
    })).isRequired,
    song: propTypes.shape({
      artist: propTypes.string.isRequired,
      src: propTypes.string.isRequired,
    }).isRequired,
    type: propTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: propTypes.func.isRequired,
};

export default ArtistQuestionScreen;
