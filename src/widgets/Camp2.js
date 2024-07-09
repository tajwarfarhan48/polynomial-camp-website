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
            <h1 className="text-4xl font-bold text-center text-cream">MATHEMATICS CAMP 2 - ABSTRACT ALGEBRA AND DISCRETE MATH</h1>
            <p className="text-center w-full text-cream font-bold text-xl">Instructor: Ramisha Sharika</p>
            <Quote text={"''Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine''"} author={"M. ATIYAH"}/>
            <p className="leading-relaxed tracking-wide font-light text-lg text-cream">Algebra is one of the most beautiful fields of mathematics. This is where you will see the power of abstraction. Groups and rings are very simple, abstract umbrellas under which many things we see around the world fall - from numbers to matrices to polynomials to the symmetries of the universe (take a look at <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Noether%27s_theorem"><u className="text-purple font-bold transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">Noether’s Theorem</u></a> for example). It is truly startling how much information these abstract objects contain - rings and ideals have been used to describe complex relations and geometries and to get very powerful results. For a basic example, take a look at Hilber’s Nullstellensatz or how physicists constantly discuss symmetries whose natural language is group theory.</p>
            <p className="leading-relaxed tracking-wide font-light text-lg text-cream">We will introduce groups and rings - how to construct them, various contexts in which they show up, their defining characteristics, their subgroups/subrings and generators. We will then study homomorphism, the very useful isomorphism theorems and actions on groups. Watch <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=mH0oCDa74tE"><u className="text-purple font-bold transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">this video</u></a> to get a sense of what this field is all about!</p>
            <Paragraph text={"It is hard to overstate the impact of algebra on the modern world. Today it is no longer a separate field of mathematics; algebraic number theory, algebraic geometry, etc. are all very hot topics of mathematics today."} />
            <Quote text={"''Without mathematics, there’s nothing you can do. Everything around you is mathematics.''"} author={"SHAKUNTALA DEVI"} />
            <Paragraph text={"Mathematics forms the foundations of many diverse fields, a key one being Computer Science. A course in discrete structures bridges the gap between pure mathematics and theoretical computer science. It allows us to apply tools such as logic, probability, and proofwriting to formalize our understanding of algorithms and better grasp the theoretical underpinnings of advanced topics in computer science, such as cryptography and machine learning. In this course, we will start by doing a review of different proof techniques with a strong emphasis on how to write inductive proofs. We will then continue to practice formal proofwriting while learning about set theory, graph theory, and number theory. The focus of this course will be on learning the basics of graph theory and number theory."} />
            <div className="flex justify-center w-full">
                <Button label={"Sign Up Now"} link={"https://docs.google.com/forms/d/e/1FAIpQLSdHzKRp6aSJpXY3jEn7JrlxSPsjt8VsRVwYFxE58BewVe6ZBQ/viewform"} />
            </div>
        </div>
    );
  }
  
export default Camp2;