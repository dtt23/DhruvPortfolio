import React from 'react';
import styled from 'styled-components';
import pythonImage from '../assets/skill_images/python.png';
import matlabImage from '../assets/skill_images/matlab.png';
import sqlImage from '../assets/skill_images/sql.webp';
import latexImage from '../assets/skill_images/latex.svg';
import cppImage from '../assets/skill_images/cpp.png';
import csImage from '../assets/skill_images/cs.png';
import kotlinImage from '../assets/skill_images/kotlin.png';
import javaImage from '../assets/skill_images/java.png';
import swImage from '../assets/skill_images/SW.png';
import deImage from '../assets/skill_images/3de.png';
import fusionImage from '../assets/skill_images/fusion.png';
import blenderImage from '../assets/skill_images/blender.png';
import cwImage from '../assets/skill_images/cw.png';
import kiImage from '../assets/skill_images/ki.png';
import curaImage from '../assets/skill_images/cura.png';
import htmlImage from '../assets/skill_images/html.png';
import cssImage from '../assets/skill_images/css.png';
import jsImage from '../assets/skill_images/js.png';
import rpImage from '../assets/skill_images/rp.png';
import lxImage from '../assets/skill_images/lx.png';
import jpImage from '../assets/skill_images/jp.png';
import pcImage from '../assets/skill_images/pc.png';
import asImage from '../assets/skill_images/as.png';
import exImage from '../assets/skill_images/ex.png';
import gitImage from '../assets/skill_images/git.png';
import npImage from '../assets/skill_images/np.png';
import mplImage from '../assets/skill_images/mpl.png';
import pdImage from '../assets/skill_images/pd.png';
import sbImage from '../assets/skill_images/sb.png';
import dashImage from '../assets/skill_images/dash.png';
import sklImage from '../assets/skill_images/skl.png';
import ptImage from '../assets/skill_images/pt.png';
import spImage from '../assets/skill_images/sp.png';
import SectionTitle from './SectionTitle';

const ServicesItemsStyles = styled.div`
  h1 {
    font-size: 19px;
    text-align: centre;
  }
  .details-container {
    padding: 1.5rem;
    flex: 1;
    background: #262727;
    border-radius: 3rem;
    border: rgb(53, 53, 53) 0.2rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
    margin-top: 2rem;
  }
  .newDetails-container {
    padding: 1.5rem;
    flex: row;
    background: #262727;
    border-radius: 3rem;
    border: rgb(53, 53, 53) 0.2rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .about-containers {
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .experience-sub-title {
    color: var(--gray-1);
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .experience-details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .experience-newDetails-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }

  article {
    display: flex;
    width: 14rem;
    justify-content: space-around;
    gap: 0.25rem;
  }

  article .icon {
    cursor: default;
    width: 4rem;
    height: 4rem;
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I do best at" heading="MY SKILLS" />
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Programming Languages</h2>
              <div className="article-container">
                <article>
                  <img
                    src={pythonImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h2>Python3</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img
                    src={matlabImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h2>MATLAB</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img src={sqlImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>SQL</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img
                    src={latexImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h2>Latex</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img src={cppImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>C++</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={csImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>C#</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img
                    src={kotlinImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h2>Kotlin</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={javaImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>Java</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={htmlImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>HTML</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={cssImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>CSS</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={jsImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>JavaScript</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience-newDetails-container">
              <div className="newDetails-container">
                <h2 className="experience-sub-title">
                  Development Environments
                </h2>
                <div className="article-container">
                  <article>
                    <img src={rpImage} alt="Experience icon" className="icon" />
                    <div>
                      <h2>Raspbian</h2>
                      <big>Advanced</big>
                    </div>
                  </article>
                  <article>
                    <img src={lxImage} alt="Experience icon" className="icon" />
                    <div>
                      <h2>LINUX</h2>
                      <big>Intermediate</big>
                    </div>
                  </article>
                  <article>
                    <img src={jpImage} alt="Experience icon" className="icon" />
                    <div>
                      <h2>Jupyter</h2>
                      <big>Advanced</big>
                    </div>
                  </article>
                  <article>
                    <img src={pcImage} alt="Experience icon" className="icon" />
                    <div>
                      <h2>PyCharm</h2>
                      <big>Intermediate</big>
                    </div>
                  </article>
                  <article>
                    <img src={asImage} alt="Experience icon" className="icon" />
                    <div>
                      <h2>Android Studio</h2>
                      <big>Intermediate</big>
                    </div>
                  </article>
                  <article>
                    <img src={exImage} alt="Experience icon" className="icon" />
                    <div>
                      <h2>Excel</h2>
                      <big>Advanced</big>
                    </div>
                  </article>
                  <article>
                    <img
                      src={gitImage}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h2>Git</h2>
                      <big>Intermediate</big>
                    </div>
                  </article>
                </div>
              </div>
              <div className="newDetails-container">
                <h2 className="experience-sub-title">Libraries</h2>
                <div className="article-container">
                  <article>
                    <img src={npImage} alt="Experience icon" className="icon" />
                    <div>
                      <h1>Numpy</h1>
                    </div>
                  </article>
                  <article>
                    <img
                      src={mplImage}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h1>Matplotlib</h1>
                    </div>
                  </article>
                  <article>
                    <img src={pdImage} alt="Experience icon" className="icon" />
                    <div>
                      <h1>Pandas</h1>
                    </div>
                  </article>
                  <article>
                    <img src={sbImage} alt="Experience icon" className="icon" />
                    <div>
                      <h1>Seaborn</h1>
                    </div>
                  </article>
                  <article>
                    <img
                      src={dashImage}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h1>Dash</h1>
                    </div>
                  </article>
                  <article>
                    <img
                      src={sklImage}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h1>Scikit Learn</h1>
                    </div>
                  </article>
                  <article>
                    <img src={ptImage} alt="Experience icon" className="icon" />
                    <div>
                      <h1>Pytorch</h1>
                    </div>
                  </article>
                  <article>
                    <img src={spImage} alt="Experience icon" className="icon" />
                    <div>
                      <h1>SciPy</h1>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Prototyping & Designing</h2>
              <div className="article-container">
                <article>
                  <img src={swImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>Solidworks</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img src={deImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>3DExperience</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img
                    src={fusionImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h2>Fusion360</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img
                    src={blenderImage}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h2>Blender</h2>
                    <big>Advanced</big>
                  </div>
                </article>
                <article>
                  <img src={cwImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>CircuitWizard</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={kiImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>KiCAD</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
                <article>
                  <img src={curaImage} alt="Experience icon" className="icon" />
                  <div>
                    <h2>Cura</h2>
                    <big>Intermediate</big>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
