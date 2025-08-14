import React from 'react';
import styled from 'styled-components';
import AboutImg from '../assets/images/about-page-img.jpg';
import ContactBanner from '../components/ContactBanner';
import CV from '../assets/documents/CV.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: #42a5f5;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  .entry .body {
    margin: 0 0 1em;
  }

  @media only screen and (max-width: 768px) {
    .item-title {
      margin-top: 10px !important;
    }
  }
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(227, 135, 135);
    color: #333;
    margin: 0;
    padding: 20px;
  }

  /* Main Layout */
  .about__info__items {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px; /* Space between sections */
    margin-top: 90px;
    margin-bottom: 30px;
  }

  /* Section Styling */
  .section {
    width: 48%; /* Ensures both sections are evenly sized */
  }

  h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  /* Section Headings */
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  /* Timeline */
  .timeline {
    border-left: 3px solid #bbb;
    margin-left: 15px;
    padding-left: 20px;
    position: relative;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 30px;
  }

  /* Orange Dots */
  .dot {
    width: 16px;
    height: 16px;
    background-color: #e67e22;
    border-radius: 50%;
    position: absolute;
    left: -29.5px;
    top: 15px;
  }

  /* Content */
  .content {
    background: rgb(145, 157, 171);
    padding: 15px;
    border-radius: 15px;
    box-shadow: blue;
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 5px;
  }

  .degree {
    font-size: 15px;
    color: #555;
    font-weight: bold;
  }

  .date {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  /* Tags */
  .tags {
    margin-top: 10px;
  }

  .tags span {
    display: inline-block;
    background: #dde9f6;
    color: #333;
    padding: 6px 10px;
    margin: 4px 4px 0 0;
    font-size: 13px;
    border-radius: 4px;
  }
  .insideP {
    color: rgb(30, 30, 30);
    font-size: 12px;
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    pointer-events: auto;
    cursor: pointer;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  const myStyle = {
    color: 'blue',
    fontSize: '16px',
    backgroundColor: 'lightgray',
  };
  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank'); // Opens the link in a new tab
    }
  };
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="about__subheading">
                Hi, I am <span>Dhruva Turaga</span>
              </h2>
              <h2 className="about__heading">
                Engineer | Innovator | Research Pioneer
              </h2>
              <div className="about__info">
                <h2>
                  I am an Aeronautical Engineering student at Imperial College
                  London with a passion for technology and innovation. My
                  experience includes mechanical as well as electrical design,
                  data analysis and virtual simulations, where I tackle complex
                  challenges hands-on.
                  <br /> <br />
                  I enjoy solving problems through technology, whether it's
                  developing simulations, optimising designs or working with
                  AI-driven tools. My hands-on approach and adaptability help me
                  tackle challenges efficiently while continuously expanding my
                  skillset.
                  <br />
                  <br />I thrive in fast paced environments where I can apply my
                  technical skills to real-world challenges. My curiosity,
                  adaptability, and problem-solving mindset enable me to
                  contribute effectively while continuously learning. I am eager
                  to bring fresh ideas, collaborate with experts to make a
                  lasting impact.
                </h2>
              </div>
              <button
                className="button"
                type="button"
                onClick={() => openLink(CV)}
              >
                Download CV
              </button>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="section">
              <h1>Education</h1>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="dot" />
                  <div className="content">
                    <h3>Imperial College London, London</h3>
                    <p className="degree">
                      Masters in Aeronautical Engineering
                    </p>
                    <p className="date">October, 2023 - Current</p>
                    <p className="insideP">
                      {'>'} Currently pursuing my Masters in Aeronautical
                      Engineering.
                    </p>
                    <p className="insideP">
                      {'>'} Helped the electronics team within ICL Rocketry, won
                      an engineering hackathon from CGCU,
                    </p>
                    <div className="tags">
                      <span>Mechanics</span>
                      <span>Materials</span>
                      <span>Structures</span>
                      <span>Mathematics</span>
                      <span>Thermodynamics</span>
                      <span>Intro to Aerospace</span>
                      <span>Aerodyanamics</span>
                      <span>CS and Numerical Methods</span>
                      <span>Engineering Practice</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot" />
                  <div className="content">
                    <h3>Bourne Grammar School, Lincolnshire</h3>
                    <p className="degree">A-Levels (2A*s, 3As)</p>
                    <p className="date">September, 2021 - June, 2023</p>
                    <p className="insideP">
                      {'>'} I achieved one of the best A-Level results,
                      excelling in subjects that showcase my analytical
                      thinking, problem-solving skills, and technical expertise.
                    </p>
                    <p className="insideP">
                      {'>'} Completed Bronze, Silver and Gold Duke of Edinburgh,
                      Captained the Ritangle challenge, part of competitive
                      swimming in Peterborough (COPS)
                    </p>
                    <div className="tags">
                      <span>Extended Project Qualification A*</span>
                      <span>Mathematics A*</span>
                      <span>Further Mathematics A</span>
                      <span>Computer Science A</span>
                      <span>Physics A</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot" />
                  <div className="content">
                    <h3>Bourne Grammar School, Lincolnshire</h3>
                    <p className="degree">GCSE (10 - 9s, 1 - 7)</p>
                    <p className="date">September, 2016 - June, 2021</p>
                    <p className="insideP">
                      {'>'} I achieved top grades in my GCSEs, demonstrating a
                      strong academic foundation and dedication to excellence
                      across multiple subjects.
                    </p>
                    <p className="insideP">
                      {'>'} Integral part of VEX Robotics for 3 years, Lego
                      League and started independent projects.
                    </p>
                    <div className="tags">
                      <span>Mathematics 9</span>
                      <span>Further Mathematics 9</span>
                      <span>English Language 9</span>
                      <span>English Literature 9</span>
                      <span>Biology 9</span>
                      <span>Chemistry 9</span>
                      <span>Physics 9</span>
                      <span>Spanish 7</span>
                      <span>Design Technology 9</span>
                      <span>Computer Science 9</span>
                      <span>Geography 9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <h1>Experiences</h1>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="dot" />
                  <div className="content">
                    <h3>South Kensington, London</h3>
                    <p className="degree">InXTech Technical Fellow</p>
                    <p className="date">June, 2025 - October, 2025</p>
                    <p className="insideP">
                      {'>'} Mostly working on the Electronics Team by designing
                      and optimising power distribution PCBs, schematics and
                      management systems, implementing actuator control logic
                      and integrating sensor telemetry for the prototype.
                    </p>
                    <p className="insideP">
                      {'>'} Supported the Mechanical Team with CAD modelling, 3D
                      printing and refinement of a new robotic prototype,
                      incorporating design feedback to improve structure
                      mechanisms.
                    </p>
                    <p className="insideP">
                      {'>'} Worked with the Data Validation Team to analyse
                      sensor datasets, develop machine learning models for
                      anomaly detection and performance optimisation and
                      streamline data processing pipelines for faster insights
                      on board.
                    </p>

                    <div className="tags">
                      <span>KiCAD</span>
                      <span>C++</span>
                      <span>Python</span>
                      <span>3D Printing</span>
                      <span>Lasercutting</span>
                      <span>Solidworks</span>
                      <span>Team Collaboration</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot" />
                  <div className="content">
                    <h3>Imperial College London, London</h3>
                    <p className="degree">
                      StudentShapers Intern and UG Teaching Assistant
                    </p>
                    <p className="date">July, 2024 - October, 2024</p>
                    <p className="insideP">
                      {'>'} Mastered C# programming, Unity 3D game development
                      and the cutting-edge ViRSE framework.
                    </p>
                    <p className="insideP">
                      {'>'} Collaborated with renowned professors on advanced
                      virtual reality, focusing on the dynamic modal analysis of
                      free oscillations in structures such as beams and entire
                      aircraft.
                    </p>
                    <p className="insideP">
                      {'>'} Applied innovative VR techniques to simulate and
                      test structural effectiveness, contributing to
                      groundbreaking research and curriculum development at
                      Imperial.
                    </p>
                    <a
                      href="https://drive.google.com/file/d/1nU9aNKe41nCarvsndcqIXfCdGjXYYeho/view?usp=sharing"
                      style={myStyle}
                    >
                      Click here to view the final outcome
                    </a>

                    <div className="tags">
                      <span>C#</span>
                      <span>Unity</span>
                      <span>ViRSE Framework</span>
                      <span>Structures - Free Oscillations</span>
                      <span>Blender</span>
                      <span>Team Collaboration</span>
                      <span>Finite Element Analysis (FEA)</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot" />
                  <div className="content">
                    <h3>Compare the Market, Work from Home</h3>
                    <p className="degree">Data Analyst Shadowing</p>
                    <p className="date">June, 2022 - July, 2022</p>
                    <p className="insideP">
                      {'>'} Worked closely with the data science team, gaining
                      practical experience in data cleaning, manipulation, and
                      visualisation using libraries such as Pandas and
                      Matplotlib.
                    </p>
                    <p className="insideP">
                      {'>'} Actively contributed to data-driven decision-making
                      processes using statistical analysis to uncover insights
                      in real-world business scenarios.
                    </p>
                    <div className="tags">
                      <span>Python 3</span>
                      <span>Pandas</span>
                      <span>Matplotlib</span>
                      <span>Visual Studio</span>
                      <span>Data presentation</span>
                      <span>GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
