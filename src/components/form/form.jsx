import React from "react";
import plus from './assets/Union.png'

function formDataTake(form){
    const formData = new FormData(form);
    for(let [name, value] of formData) {
      console.log(`${name} = ${value}`);
    } 
}

const Form = () => {
    return (
        <form class="add-stage" id="form" method='POST' enctype="application/json"> 
        <div class="add-stage-element add-stage-element-1">
          <p class="course-label">Course:</p>
          <input type="text" class="course" name="course"/>
        </div>
        <div class="add-stage-element add-stage-element-2">
          <p class="speed-label">Indicated Air Speed (m/s):</p>
          <input type="number" class="speed" step="0.01" name="speed"/>
        </div>
        <div class="add-stage-element add-stage-element-3">
          <p class="altitude-label">True Altitude:</p>
          <input type="number" class="altitude" name="altitude"/>
        </div>
        <div class="add-stage-element add-stage-element-4">
          <button onClick={(evt) => {evt.preventDefault(); formDataTake(this)} } type="submit" class="plus"><img src={plus}/></button>
        </div>
      </form>
    )
}