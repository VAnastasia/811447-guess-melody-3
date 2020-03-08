import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

it(`AudioPlayer button be pressed`, () => {
  const buttonHandler = jest.fn();

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying={true}
        isLoading={true}
        onPlayButtonClick={buttonHandler}
      >
        <audio />
      </AudioPlayer>
  );

  const button = audioPlayer.find(`.track__button`);

  button.simulate(`click`, buttonHandler);
  expect(button.hasClass(`track__button--pause`)).toBe(true);
  expect(button.hasClass(`track__button--play`)).toBe(false);
});
