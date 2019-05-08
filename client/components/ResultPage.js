import React from 'react';

let percentage = 30

export default function(){
  return (<div id='results'>
    <div id='resultHeading'>
      <h1>RESULTS</h1>
    </div>
    <div id='resultsContent'>
      {percentage>70 ?
      <div>
        <img src = 'https://2.bp.blogspot.com/-beuQ7vWss3A/Vanr0qdReHI/AAAAAAAAJyQ/429Czd7AAh8/s1600/smiley.jpg' />
        <div class="progress-bar striped animated">
          <span class="progress-bar-green" style={{width:`${percentage}%`}}></span>
        </div>
        <h4>Congratulations</h4>
      </div> : ((40<percentage && percentage<69) ?
      <div>
        <img src='https://i.pinimg.com/originals/5b/7e/3a/5b7e3a8836afd29f597322263f9f0552.jpg'/>
        <div class="progress-bar striped animated">
          <span class="progress-bar-blue" style={{width:`${percentage}%`}}></span>
        </div>
        <h4>Keep Working</h4>
      </div> :
      <div>
        <img src='https://www.nutritionnew.com/wp-content/uploads/2018/07/Yoga-Mats-Cons.png' /><div class="progress-bar striped animated">
          <span class="progress-bar-red" style={{width:`${percentage}%`}}></span>
        </div>
        <h4>Try Again</h4>
      </div>)}
    </div>
  </div>

  )
}
