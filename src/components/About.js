import { AiFillAndroid } from 'react-icons'
import { GrInstagram,GrGithub,GrLinkedin,GrNode,GrTwitter } from "react-icons/gr";
import profileImage  from '../img/dp.png'
import {DiPhp,DiPython,DiHtml5} from "react-icons/di"
import {GrHtml5,GrReactjs} from "react-icons/gr"
import {VscVerified} from "react-icons/vsc"
export const About = () =>{
    return <div className="About">
    <div className="profileImage">
        <div className="media">
        <img src={profileImage}/>

        </div>

        <div className="socialMedia">
            <span onClick={()=>{
                window.open("https://github.com/0yaah")
            }}><GrInstagram/></span>
            <span onClick={()=>{
                window.open("https://github.com/0yah")
            }}><GrGithub/></span>
            <span onClick={()=>{
                window.open("https://www.linkedin.com/in/ian-n-5babb7165/")
            }}><GrLinkedin/></span>
            <span onClick={()=>{
                window.open("https://twitter.com/_i1d9")
            }}><GrTwitter/></span>

        </div>
    </div>
    <div className="content">
        <span>Ian Naylan <VscVerified/></span>
        <span>Currently an IT attachee at Huduma Center</span>
        <span>GADS 2021 Cloud Stack</span>
        <span>Computer Science Student</span>

        <span>University of Nairobi ( 2018-2022 )</span>
        <span className="programmingTitle">Languages</span>
          
        <div className="skills">
            <span><DiPhp/>PHP</span>
            <span><DiHtml5/> HTML5</span>
            <span><GrNode/> Javascript *(Mern Stack )</span>
            <span><GrReactjs/> React & React Native</span>
            <span><DiPython/>Python</span>
        </div>
        <div>

        </div>
    </div>
</div>
}