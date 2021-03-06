import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const GameOverScreen = (props) => {
  const {onReplayButtonClick} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <Link
        to={AppRoute.ROOT}
        className="replay"
        onClick={onReplayButtonClick}
      >
        Попробовать ещё раз
      </Link>
    </section>
  );
};

GameOverScreen.propTypes = {
  onReplayButtonClick: propTypes.func.isRequired,
};

export default GameOverScreen;
