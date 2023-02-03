import React from 'react';
import './header.css';
import people from '../../asset/people.png';
import ai from '../../asset/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          GPT-3 OpenAI Module

        </h1>
        <p>Amazing modules and content on GPT3 AI</p>
        <p>This is an explanatory front end website using React-JS, HTML and CSS</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="AI" />
        </div>
    </div>
  )
}

export default Header
