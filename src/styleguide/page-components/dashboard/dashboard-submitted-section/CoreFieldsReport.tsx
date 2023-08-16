import React from 'react'
import css from "./index.module.scss";


function CoreFieldsReport({prop}) {
  return (
    <div className={css.interestData}>
        <h4>YOUR CORE INTERESTS</h4>
        {prop.map((item:any) => {
          return <div key={item.superSubs}>
            <p>{item.name} - <span>{item.score}</span></p>
            <ul>
            <li>{item.intro}</li>
          </ul>
        </div>
        })}
    </div>
  )
}

export default CoreFieldsReport;