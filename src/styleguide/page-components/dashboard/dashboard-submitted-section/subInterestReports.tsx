import React from 'react'
import css from "./index.module.scss";


function SubInterestReport({prop}) {
  return (
    <div style={{width : '100%', height : '100%'}}>
      <table className={css.tableContainer}>
  <tr>
    <th>Main Field</th>
    <th>Super Field</th>
    <th>Score</th>
  </tr>
  {Object.entries(prop).map(([key, value]) => (
    <tr key={key}>
      <td>{key}</td>
      <td>
        {prop[key].map((item) => (
          <p key={item.sub}>{item.sub}</p>
        ))}
      </td>
      <td>
        {prop[key].map((item) => (
          <p key={item.sub}>
            {item.score % 1 === 0 ? item.score : item.score.toFixed(2)}
          </p>
        ))}
      </td>
    </tr>
  ))}
</table>

    </div>
  )
}

export default SubInterestReport;