import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/papers';

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
    width: calc(
      100% * (testimonials.length / visibleTestimonials)
    ); /* Ensure width scales */
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
  body {
    font-family: Arial, sans-serif;
    background-color: #111;
    color: #ddd;
    padding: 20px;
  }

  h2 {
    color: #42a5f5;
  }

  .container {
    width: 90%;
    margin: auto;
  }

  .publications-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .publication {
    background: #222;
    border-radius: 10px;
    padding: 15px;
    width: calc(76% / 2);
    display: flex;
    align-items: centre;
    flex-direction: row;
    position: relative;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-left: 40px;
    flex-shrink: 0;
  }

  .image-container {
    position: relative;
    width: 170px; /* Smaller image */
    height: 240px;
    flex-shrink: 0;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .content {
    margin-top: 10px;
    margin-left: 20px;
  }

  h3 {
    color: #42a5f5;
    font-size: 22px;
    margin-bottom: 15px;
  }

  .buttons {
    margin-top: 10px;
  }

  button {
    background: #444;
    border: none;
    color: white;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background: #666;
  }

  .status {
    font-style: italic;
    font-weight: bold;
    margin-left: 00px;
    margin-top: 10px;
    display: block;
  }

  p {
    margin-bottom: 10px;
  }
`;

export default function TestimonialsSection() {
  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank'); // Opens the link in a new tab
    }
  };

  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = 2;

  function handleNext() {
    setStartIndex((prevIndex) =>
      prevIndex + 1 < testimonials.length - (visibleTestimonials - 1)
        ? prevIndex + 1 // Stop at the last valid position
        : prevIndex
    );
  }

  function handlePrev() {
    setStartIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1 // Stop at the first item
        : prevIndex
    );
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          subheading="Experiments or research I have conducted"
          heading="Academic Works"
        />

        <div className="slider-container">
          <div
            className="slider-content"
            style={{
              transform: `translateX(-${startIndex * (100 / 2.4)}%)`,
            }}
          >
            {testimonials.map((pub) => (
              <div className="publication" key={pub.id}>
                <div className="image-container">
                  <img src={pub.image} alt={pub.title} />
                </div>
                <div className="content">
                  <h3>{pub.title}</h3>
                  <p>
                    <strong>{pub.authors}</strong>
                  </p>
                  <p>
                    <em>{pub.conference}</em>
                  </p>
                  <div className="buttons">
                    {pub.links.pdf && (
                      <button
                        type="button"
                        onClick={() => openLink(pub.links.pdf)}
                      >
                        PDF
                      </button>
                    )}
                    {pub.links.code && (
                      <button
                        type="button"
                        onClick={() => openLink(pub.links.code)}
                      >
                        Presentation
                      </button>
                    )}
                    {pub.links.projectPage && (
                      <button
                        type="button"
                        onClick={() => openLink(pub.links.projectPage)}
                      >
                        Production Log
                      </button>
                    )}
                    <span className="status" style={{ color: pub.statusColor }}>
                      {pub.status}
                    </span>
                  </div>
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
