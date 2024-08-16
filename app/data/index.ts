import { SiC, SiJavascript, SiHtml5, SiCss3, SiReact, SiXcode, SiSwift, SiApple } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";


export const projects = [
    {
        id: 1,
        title: "NASA POTD React App",
        img: "/images/nasa-react-app.png", 
        des: "A React app that displays NASA's daily space images using the POTD API, featuring date-based navigation and image details.",
        icons: [SiReact, SiCss3, SiHtml5],
        link: "https://github.com/adr577/NASA-react-app?tab=readme-ov-file",
        src: "https://nasa-react-app-adr.netlify.app/"

    },
    {
        id: 2,
        title: "Codepath iOS101 Final Project",
        img: "/images/new-again.png",
        des: "Aka New Again is accessible to anyone with a desire to improve learn new habits over time. From students to professors.",
        icons: [SiSwift, SiXcode, SiApple],
        link: "https://github.com/adr577/New-Again",
        src:""
    },
    {
        id: 3, 
        title: "Word Search",
        img: "/images/word-search.png",
        des: "Ultilized knowledge in CSE 31 to construct an algorithm that finds a word no matter how hard!. Also there is a secret extra credit thing I added :).",
        icons: [SiC],
        link: "",
        src: ""
    },
    {
        id: 4,
        title: "NASA Space Apps",
        img: "/images/nsa.png",
        des: "Collaborated with others in NASA space apps event to raise awareness around the globe for areas with vast phytoplankton aka ocean gardens.",
        icons: [SiJavascript, SiHtml5, SiCss3],
        link: "",
        src: ""
    },
    {
        id: 5, 
        title: "Bootstrap Email Login UI",
        img: "/images/bootstrap-email.png",
        des: "For my headstart module in my internship program. I had to use css framework Bootstrap to create a responsive email template.",
        icons: [SiHtml5, FaBootstrap],
        link: "https://github.com/adr577/bootstrap-email-adrian.git",
        src: "https://boostrapemailtemplate.netlify.app/"

    }
]


