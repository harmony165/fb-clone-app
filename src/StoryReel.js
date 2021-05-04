import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import Bg1 from "./bg1.jpeg"
import Bg2 from "./bg2.jpeg"
import Bg3 from "./bg3.jpg"
import Bg4 from "./bg4.jpeg"
import Octo3 from "./octo3.png";
import Octo2 from "./octo2.png";
import Octo4 from "./octo4.png";
import Octo5 from "./octo5.png";

function StoryReel() {
    return (
        <div style={{backgroundImage:`url(${Image})`}} className="storyReel">
            <Story 
            image={Bg1}
            profileSrc={Octo5}
            title="Kaushik "
            />
            <Story 
            image={Bg2}
            profileSrc={Octo2}
            title="Avishek"
            />
            <Story 
            image={Bg4}
            profileSrc={Octo3}
            title="Bikram"
            />
            <Story 
            image={Bg3}
            profileSrc={Octo4}
            title="Suvajit"
            />
            
        </div>
    )
}

export default StoryReel;
