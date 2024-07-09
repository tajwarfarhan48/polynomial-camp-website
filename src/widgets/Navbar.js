import { useState } from 'react';
import '../output.css';
import Button from './Button';
import MenuSVG from '../static/svg/menu.svg';
import CrossSVG from '../static/svg/cross.png';

let links = [
  {
    'label': 'Our Vision',
    'link': '#vision'
  },
  {
    'label': 'Our Team',
    'link': '#team'
  },
  {
    'label': 'Courses',
    'link': '#courses'
  },
  {
    'label': 'Outline',
    'link': '#outline'
  },
  {
    'label': 'Schedule',
    'link': '#schedule'
  },
  {
    'label': 'Fees',
    'link': '#fees'
  },
  {
    'label': 'FAQ',
    'link': '#faq'
  }
]

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col bg-black">
      <div className="flex items-center justify-between p-4">
        <div className="text-purple text-lg sm:text-xl font-black"><p>POLYNOMIAL CAMP</p></div>
        <div className="flex items-center">
          <div className="max-lg:hidden flex items-center text-lg mx-8 space-x-6">
            {links.map((l, i) => <NavbarLink key={i} label={l.label} link={l.link} />)}
          </div>
          <Button label={"Sign Up"} link={"https://docs.google.com/forms/d/e/1FAIpQLSdHzKRp6aSJpXY3jEn7JrlxSPsjt8VsRVwYFxE58BewVe6ZBQ/viewform"} />
          <img alt='menu-icon' src={expanded ? CrossSVG : MenuSVG} onClick={() => {setExpanded(!expanded)}} className="lg:hidden size-8 ml-4"></img>
        </div>
      </div>

      <ul className={`${expanded ? 'flex' : 'hidden'} flex-col space-y-4 p-4 pt-0`}>
      {links.map((l, i) => <NavbarLink shrinkFn={() => {setExpanded(false)}} key={i} label={l.label} link={l.link} />)}
      </ul>
    </div>
  );
}

function NavbarLink({ label, link, shrinkFn }) {
  return (
    <a onClick={shrinkFn} href={link} className="text-cream transition duration-100 ease-in hover:text-purple active:text-darkPurple">{label}</a>
  );
}

export default Navbar;