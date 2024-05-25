import '../output.css';
import Quote from './Quote.js';
import Paragraph from './Paragraph.js';
import Button from './Button.js';

function Camp4() {
    return (
        <div class="flex flex-col space-y-6 my-6">
            <h1 class="text-xl font-bold text-center">Computer Science Camp 1 - Python, basic data structures and algorithms:</h1>
            <p class="text-center">Instructor: Farhan Tajwar Romit</p>
            <Quote text={"Let us change our traditional attitude to the construction of programs. Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do. - Donald Knuth"} />
            <Paragraph text={"Computers seem like the closest thing we have to magic. But if we peek behind the curtain just a little bit, we can see for ourselves the glorious mess that a computer really is. Everything, starting from the contents of our hard drives, to the pixels on our screen, are composed of just some 1s lost in a big sea of 0s. Surely, you'll think, this does not make sense to even the computers themselves."} />
            <Paragraph text={"And you would be right. In reality, the CPU inside our phone, laptop, or PC is actually a very simple machine that just does exactly what it is told. As we will see, human ingenuity is actually the glue that holds a computer and its seemingly arbitrary actions together. With our decades of experience in theorizing about, and working with, computers, we have been able to formulate certain techniques of storing data on our computers (data structures), and certain techniques of  using and manipulating that data (algorithms), which form the bedrock of all the awesome things our computers can do. In this course, we will study the fundamentals of these techniques."} />
            <Paragraph text={"We will begin by taking a look at the motivations behind some common data structures like arrays and linked lists, and then study some commonly-used algorithms for those data structures (such as insertion and sorting algorithms). Later on, we will encounter some more specialized data structures, such as trees (for storing hierarchical data), graphs (for networked data), and heaps (for ordered data)."} />
            <Paragraph text={"The language for this course will be Python. Don't worry - as we go along, we will cover all the necessary Python skills you will need for completing this course!"} />
            <div class="flex justify-center w-full">
                <Button label={"Sign Up Now"} link={"https://docs.google.com/forms/d/e/1FAIpQLScg_J3PzjgXD_rF1rz3AqbQy_TjTJpHOfGUAvhYCzygBFzpeA/viewform"} />
            </div>
        </div>
    );
  }
  
export default Camp4;