import '../output.css';
import LecturesSVG from '../static/svg/lectures.svg';
import CampSVG from '../static/svg/problem-solving-camps.svg';
import OfficeHoursSVG from '../static/svg/office-hours.svg';
import FinalProjectSVG from '../static/svg/final-project.svg';
import GuestTalksSVG from '../static/svg/guest-talks.svg';

let perks = [
  {
    svg: LecturesSVG,
    title: 'Lectures',
    description: 'Weekly lectures where we will cover a broad variety of topics from your selected courses.'
  },
  {
    svg: CampSVG,
    title: 'Problem Solving Camps',
    description: 'We strongly believe that to truly understand the material in depth, you need to solve problems. They help you truly grasp some of the abstract ideas, see how to work with them and see some wonderful applications. At Polynomial Camp, there will be collaborative problem-solving sessions where you will be solving problems in groups where you will learn from one another and hopefully you will see how different people appreciate the concepts.'
  },
  {
    svg: OfficeHoursSVG,
    title: 'Problem Solving Sessions/Office Hours',
    description: 'In these sessions, we will discuss how to solve problems and answer your questions if you are stuck. These office hours will be led by students of Stanford University, Cornell University, University of Texas, University of Waterloo and so on.'
  },
  {
    svg: FinalProjectSVG,
    title: 'Final Project',
    description: 'Towards the end of the camp, you will work on a fun final project where you will explore something that you have found interesting from the material we have explored in a group.'
  },
  {
    svg: GuestTalksSVG,
    title: 'Guest Talks',
    description: 'We will be inviting various experts from each field to guest lectures on the current state of the field and their research. These will likely be a combination of people from both academia and industry.'
  },
]

function Outline() {
    return (
        <div>
            <h1 class="text-center">What Will Be Included?</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {perks.map((p) => <Perk svg={p.svg} title={p.title} description={p.description} />)}
            </div>
        </div>
    );
}

function Perk({ svg, title, description }) {
  return (
    <div class="border border-red flex flex-col items-center">
      <img class="size-40" src={svg} alt="Logo"/>
      <h1 class="text-center">{title}</h1>
      <p class="text-center">{description}</p>
    </div>
  );
}

export default Outline;