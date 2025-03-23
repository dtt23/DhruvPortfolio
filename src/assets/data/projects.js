import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Task Management App',
    desc: 'Developed a task management app by conducting in-depth market research, designing UI prototypes, and refining user experience through usability testing.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Telescope Astrophotography',
    desc: 'Authored a paper on telescopic astrophotography, utilising Python image processing, Sequator analysis, and advanced data visualisation to identify and catalog celestial objects.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Weather Station',
    desc: 'Developed a NodeMCU-based weather station with real-time data logging on Thingspeak, a custom SolidWorks-designed enclosure.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Smart Mirror',
    desc: 'Developed a Smart Mirror using JavaScript and the MagicMirror framework, featuring custom widgets, API integration, PIR sensors for user recognition, and a SolidWorks-designed enclosure.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Reaction-based Fair Game',
    desc: 'Developed a reaction-based fair game with LED buttons, a Genie 18 IC, and a custom PCB.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "EM Thor's Hammer",
    desc: 'Engineered an Arduino-powered electromagnet Thor’s Hammer with a relay module, 3D-printed case, and high-strength electromagnet.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'RPi Custom Alexa',
    desc: 'Developed a Raspberry Pi 3B-based Amazon Alexa device with AWS integration, enabling voice-controlled interactions and custom skills.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'RPi Security Camera',
    desc: 'Developed a Raspberry Pi Zero W security camera with OpenCV-based motion detection, remote access, and a custom enclosure.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Bluetooth Car',
    desc: 'Developed a Bluetooth-controlled Arduino car, integrating microcontrollers, relays and a mobile app.',
    img: UTrackerImg,
  },
];

export default projects;
