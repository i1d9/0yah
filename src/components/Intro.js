import dp from '../img/dp.jpg';
import header from '../img/header.jpg';
import {ReactComponent as Github}  from '../img/github.svg';
import {ReactComponent as Instagram} from '../img/instagram.svg';
import {ReactComponent as Verify} from '../img/verify.svg';
import {ReactComponent as Twitter} from '../img/twitter.svg';
import {ReactComponent as Whatsapp} from '../img/whatsapp.svg';

export const Intro = () =>{
    return <div className="intro">
        <div className="fileBar">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="content">
            <div className="ProfileBrief">
                <div className="skills">
                    <span>Expertise</span>
                <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>React Native</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                    <li>Django</li>
                </ul>                    
                </div>

            </div>
            <div className="ProfileIntro">
            <div className="profileImage">
                    <img src={dp} />
                </div>
                <div className="content">
                    <span>Ian Naylan</span>
                    <span>Computer Science Student</span>
                    <span>Nairobi, Kenya</span>
                    <div className="profiles">
                   
                    <Github />
                    <Instagram />
                    
                    <Twitter />
                    <Whatsapp />

                    </div>
                </div>
            </div>
            <div className="BackHeader">
                
            </div>
        </div>
    </div>
} 