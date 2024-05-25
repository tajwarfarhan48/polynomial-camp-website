import './output.css';
import Quote from './Quote.js';
import Paragraph from './Paragraph.js';
import Button from './Button.js';

function Camp1() {
    return (
        <div class="flex flex-col space-y-6 my-6">
            <h1 class="text-xl font-bold text-center">Mathematics Camp 1 - Real Analysis and Linear Algebra:</h1>
            <p class="text-center w-full">Instructor: Jubayer Ibn Hamid</p>
            <Quote text={"The beauty of mathematics only shows itself to more patient followers - Maryam Mirzakhani"} />
            <Paragraph text={"Real analysis and linear algebra are not just fascinating in and of themselves; they are extremely useful. More modern sciences, like machine learning and optimization, employ these fields of mathematics almost every step of their way."} />
            <Paragraph text={"In real analysis, we will first take a close look at what defines integers, rationals and real numbers - their various axioms and consequences. After that, we will study sequences of real numbers - their limits, properties of subsequences and special kinds of sequences like monotone, bounded, etc. Then, we will naturally move on to series and functions - their limits, continuity, etc. We will close by taking a brief look at metric spaces - open, closed sets and continuous functions on metric spaces. After doing so, we will gain a much better understanding of reals in general. In linear algebra, we will take a brief look at fields and then focus on vector spaces defined on them - in particular, finite-dimensional ones. We will then study linear maps which will motivate the study of matrices, null spaces, etc. followed by the study of dual spaces. We will close by taking a look at eigenspaces and inner product spaces."} />
            <Paragraph text={"These techniques will become very useful in any field of science you go to. In optimization, one would frequently face problems like optimizing resources under certain constraints or scheduling usage of batteries to conserve electricity or optimizing a portfolio at an investment bank; you would often find yourself formulating these problems through things like “linear programming”, “second order cone programming”, etc which, more often than not, are in the language of linear algebra. In machine learning, you would often find yourself trying to analyze local properties of a loss surface using real analysis. The most rigorous study of probability and statistics is founded on real analysis."} />
            <Paragraph text={"Prerequisites: we hope that you know the mathematics that is taught up until 10th grade. We will also learn everything through proving them. Do not worry if you do not know proof-writing yet - we will teach an introduction to proof-writing as well. While the course content may seem daunting, we promise we will go at a pace that you can understand and, more importantly, enjoy."} />
            <div class="flex justify-center w-full">
                <Button label={"Sign Up Now"} link={"https://docs.google.com/forms/d/e/1FAIpQLScg_J3PzjgXD_rF1rz3AqbQy_TjTJpHOfGUAvhYCzygBFzpeA/viewform"} />
            </div>
        </div>
    );
}

export default Camp1;