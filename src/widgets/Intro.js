import { useRef } from "react";
import '../output.css';
import Quote from './Quote.js';
import Paragraph from './Paragraph.js';
import useIfVisible from '../useIfVisible.js';

function Intro() {
    const ref1 = useRef();
    const isVisible = useIfVisible(ref1);

    return (
        <div id='vision' ref={ref1} className={`scroll-py-12 flex flex-col space-y-4 my-10 transition opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-5xl font-bold text-center text-cream mb-6">OUR VISION</h1>
            <Quote text={"''It is in this gesture of 'going beyond,' to be something in oneself rather than the pawn of a consensus, the refusal to stay within a rigid circle that others have drawn around one - it is in this solitary act that one finds true creativity. All other things follow as a matter of course.''"} author={"ALEXANDER GROTHENDIECK"}/>
            <Paragraph text={"The world of science is vast and deeply mysterious. There is a lot more to mathematics than only solving integrals. There is a lot more to physics than calculating dynamics. Science tells us something deep about the universe we live in. Indeed, mathematics gives us a language and a whole world of abstract objects that describe the natural world around us - from numbers and functions describing very visible phenomena to abstract things groups describing symmetries, coordinate rings describing spaces cut out by polynomials and topology helping us characterize geometric properties. Physics provides us a language to understand nature, both at a microscopic level and the colossal one. Computer science is much more than simply writing code for applications - it provides us tools to understand what problems are solvable at all and how fast we can hope to solve them."}/>
            <Paragraph text={"This Summer, we want to take that journey of learning the foundational ideas and language with which we can explore this vastness. The first steps must start from learning the basic pillars. We often come across very simple objects that do not seem out of the ordinary at first sight, but are deeply powerful. The journey to the modern advances needs to start from fully grasping foundational concepts like rigorously understanding sequences, learning to solve problems in kinematics, learning to implement and analyze basic algorithms."}/>
            <p className="leading-relaxed tracking-wide font-light text-lg text-cream">It is important to appreciate how far-reaching these basic concepts are. Take for example, polynomials - equations of the form a<sub>n</sub>x<sup>n</sup>+ a<sub>n-1</sub>x<sup>n-1</sup>+ . . . + a<sub>1</sub>x + a<sub>0</sub>; we come across them at a fairly young age and we even learn how to solve quadratic polynomials before high school! Yet, we do not realize how whole fields of very advanced and modern science revolve around them. In computer science, people working on complexity theory, even the P=NP problem, can be found investigating what problems can be solved in polynomial time. Very powerful results in mathematics, like Hilbert’s Nullstellensatz, can be proven using simple properties of polynomials. In some sense, the whole field of algebraic geometry is about solutions of polynomial equations and the interesting geometry they entail. Therefore, learning these basics well is of utmost importance."</p>
            <Paragraph text={"This summer, at Polynomial Camp, we plan on taking on that adventure. We will explore mathematics, physics and computer science beyond the traditional school curricula; we will take a more rigorous approach to studying several building blocks of these fields that would provide us a language and other tools to explore the bigger questions. We will learn what motivated the study of these things over the past many centuries and get a sense of why they are still of great interest."}/>
            <Quote color={'white'} text={"''You take the blue pill, the story ends. You wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland. And I show you how deep the rabbit hole goes''"} author={"MORPHEUS"}/>
        </div>
    );
  }
  
export default Intro;