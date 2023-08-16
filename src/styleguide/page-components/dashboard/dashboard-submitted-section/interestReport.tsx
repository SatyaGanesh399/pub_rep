import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import css from "./index.module.scss";
import SubInterestReport from './subInterestReports';
import { Intro_Data } from '@src/styleguide/lib/reportIntroData';
import CoreFieldsReport from './CoreFieldsReport';

const CoreFieldReport = (item => {
  return(
    <div key={item.name} className={css.interestData}>
      <ol>
        <li>{item.name}</li>
        <li>`The Student has scores ${item.score} in this field`</li>
        <li>{item.intro}</li>
      </ol>
    </div>
  )
})
function InterestReport({prop}) {
  const [results, setResults] =  useState([]);
  const [coreInterest, setCoreInterests] = useState([]);
  useEffect(()=>{
    let mainData = [];
    for(const key in prop){
      if(key !== "SuperSpecialization"){
      mainData.push({
        name : key,
        score : prop[key],
        intro : Intro_Data[key]
      })
    }
    }
    setResults(mainData);
  }, [])

  const compareScores = (a, b) => {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  };

  const evaluateCoreInterests = () =>{
    if(results.length !== 0){
      const sortedOrder = JSON.parse(JSON.stringify(results));
      sortedOrder.sort(compareScores)
      let major = 3;
      let majorInterests = [];
      for(let i=0; i< sortedOrder.length; i++){
        if(major !== 0){
          majorInterests.push(sortedOrder[i])
          major -= 1;
        }else if(major == 0 && majorInterests[majorInterests.length -1].score == sortedOrder[i].score){
          majorInterests.push(sortedOrder[i])
        }else{
          break;
        }
      }

      setCoreInterests(majorInterests);
    }
  }
  useEffect(()=>{
    evaluateCoreInterests();
  }, [results])
  return (
    <div style={{width : '100%', height : '100%'}}>
      <div className={css.assessmentNotes}>
      <h2>Interest Assessment</h2>
      <p>
      PG Career Interest Testing is a contemporary psychometric tool offering a comprehensive list of new age careers. It identifies your interests and suggests career paths accordingly.
      </p>
    </div>
    <div className={css.interestData}>
      <h4>YOUR INTEREST</h4> 
      </div>
    <div className={css.barchartContainer}>
        <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={700}
          data={results}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
          >
          <YAxis domain={[0, 10]} tickCount={11} style={{fontSize : 9, fontWeight:600}} opacity={0.6}/>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
          height={100}
          viewBox="100"
          dataKey="name"  
          tickCount={23} 
          interval={0}
          angle={90}
          dx={3}
          dy={48}
          style={{fontSize : 9, fontWeight:600}}
          opacity={0.6}
          width={200}
          tickSize={3}
          allowDataOverflow={false}
          minTickGap={0}>
          </XAxis>
          <Tooltip />
          <Legend wrapperStyle={{left : "55px"}} />
          <Bar dataKey="score" fill="#ef7e5c" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div className={css.assessmentNotes}>
      {coreInterest.length > 0 &&
        <CoreFieldsReport prop={coreInterest} />
      }
      </div>
      {(prop && 'SuperSpecialization' in prop && prop['SuperSpecialization']) &&
      <div>
        <div className={css.assessmentNotes}>
          <h2>Detailed Analysis</h2>
        </div>
        <SubInterestReport prop={prop['SuperSpecialization']} />
      </div>
      }
      {/* <div>
      <table className={css.tableContainer}>
        <tr>
          <th>Major field Scores</th>
          <th>Interpretation</th>
        </tr>
        <tr>
          <td>8-10</td>
          <td>High Interest</td>
        </tr>
        <tr>
          <td>4-7</td>
          <td>Average Interest</td>
        </tr>
        <tr>
          <td>1-3</td>
          <td>Low Interest</td>
        </tr>
      </table>
      </div> */}
      {coreInterest.length > 0 &&
      <div style={{margin : 20}}>
      <div className={css.assessmentNotes}>
          <h2>Summary</h2>
        </div>
        <p>Your interests in the hierarchy are as follows-</p>
        <ol>
        {coreInterest.map((item:any) => {
          return <div key={item.name}>
            <li>{item.name}</li>
        </div>
        })}
        </ol>
        <p>You are recommended to choose from the above mentioned field of work, as your scores indicate high interest for the same and would lead you to be more satisfied as well as motivated with your work.</p>
      </div>

      }
    </div>
  )
}

export default InterestReport;