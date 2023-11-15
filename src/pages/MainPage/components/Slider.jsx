import React, { useState } from 'react'
import './slider.css'
import slideCard from '../../../assets/images/slide.jpg'
import leftArrow from '../../../assets/icons/prevArrow.png'
import rightArrow from '../../../assets/icons/nextArrow.png'

function Slider() {
  const [slideView, setslideView] = useState(3)
  const sliderCard = [
    [
      slideCard,
      'Text 1:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Troy Corlson'
    ],
    [
      slideCard,
      'Text 2:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Alex Corlson'
    ],
    [
      slideCard,
      'Text 3:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Tom Corlson'
    ],
    [
      slideCard,
      'Text 4:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Hank Corlson'
    ],
    [
      slideCard,
      'Text 5:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Tim Corlson'
    ],
    [
      slideCard,
      'Text 6:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Jim Halpert'
    ],
    [
      slideCard,
      'Text 7:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Dwight Schrute'
    ],
    [
      slideCard,
      'Text 8:A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      '1h ago · by Michael Scott'
    ],
  ]

  const btnPrev = () => {
    if (slideView !== 3) setslideView(prevValue => prevValue - 1)
  }
  const btnNext = () => {
    if (slideView !== sliderCard.length) setslideView(prevValue => prevValue + 1)
  }

  return (
    <>
      <div className="sliderTitle"><h1>Top News</h1></div>
      <div className="sliderCon">
        <div className="slider">
          {/* card */}
          {sliderCard.slice(slideView - 3, slideView).map((each, i) => (
            <div className="cardSlide" key={i}>
              <div className="cardImage">
                <img src={each[0]} alt="card" />
              </div>
              <div className="cardTitle">{each[1]}</div>
              <div className="cardCaption">{each[2]}</div>
            </div>
          ))}
        </div>
        {/* buttons */}
        <div onClick={btnPrev} className="prevBtn">
          <img src={leftArrow} alt="previous" />
        </div>
        <div onClick={btnNext} className="nextBtn">
          <img src={rightArrow} alt="next" />
        </div>
      </div>
    </>
  )
}

export default Slider