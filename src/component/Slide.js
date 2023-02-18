import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { useState } from "react";
import people from "../data";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];
  const prevPerson = () => {
    setIndex(() => {
      if (index === 0) {
        let newIndex = people.length - 1;
        return newIndex;
      } else {
        let newIndex = index - 1;
        return newIndex;
      }
    });
  };
  const nextPerson = () => {
    setIndex(() => {
      if (index === people.length - 1) {
        let newIndex = 0;
        return newIndex;
      } else {
        let newIndex = index + 1;
        return newIndex;
      }
    });
  };
  const randomPerson = () => {
    setIndex(() => {
      let newIndex = Math.trunc(Math.random() * people.length);
      return newIndex;
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
      </div>
      <h2 className='author'>{name.toUpperCase()}</h2>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevPerson()}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button className='next-btn' onClick={() => nextPerson()}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <button className='random-btn' onClick={() => randomPerson()}>
        <BiAnalyse />
      </button>
    </article>
  );
};
export default Slide;
