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
import TrainerImg from '../images/FTrainer.png';
import LaserTrainer from '../images/laser-based_trainer.png';
import ASN from '../images/ASNode.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Data-Driven Aeroelastic Wing Experiment',
    desc: 'Flexible-wing prototype with embedded sensors and Python-based data modelling to investigate aeroelastic behaviour.',
    img: ComingSoonImg,
    cs: 1,
  },
  {
    id: uuidv4(),
    name: 'AeroSense Node',
    desc: 'An embedded data-logging module for capturing fine control inputs and vibration signatures, supports aerospace system analysis and use in tactile feedback systems.',
    img: ASN,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Laser-based Sport Trainer',
    desc: 'A laser focussed footwork aid that uses automated and user-based adjustments of speed, angle and trajectory to deliver precise, adaptive training for coaches and athletes alike.',
    img: LaserTrainer,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Footwork Trainer',
    desc: 'Footwork Trainer is a browser-based tool that helps badminton players improve footwork, agility and reaction speed using randomised cues and adjustable timing. View at: https://dtt23.github.io/footworkTrainer/',
    img: TrainerImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Wind Turbine Project',
    desc: 'A project focused on reducing building-mounted turbine costs using 3D printing, laser cutting, manufacturing techniques, cost analysis, strength testing as well as FEA.',
    img: TurbineImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Tasker',
    desc: 'A Task Management app developed by conducting in-depth market research, designing UI prototypes and refining user experience through usability testing.',
    img: appImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Telescope Astrophotography',
    desc: 'Authored a paper on telescopic astrophotography, utilising Python image processing, Sequator analysis and advanced data visualisation to identify and catalog celestial objects.',
    img: astroImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Weather Station',
    desc: 'A NodeMCU-based weather station with real-time data logging on Thingspeak, a custom SolidWorks-designed enclosure to help clients predict the weather for injury mitigation.',
    img: WImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Smart Mirror',
    desc: 'A Smart Mirror using JavaScript and the MagicMirror framework, featuring custom widgets, API integration, PIR sensors for user recognition and a SolidWorks-designed enclosure.',
    img: MirrorImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Reaction-based Fair Game',
    desc: 'Developed a reaction-based fair game with LED buttons, a Genie 18 IC and a custom PCB. Is to be integrated as part of home fair games to keep people occupied for hours.',
    img: ReactionImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: "EM Thor's Hammer",
    desc: 'Engineered an Arduino-powered electromagnet Thor’s Hammer with a relay module, 3D-printed case and high-strength electromagnet. Taking inspiration from Alan Pan and theHacksmith to engineer a completely new design and mechanism. ',
    img: ThorImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'RPi Custom Alexa',
    desc: 'A Raspberry Pi 3B+ based Amazon Alexa device with AWS integration, enabling voice-controlled interactions and custom skills.',
    img: AlexaImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'RPi Security Camera',
    desc: 'A Raspberry Pi Zero W security camera with OpenCV-based motion detection, remote access and a custom enclosure.',
    img: CameraImg,
    cs: 0,
  },
  {
    id: uuidv4(),
    name: 'Bluetooth Car',
    desc: 'A Bluetooth-controlled Arduino car, integrating microcontrollers, relays and a mobile app.',
    img: CarImg,
    cs: 0,
  },
];

export default projects;
