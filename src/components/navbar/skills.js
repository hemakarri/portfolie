import "./skills.css"
import React, { useState, useEffect } from 'react';

function Skills() {
    const [progress, setProgress] = useState(80);
    const [progress6, setProgress6] = useState(60);
    const [progress5, setProgress5] = useState(50); 
    const [progress1, setProgress1] = useState(90);



    return (
    <div>
     <div className="skill">
    
       <div class="skill-1">
        <p class="skill-name ml-80">JavaScript</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
    </div>

    <div class="skill-2">
        <p class="skill-name ml-80">HTML&CSS</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress1}%`}}>{progress1}%</div>
        </div>
    </div>

     <div class="skill-3">
        <p class="skill-name ml-80">React</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress}%`}}>{progress}%</div>
        </div>
    </div>

     <div class="skill-4  ml-80">
        <p class="skill-name ml-80">NodeJS</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress6}%`}}>{progress6}%</div>
        </div>
    </div>
   

    </div>
    <div className="relative">
    <div className="mt-20">
    <div className="box2">
     <div class="skill mt-20">
        <p class="skill-name">SQL</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress1}%`}}>{progress1}%</div>
        </div>
    </div>

    <div class="skill mt-7">
        <p class="skill-name">C#&DotnetMvc</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress5}%`}}>{progress5}%</div>
        </div>
    </div>

    <div class="skill mt-7 relative">
        <p class="skill-name">Jquery</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress}%`}}>{progress}%</div>
        </div>
    </div>

<div class="skill mt-7">
        <p class="skill-name">Angular</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress5}%`}}>{progress5}%</div>
        </div>
    </div>

{/*     
<div class="skill mt-7">
        <p class="skill-name">Angular</p>
        <div class="progress-bar">
            <div class="progress" style={{ width: `${progress}%`}}>{progress}%</div>
        </div>
    </div> */}
    </div>
    </div>
       </div>
       </div>
    );
    
  }
  
  export default Skills;

