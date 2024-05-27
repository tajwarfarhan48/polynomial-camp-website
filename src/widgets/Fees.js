import { useRef } from "react";
import useIfVisible from "../useIfVisible";
import '../output.css';

let bundles = [
    {
      key: 0,
      name: 'Bundle 1: For any 1 course',
      price: 'Tk 3000 per month'
    },
    {
      key: 1,
      name: 'Bundle 2: For any 2 courses',
      price: 'Tk 5000 per month'
    },
    {
      key: 2,
      name: 'Bundle 3: For any 3 courses',
      price: 'Tk 6000 per month'
    },
    {
      key: 3,
      name: 'Bundle 4: For all 4 courses',
      price: 'Tk 7000 per month'
    }
  ]

function Fees() {
    const ref = useRef();
    const isVisible = useIfVisible(ref);

    return (
        <div ref={ref} className={`flex flex-col mt-6 mb-12 space-y-8 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl font-bold text-center text-cream">OUR FEES</h1>
            <p className="leading-relaxed tracking-wide font-light text-lg text-center text-cream">We are offering a few bundles:</p>
            <div className="flex justify-center">
                <table>
                    <tbody>
                        <tr className="bg-purple">
                        <th className="text-cream">Bundle</th>
                        <th className="text-cream">Price</th>
                        </tr>
                        {bundles.map((b) => (<tr key={b.key} className="odd:bg-purple"><td className="px-8 py-4 text-cream text-center font-light">{b.name}</td><td className="px-8 py-4 text-cream text-center">{b.price}</td></tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fees;