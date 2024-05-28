import '../output.css';
import LecturesSVG from '../static/svg/lectures.svg';
import CampSVG from '../static/svg/problem-solving-camps.svg';
import OfficeHoursSVG from '../static/svg/office-hours.svg';
import FinalProjectSVG from '../static/svg/final-project.svg';
import GuestTalksSVG from '../static/svg/guest-talks.svg';
import { useRef } from 'react';
import useIfVisible from '../useIfVisible.js';

let perks = [
  {
    key: 0,
    svg: LecturesSVG,
    title: 'Lectures',
    description: 'Weekly lectures where we will cover a broad variety of topics from your selected courses.'
  },
  {
    key: 1,
    svg: CampSVG,
    title: 'Problem Solving Camps',
    description: 'We strongly believe that to truly understand the material in depth, you need to solve problems. They help you truly grasp some of the abstract ideas, see how to work with them and see some wonderful applications. At Polynomial Camp, there will be collaborative problem-solving sessions where you will be solving problems in groups where you will learn from one another and hopefully you will see how different people appreciate the concepts.'
  },
  {
    key: 2,
    svg: OfficeHoursSVG,
    title: 'Problem Solving Sessions/Office Hours',
    description: 'In these sessions, we will discuss how to solve problems and answer your questions if you are stuck. These office hours will be led by students of Stanford University, Cornell University, University of Texas, University of Waterloo and so on.'
  },
  {
    key: 3,
    svg: FinalProjectSVG,
    title: 'Final Project',
    description: 'Towards the end of the camp, you will work on a fun final project where you will explore something that you have found interesting from the material we have explored in a group.'
  },
  {
    key: 4,
    svg: GuestTalksSVG,
    title: 'Guest Talks',
    description: 'We will be inviting various experts from each field to guest lectures on the current state of the field and their research. These will likely be a combination of people from both academia and industry.'
  },
]

function Outline() {
    const ref = useRef();
    const isVisible = useIfVisible(ref);

    return (
        <div id="outline" ref={ref} className={`space-y-6 mt-6 mb-12 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold text-center text-cream mb-2">WHAT WILL BE INCLUDED?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {perks.map((p) => <Perk key={p.key} svg={p.svg} title={p.title} description={p.description} />)}
            </div>
        </div>
    );
}

function Perk({ svg, title, description }) {
  const ref = useRef();
  const isVisible = useIfVisible(ref);
  
  return (
    <div ref={ref} className={`bg-cream rounded-md flex flex-col p-6 space-y-5 items-center transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <img className="size-40" src={svg} alt="Logo"/>
      <h1 className="text-center text-3xl font-bold text-purple">{title}</h1>
      <p className="leading-relaxed tracking-wide font-light text-center text-lg text-purple">{description}</p>
    </div>
  );
}

export default Outline;