import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyles = styled.div`
  text-align: center;
  padding: 50px 0;
  .container {
    margin-top: 5rem;
  }
  .slider-container {
    display: flex;
    overflow: hidden;
    max-width: 1200px;
    margin-top: 30px;
  }

  .slider-content {
    display: flex;
    transition: transform 0.8s ease-in-out;
    gap: 1px;
  }

  .slider-item {
    flex: 0 0 calc(100% / 3);
    display: flex;
    justify-content: center;
  }

  .service-card {
    background-color: var(--deep-dark);
    width: 300px; /* Square size */
    height: 360px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 15px rgba(100, 200, 0, 0.15);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: safe center;
  }

  .card-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 30px;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .card-text {
    color: gray;
    font-size: 1rem;
    text-align: center;
    max-width: 260px;
  }

  .card-number {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.1);
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .slider-controls {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .slider-control {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    padding: 5px;
    margin: 0 15px;
    color: black;
  }

  .slider-control:hover {
    color: gray;
  }
`;

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = 3;

  function handleNext() {
    setStartIndex((prevIndex) =>
      prevIndex + 1 > testimonials.length - visibleTestimonials
        ? 0
        : prevIndex + 1
    );
  }

  function handlePrev() {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - visibleTestimonials
        : prevIndex - 1
    );
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          subheading="See what I've done"
          heading="Awards & Certifications"
        />

        <div className="slider-container">
          <div
            className="slider-content"
            style={{
              transform: `translateX(-${
                startIndex * (100 / visibleTestimonials)
              }%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="service-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                  />
                  <h1 className="card-title">{item.title}</h1>
                  <h3 className="card-title">{item.org}</h3>
                  <p className="card-text">{item.desc}</p>
                  <span className="card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button
            type="button"
            className="slider-control prev"
            onClick={handlePrev}
          >
            <MdArrowBack />
          </button>
          <button
            type="button"
            className="slider-control next"
            onClick={handleNext}
          >
            <MdArrowForward />
          </button>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}
