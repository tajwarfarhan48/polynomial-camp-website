import { useRef } from 'react';
import '../output.css';
import useIfVisible from '../useIfVisible';

function FAQ() {
  const ref = useRef();
  const isVisible = useIfVisible(ref);

  return (
    <div id="faq" ref={ref} className={`w-full mt-6 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl font-bold text-center text-cream mb-6">FREQUENTLY ASKED QUESTIONS</h1>

      <h1 className="font-bold text-2xl mb-4 text-purple">What are the dates for Polynomial Camp?</h1>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">The program will be from <b>24th June</b> to <b>16th September</b></p>
      < LineBreak />

      <h1 className="font-bold text-2xl mb-4 text-purple">Who is Polynomial Camp for?</h1>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">Polynomial Camp is targeted towards anyone who is curious to learn more. We expect this to be mostly helpful for students in <b>high school and undergraduates.</b></p>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">We welcome people from all backgrounds but also want to specifically target resources to those who are from a disadvantaged background. If you have questions regarding this or if you believe you need specific guidance for the camp to be helpful to you, please feel free to email us at <a href="mailto: jubayer@stanford.edu"><u className="font-bold text-purple transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">jubayer@stanford.edu</u></a> or <a href="mailto: tausifh@bu.edu"><u className="font-bold text-purple transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">tausifh@bu.edu</u></a>.</p>
      < LineBreak />

      <h1 className="font-bold text-2xl mb-4 text-purple">Are there any prerequisites for joining Polynomial Camp?</h1>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">There are some fairly basic prerequisites that you should know to be able to fully learn what we will teach (these are written in detail in the next section). However, we welcome everyone as long as you love an adventure!</p>
      < LineBreak />

      <h1 className="font-bold text-2xl mb-4 text-purple">What will the weekly schedule be?</h1>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">Tentatively, we will have two lectures each week and 2-3 office hours where people can ask us questions and we can help with problem solving.</p>
      < LineBreak />

      <h1 className="font-bold text-2xl mb-4 text-purple">How will the classes be conducted?</h1>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">Classes will be held through Zoom lectures. We will have groups (on Slack/Discord/Edstem) where people can ask questions and discuss material (or memes). </p>
      < LineBreak />

      <h1 className="font-bold text-2xl mb-4 text-purple">Can I get financial aid?</h1>
      <p className="leading-relaxed tracking-wide font-light text-lg text-cream mb-4">Yes! If you are interested in enrolling in Polynomial Camp but you require financial aid, please feel free to reach out to us. To do so, send us an email at either <a href="mailto: jubayer@stanford.edu"><u className="font-bold text-purple transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">jubayer@stanford.edu</u></a> or <a href="mailto: tausifh@bu.edu"><u className="font-bold text-purple transition duration-100 ease-in hover:text-darkPurple active:text-veryDarkPurple">tausifh@bu.edu</u></a>. In the email, please tell us why you require financial aid and provide any supporting documentation you can provide to strengthen the financial aid application. We are providing aid on a case-by-case basis and we are trying our best to broaden access to as large a group as possible.</p>
      < LineBreak />
    </div>
  );
}

function LineBreak() {
  return (
    <div>
      <hr className="text-cream my-6" />
    </div>
  );
}

export default FAQ;