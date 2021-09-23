import React, { useEffect, useState } from 'react';
import { AiFillAndroid } from 'react-icons'
import { GrInstagram, GrGithub, GrLinkedin, GrNode, GrRadial, GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import profileImage from '../img/dp.png'
import fleaSS from '../img/flea.png';
import hypSS from '../img/hyp.png';
import houseSS from '../img/house-finder.png'
import reactmapsSS from '../img/reactmaps.png';
import { About } from './About';
import { Project } from './Project';
export const Projects = () => {

    const [projectInfo,setProjectInfo]=useState(0);
    const [projectCount,setProjectCount]=useState(-1);

    const info=[{
        title:"The Flea",
        description:"An online shopping store built using the Mongo Express React and Node. It uses iPay Payment API to handle mobile transactions. It is currently available on Web. The Administrator and Merchant dashboards are available on Android",
        image:fleaSS,
        duration:"6 Months",
        link:"https://theflea.app/",
    },{
        title:"Hyp Clothline",
        description:"An online cloth store built using firebase and react. Firebase features in this project include Google Auth, Push Notifications and Real time database. The Administrator console is available on Android only.",
        image:hypSS,
        duration:"1 Month",
        link:"https://naylan-hyp.firebaseapp.com/",
    },{
        title:"House Finder",
        description:"A house listing website built using react and firebase. It uses Google Maps API to find houses with a given GPS coordinate. Firebase functionalities in this projects are Email/Password authentication, Real time database and Push Notifications. ",
        image:houseSS,
        duration:"1 Month",
        link:"https://house-finder-83351.firebaseapp.com/",
    },{
        title:"Google Maps API with React",
        description:"Project demonstrating implementation of Google Maps, Directions API and Distance Matrix API. ",
        image:reactmapsSS,
        duration:"1 week",
        link:"https://0yah.github.io/react-map/",
    },{
        title:"Face Detection using Python and OpenCV",
        description:"Computer vision script that can be used to detect faces from images and webcam feed.",
        image:null,
        duration:"1 week",
        link:"https://github.com/0yah/py-opencv",
    },{
        title:"Machine Learning Algorithmns",
        description:"Implemetation of various Machine Learing concepts. Perceptrons, K-Means and K-Cluster Algorithmns, Self Organizing Maps and Naive Bayes algorithms using diabetes datasets.",
        image:null,
        duration:"3 months",
        link:"https://github.com/0yah/ml",
    },{
        title:"TCP and UDP Sockets using C",
        description:"Implemetation of networking sockets in Transmission Control Protocol and User Datagram Protocol. Includes multiconnection server using fork, threads and select system calls.",
        image:null,
        duration:"2 weeks",
        link:"https://github.com/0yah/sockets-c",
    }];

    useEffect(()=>{

    });
    //console.log(projectCount-1)
   // console.log(projectInfo)
    return <div >

        <div className="projectLayout">
            <div className="projectWindow">
                <div className="controls">
                    <div className="window">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="menu">
                        <div className="menuItem">
                            <input disabled value="Search Project" />
                        </div>
                        <div className="menuItem">
                            <span className="icon"></span>
                            <span className="title" onClick={()=>{
                                        setProjectCount(-1)
                                    }}>About</span>
                        </div>
                        <div className="menuItem">
                            <span className="icon"></span>
                            <span className="title">Projects</span>
                            <div className="content">
                                {info.map((item,index)=>{
                                    console.log(index)
                                    return <span onClick={()=>{
                                        setProjectCount(index)
                                    }}>{item.title}</span>
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="content">
                        {projectCount==-1?<About/>:<Project title={info[projectCount].title} link={info[projectCount].link} duration={info[projectCount].duration} image={info[projectCount].image} description={info[projectCount].description} />}
                        
                        
                    </div>
                </div>

            </div>

        </div>
        <div className="mobileControls" id="mobileControls">
            <span onClick={()=>{

if(projectCount!=-1){
    
// console.log("Before: ",projectCount);
let p = projectCount-1
setProjectCount(p);

console.log("After: ",p);
    return
}

            }}><GrCaretPrevious fill="red"/></span>
            <span onClick={()=>{
                setProjectCount(-1);

            }}><GrRadial/></span>
            <span onClick={()=>{

                

                if(projectCount>=info.length-1){
                    setProjectCount(-1)
                    
                    return
                }else{

                    
               // console.log("Before: ",projectCount);
                let p = projectCount+1
                setProjectCount(p);

                console.log("After: ",p);
                }
                

            }}><GrCaretNext /></span>
        </div>

    </div>

}

/*

<img src="https://picsum.photos/700" />
                <div className="blur">
                </div>
                <div className="content">
                    <span>The Flea</span>
                </div>
*/