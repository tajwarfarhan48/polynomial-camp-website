import '../output.css';
import Quote from './Quote.js';
import Paragraph from './Paragraph.js';
import Button from './Button.js';
import { useRef } from 'react';
import useIfVisible from '../useIfVisible.js';

function Camp3() {
    const ref = useRef();
    const isVisible = useIfVisible(ref);
    
    return (
        <div ref={ref} className={`flex flex-col space-y-6 mt-6 mb-12 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold text-center text-cream">PHYSICS CAMP 1 - ADVANCED CLASSICAL MECHANICS: FROM LAGRANGIANS AND HAMILTONIANS, CHAOS THEORY TO COMPUTATIONAL PHYSICS AND AN INTRODUCTION TO PARTICLE PHYSICS</h1>
            <p className="text-center w-full text-cream font-bold text-xl">Instructor: Tausif Hossain</p>
            <Quote text={"''It is the harmony of the diverse parts, their symmetry, their happy balance; in a word it is all that introduces order, all that gives unity, that permits us to see clearly and to comprehend at once both the ensemble and the details.''"} author={"HENRI POINCARE"}/>
            <Paragraph text={"We were always taught in school that energy is conserved in a closed system. But have you wondered why energy is conserved? This simple question we will learn, has a surprisingly beautiful answer: energy is conserved when there is time reversal symmetry. That is, if physics remains the same forwards and backwards in time, we can say energy is conserved! There’s numerous such symmetries in our universe, such as translation symmetry leading to momentum conservation etc. These symmetries are the bedrock of modern physics and all of this starts in our well known classical mechanics!"} />
            <Paragraph text={"Using symmetry as our basis, in this course we will delve deep into classical physics and actually derive Newton’s Laws instead of taking them as a given. We will solve famous problems like the Brachistochrone problem, find simpler and beautiful methods to solve difficult mechanics problems, and in general look at the usefulness of Lagrangians and Hamiltonians in a wide variety of fields. We will also show how simple symmetries can form the basis of all of Particle Physics, and we will do a quick introduction to many fascinating results and ideas in this field."} />
            <Paragraph text={"We will also focus some time on learning computational physics skills like how we can actually simulate complicated physical systems. We will use Python to learn together how we can not only study but also animate a double pendulum or other chaotic systems such as a 3-Body Problem! Thus, by the end of the course you will be able to make many novel connections on how interconnected physics is. You will hopefully also have the computational tools to be able to do your own simulations and research projects, which I think will be a great foundation to have for a future in any science or data analysis field."} />
            <Paragraph text={"Prerequisites: We hope you’ve learnt calculus at an introductory level, as taught till grade 10. We will work through physics from first principles so no advanced knowledge is necessary. We will also start the computational physics code from the basics so no prior coding knowledge is needed!"} />
            <div className="flex justify-center w-full">
                <Button label={"Sign Up Now"} link={"https://docs.google.com/forms/d/e/1FAIpQLScg_J3PzjgXD_rF1rz3AqbQy_TjTJpHOfGUAvhYCzygBFzpeA/viewform"} />
            </div>
        </div>
    );
  }
  
export default Camp3;