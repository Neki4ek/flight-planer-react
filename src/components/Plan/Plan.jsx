import React, { useState, useEffect } from 'react';
import '../Plan/Plan.css'
import minus from '../../assets/Decrease.png'



const PlanItem = ({id, course, speed, altitude}) => {

    const [showComponent, setShowComponent] = useState(true);

    useEffect(() => {
    return () => {
      console.log('Компонент удален');
    };
    }, []);

    const handleClick = () => {
        setShowComponent(false);
    };
    return (
        <>
        {   showComponent &&
            <div className="added-flight" id={id}>
                <tr className="table-element">
                    <td className="table-element-item table-element-item-1">{id}</td>
                    <td className="table-element-item table-element-item-2">{course}</td>
                    <td className="table-element-item table-element-item-3 table-speed">{speed}</td>
                    <td className="table-element-item table-element-item-4">{altitude}</td>
                    <td>
                        {showComponent && <button className="minus" type='button' onClick={() => handleClick() }><img src={minus}/></button>}
                    </td>
                </tr>
            </div>
        }
        </>
    )
}

export default PlanItem;