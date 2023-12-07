import React, {useState} from "react";
import './PlanTable.css';
import PlanItem from "../Plan/Plan";


import minus from '../../assets/Decrease.png'


const picturesIdCreator = () => {
  let previousId = 0;

  return () => {
    previousId+=1;
    return previousId;
  };
};


const PlanTable = () => {
  const picturesIdGenerator = picturesIdCreator();

  const [plan, setPlan] = useState([

  ])

  const handlerAddPlan = e => {
    e.preventDefault();

    setPlan(prev => [...prev, {id: plan.length+1,
      course: '56.84071, 60.65071', speed: '9999', altitude: '9999'}])
  }

  return (
    <>
      {plan && plan.map(element => 
      <PlanItem 
        id={element.id}
        course={element.course}
        speed={element.speed}
        altitude={element.altitude}
      />
      )}      
      <button onClick={handlerAddPlan}>
        Нажми меня
      </button>
    </>
  ) 
}

export default PlanTable;