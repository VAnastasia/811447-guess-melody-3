import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

const mockSrc = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

it(`AudioPlayer button be pressed`, () => {
  const buttonHandler = jest.fn();

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying={true}
        onPlayButtonClick={buttonHandler}
        src={mockSrc}
      />
  );

  const button = audioPlayer.find(`.track__button`);

  button.simulate(`click`, buttonHandler);
  expect(button.hasClass(`track__button--pause`)).toBe(true);
  expect(button.hasClass(`track__button--play`)).toBe(false);
});
