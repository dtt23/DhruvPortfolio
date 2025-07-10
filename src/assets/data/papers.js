import appImg from '../documents/EPQImg.png';
import pipeFlowImg from '../documents/pipeFlow.png';
import simpleBeamsImg from '../documents/simpleBeamsImg.png';
import materialsImg from '../documents/materials.png';
import EPQEssay from '../documents/EPQ Essay Final Completed.pdf';
import EPQPres from '../documents/EPQ Presentation.pdf';
import EPQProd from '../documents/Production LOG.pdf';
import pipeFlowEssay from '../documents/Pipe_Flow.pdf';
import simpleBeamsEssay from '../documents/Simple_Beams.pdf';
import materialsEssay from '../documents/Materials_Report.pdf';

const testimonials = [
  {
    id: 1,
    title: 'How are astronomical instruments helping us to locate Earth 2.0?',
    authors: 'Dhruva Teja Turaga - Bourne Grammar School',
    conference:
      'Investigation of how different telescopes and methods of astronomy has helped humanity so far in the quest to locate more habitable exoplanets not only in our solar system but also within the Milky Way galaxy.',
    image: appImg,
    links: { pdf: EPQEssay, code: EPQPres, projectPage: EPQProd },
    status: 'A* Dissertation',
    statusColor: '#e74c3c',
  },
  {
    id: 2,
    title: 'Pipe Flow',
    authors: 'Dhruva Teja Turaga - Imperial College London',
    conference:
      'This report analyses pipe flow using experimental, computational and theoretical methods to predict skin friction coefficients. Experimental data is precise but uncertain, CFD simulations are detailed but resource-intensive and theoretical models offer quick estimates with limited accuracy. Combining these approaches enhances engineering analysis and understanding.',
    image: pipeFlowImg,
    links: { pdf: pipeFlowEssay },
    status: 'Aerodynamics 85%',
    statusColor: '#f39c12',
  },
  /* {
    id: 3,
    title: 'Simple Beams',
    authors: 'Dhruva Teja Turaga - Imperial College London',
    conference:
      'This report compares analytical, computational (FEA) and experimental methods for modelling statically indeterminate beams, focusing on displacement and strain. Experimental trials use Wheatstone bridges, FEA provides detailed simulations via ABAQUS and theoretical models offer quick but less accurate estimates. Integrating these methods improves beam analysis for engineering design.',
    image: simpleBeamsImg,
    links: { pdf: simpleBeamsEssay },
    status: 'Structures 90%',
    statusColor: '#f39c12',
  }, */
  /* {
    id: 4,
    title: 'Strain, Tensile and Hardness',
    authors: 'Dhruva Teja Turaga - Imperial College London',
    conference:
      'This report compares analytical, computational (FEA) and experimental methods for modelling statically indeterminate beams, focusing on displacement and strain. Experimental trials use Wheatstone bridges, FEA provides detailed simulations via ABAQUS and theoretical models offer quick but less accurate estimates. Integrating these methods improves beam analysis for engineering design.',
    image: materialsImg,
    links: { pdf: materialsEssay },
    statusColor: '#f39c12',
  }, */
];
export default testimonials;
