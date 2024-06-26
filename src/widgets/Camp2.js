import '../output.css';
import Quote from './Quote.js';
import Paragraph from './Paragraph.js';
import Button from './Button.js';
import { useRef } from 'react';
import useIfVisible from '../useIfVisible.js';

function Camp2() {
    const ref = useRef();
    const isVisible = useIfVisible(ref);

    return (
        <div ref={ref} className={`flex flex-col space-y-6 mt-6 mb-12 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold text-center text-cream">MATHEMATICS CAMP 2 - ABSTRACT ALGEBRA AND TOPOLOGY</h1>
            <p className="text-center w-full text-cream font-bold text-xl">Instructor: Jubayer Ibn Hamid</p>
            <Quote text={"''Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine''"} author={"M. ATIYAH"}/>
            <p className="leading-relaxed tracking-wide font-light text-lg text-cream">Algebra is one of the most beautiful fields of mathematics. This is where you will see the power of abstraction. Groups and rings are very simple, abstract umbrellas under which many things we see around the world fall - from numbers to matrices to polynomials to the symmetries of the universe (take a look at <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Noether%27s_theorem"><u className="text-purple font-bold transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">Noether’s Theorem</u></a> for example). It is truly startling how much information these abstract objects contain - rings and ideals have been used to describe complex relations and geometries and to get very powerful results. For a basic example, take a look at Hilber’s Nullstellensatz or how physicists constantly discuss symmetries whose natural language is group theory.</p>
            <p className="leading-relaxed tracking-wide font-light text-lg text-cream">We will introduce groups and rings - how to construct them, various contexts in which they show up, their defining characteristics, their subgroups/subrings and generators. We will then study homomorphism, the very useful isomorphism theorems and actions on groups. Watch <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=mH0oCDa74tE"><u className="text-purple font-bold transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">this video</u></a> to get a sense of what this field is all about!</p>
            <Paragraph text={"It is hard to overstate the impact of algebra on the modern world. Today it is no longer a separate field of mathematics; algebraic number theory, algebraic geometry, etc. are all very hot topics of mathematics today."} />
            <Quote text={"'''Should you just be an algebraist or a geometer?' is like saying 'Would you rather be deaf or blind?'''"} author={"M. ATIYAH"} />
            <Paragraph text={"Next, we go to the geometric world. In topology, we will mostly do point-set topology - we will start with a review of important concepts from real analysis. Then, we will learn to define topological spaces. We will then look at four key properties - countability, separability, compactness and connectedness of topological spaces, all the while motivating them through geometry. We will close by briefly taking a look at how to define manifolds."} />
            <Paragraph text={"Prerequisites: this camp is meant for the more advanced learners. We hope you are fairly comfortable with basic proof-writing. However, we will still try our best to make it accessible to everyone who is curious."} />
            <div className="flex justify-center w-full">
                <Button label={"Sign Up Now"} link={"https://docs.google.com/forms/d/e/1FAIpQLScg_J3PzjgXD_rF1rz3AqbQy_TjTJpHOfGUAvhYCzygBFzpeA/viewform"} />
            </div>
        </div>
    );
  }
  
export default Camp2;