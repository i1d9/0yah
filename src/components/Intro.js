import React from 'react';
import dp from '../img/dp.jpg';
import header from '../img/header.jpg';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Instagram } from '../img/instagram.svg';
import { ReactComponent as Verify } from '../img/verify.svg';
import { ReactComponent as Twitter } from '../img/twitter.svg';
import { ReactComponent as Whatsapp } from '../img/whatsapp.svg';
import $ from 'jquery';

export const Intro = () => {

    const closeIntro = () =>{
        $(".intro").fadeOut();
    
    }
    return <div className="intro">
        <div className="fileBar">
            <span onClick={()=>closeIntro()}></span>
            <span></span>
            <span></span>
        </div>

        <div className="content">
            <div className="ProfileBrief">
                
                <span>Skills</span>
                <div className="skills">

                    <div className="skill">

                        <span>React </span>

                    </div>

                    <div className="skill">
                        <span>React Native</span>

                    </div>

                    <div className="skill">

                        <span>ExpressJs</span>

                    </div>

                    <div className="skill">


                        <span>MongoDB</span>


                    </div>
                    <div className="skill">

                        <span>Python</span>

                    </div>
                    <div className="skill">
                        <span>Django</span>

                    </div>

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