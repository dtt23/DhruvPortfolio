import { v4 as uuidv4 } from 'uuid';
import appImg from '../images/tasker.png';
import astroImg from '../images/astro.jpg';
import WImg from '../images/WStation.png';
import MirrorImg from '../images/SMirror.png';
import ComingSoonImg from '../images/comingsoon.png';
import ReactionImg from '../images/RGame.png';
import ThorImg from '../images/THam.jpg';
import AlexaImg from '../images/alexa.jpg';
import CameraImg from '../images/SCam.png';
import CarImg from '../images/BCar.png';
import TurbineImg from '../images/WTurbine.png';

const projects = [
  {
    id: uuidv4(),
    name: 'F-22 Research Model',
    desc: 'Developed a task management app by conducting in-depth market research, designing UI prototypes, and refining user experience through usability testing.',
    img: ComingSoonImg,
    cs: 1,
  },
  {
    id: uuidv4(),
    name: 'AI integrated shuttle launcher',
    desc: 'Developed a task management app by conducting in-depth market research, designing UI prototypes, and refining user experience through usability testing.',
    img: ComingSoonImg,
    cs: 1,
  },
  {
    id: uuidv4(),
    name: 'Wind Turbine Project',
    desc: 'Developed a task management app by conducting in-depth market research, designing UI prototypes, and refining user experience through usability testing.',
    img: TurbineImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Task Management App',
    desc: 'Developed a task management app by conducting in-depth market research, designing UI prototypes, and refining user experience through usability testing.',
    img: appImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Telescope Astrophotography',
    desc: 'Authored a paper on telescopic astrophotography, utilising Python image processing, Sequator analysis, and advanced data visualisation to identify and catalog celestial objects.',
    img: astroImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Weather Station',
    desc: 'Developed a NodeMCU-based weather station with real-time data logging on Thingspeak, a custom SolidWorks-designed enclosure.',
    img: WImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Smart Mirror',
    desc: 'Developed a Smart Mirror using JavaScript and the MagicMirror framework, featuring custom widgets, API integration, PIR sensors for user recognition, and a SolidWorks-designed enclosure.',
    img: MirrorImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Reaction-based Fair Game',
    desc: 'Developed a reaction-based fair game with LED buttons, a Genie 18 IC, and a custom PCB.',
    img: ReactionImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: "EM Thor's Hammer",
    desc: 'Engineered an Arduino-powered electromagnet Thor’s Hammer with a relay module, 3D-printed case, and high-strength electromagnet.',
    img: ThorImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'RPi Custom Alexa',
    desc: 'Developed a Raspberry Pi 3B-based Amazon Alexa device with AWS integration, enabling voice-controlled interactions and custom skills.',
    img: AlexaImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'RPi Security Camera',
    desc: 'Developed a Raspberry Pi Zero W security camera with OpenCV-based motion detection, remote access, and a custom enclosure.',
    img: CameraImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Bluetooth Car',
    desc: 'Developed a Bluetooth-controlled Arduino car, integrating microcontrollers, relays and a mobile app.',
    img: CarImg,
    cs: 0,
  },
];

export default projects;
