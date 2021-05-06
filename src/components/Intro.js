import dp from '../img/dp.jpg';
import header from '../img/header.jpg';
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
                    <li>GraphQL</li>
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
                    <i class="bi bi-github"></i>
                    <i class="bi-alarm"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-whatsapp"></i>
                    </div>
                </div>
            </div>
            <div className="BackHeader">
                
            </div>
        </div>
    </div>
} 