import React from "react"
import '../Plan/Plan.css'
import minus from '../../assets/Decrease.png'


const PlanItem = ({id, course, speed, altitude}) => {
    return (
        <div className="added-flight">
            <tr className="table-element">
            <td className="table-element-item table-element-item-1">{id}</td>
            <td className="table-element-item table-element-item-2">{course}</td>
            <td className="table-element-item table-element-item-3 table-speed">{speed}</td>
            <td className="table-element-item table-element-item-4">{altitude}</td>
            <td>
                <button className="minus"><img src={minus}/></button>
            </td>
        </tr>
    </div>
    )
}

export default PlanItem;