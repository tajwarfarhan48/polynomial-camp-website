import Button from './Button';
import '../output.css';

let teamMembers = [
    {
        name: 'JUBAYER IBN HAMID',
        camp: 'MATHEMATICS CAMP',
        websiteLink: 'https://jubayer-hamid.github.io/',
        description: 'Jubayer is currently doing research on machine learning in IRIS Lab, Stanford Artificial Intelligence Laboratory (SAIL). He studied mathematics/physics at Stanford University as an undergrad and computer science/mathematics for masters. His research interests are in offline reinforcement learning and representation learning. He has worked on problems like disentangled representation learning, reinforcement learning theory and behavior sampling algorithms. In mathematics, he is interested in abstract algebra and algebraic topology/geometry.',
    },
    {
        name: 'Tausif Hossain',
        camp: 'Physics Camp',
        websiteLink: 'https://www.linkedin.com/in/tausif-hossain-316360153/',
        description: 'Tausif is currently pursuing PhD in Boston University and working at Fermi National Accelerator Laboratory on the Mu2e Experiment. Before this, he completed his BSc in Physics from Yale University. During his research at Mu2e he has made various meaningful contributions to the collaboration by focusing on the intersection of physics and data analysis. He is currently interested in using simulations and machine learning algorithms to improve various physics analyses in novel ways. He also has extensive experience in teaching and tutoring students and is passionate about improving science communication to a wider audience.',
    },
    {
        name: 'Farhan Tajwar Romit',
        camp: 'Computer Science Camp',
        websiteLink: 'https://farhantajwar.com',
        description: "Farhan is currently working as a software developer at UT Health San Antonio. He is pursuing his bachelor's in Computer Science at the University of Texas at San Antonio. His primary interests in computer science include computer architecture and operating systems development. His previous projects include making an operating system from scratch, designing an interpreter for a proprietary programming language, and working on IoT-device classification using LLMs with a UTSA faculty member. He is passionate about making STEM education more accessible to a wider audience.",
    },
    {
        name: 'Ifdita Hasan Orney',
        camp: 'Computer Science Camp',
        websiteLink: 'https://www.linkedin.com/in/ifdita-hasan-861597218/',
        description: "Ifdita Hasan Orney is currently completing her bachelor's degree in Computer Science with a minor in Mathematics at Stanford University. She is currently doing machine learning research focusing on multi-level feedback generation using Large Language Models (LLMs) and Reinforcement Learning from Human Feedback (RLHF). Her previous research involved using reinforcement learning for autonomous systems. Additionally, Ifdita has been an active member of the Stanford Solar Car Project and has conducted coding workshops for young children with Stanford Women in Computer Science (WiCS).",
    },
    {
        name: 'Ramisha Sharika',
        camp: 'Mathematics Camp',
        websiteLink: 'https://www.linkedin.com/in/ramisha-hossain/',
        description: 'Ramisha is a third-year student at Cornell University majoring in Computer Science and pursuing minors in Mathematics and Philosophy. She is currently carrying out research in the field of machine learning with a faculty member at Cornell. Her interests lie in the nexus between computational theory and mathematics, specifically in the applications of analysis in machine learning and of algebra in cryptography.',
    },
    {
        name: 'Hasif Ahmed',
        camp: 'Physics Camp',
        websiteLink: 'https://github.com/hasifnumerics',
        description: 'Hasif is on his way to graduate with a double major in Physics and Mathematics (BA) from Lawrence University. He is starting his PhD in Mathematics at University of Wisconsin Milwaukee this fall. Hasif is interested in Mathematical Biology, PDEs, Probability theory. He has previously worked on DNA transcription in bacteria, analyzing Facilitated Diffusion. During his undergrad, he worked at Lawrence Berkeley National Laboratory on a machine learning project and helped develop an efficient stochastic solver for a diffusion model to simulate high energy physics experiments.',
    }
];

function Team() {
    return (
        <div>
            <h1 class="text-5xl font-bold text-center text-white mb-6">MEET THE TEAM</h1>
                <ul>
                    {teamMembers.map((t) => <TeamMember name={t.name} camp={t.camp} websiteLink={t.websiteLink} description={t.description}/>)}
                </ul>
        </div>
    );
}

function TeamMember({ name, camp, websiteLink, description }) {
    return (
        <li class="rounded overflow-hidden shadow-lg flex flex-col md:odd:flex-row md:even:flex-row-reverse">
            <div class="w-full flex items-center justify-center">
                <img class="bg-black size-60 mb-8 rounded-full border-2 border-purple" alt={name}></img>
            </div>
            <div class="w-full flex flex-col items-center justify-center">
                <p class="text-center text-purple font-bold text-3xl mb-3">{name}</p>
                <p class="text-center text-purple font-bold text-xl mb-5">{camp}</p>
                <p class="leading-relaxed tracking-wide text-cream text-md font-light text-center mb-5">{description}</p>
                <button class="mb-12 border border-cream rounded-full px-4 py-2 w-fit"><a target="_blank" rel="noreferrer" href={websiteLink}><p class="text-white">Visit their Website</p></a></button>
            </div>
        </li>
    );
}

export default Team;