import { useRef } from "react";
import useIfVisible from "../useIfVisible";
import '../output.css';

let bundles = [
    {
      key: 0,
      name: 'Physics Camp',
      time: 'Saturday/Sunday - 10:00 pm - 11:30 pm'
    },
    {
      key: 1,
      name: 'CS Camp',
      time: 'Monday/Wednesday - 8:00pm - 9:30pm'
    },
    {
      key: 2,
      name: 'Maths Camp 1',
      time: 'Monday/Thursday - 9:30 pm - 11:00 pm'
    },
    {
      key: 3,
      name: 'Maths Camp 2',
      time: 'Tuesday/Friday - 10:30 pm - 12:00 am'
    }
  ]

function Fees() {
    const ref = useRef();
    const isVisible = useIfVisible(ref);

    return (
        <div id="schedule" ref={ref} className={`flex flex-col mt-6 mb-12 space-y-8 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold text-center text-cream">SCHEDULE</h1>
            <div className="flex justify-center">
                <table>
                    <tbody>
                        <tr className="bg-purple">
                        <th className="text-cream">Course</th>
                        <th className="text-cream">Time</th>
                        </tr>
                        {bundles.map((b) => (<tr key={b.key} className="odd:bg-purple"><td className="px-8 py-4 text-cream text-center font-light">{b.name}</td><td className="px-8 py-4 text-cream text-center">{b.time}</td></tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fees;