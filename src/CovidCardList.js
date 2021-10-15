import React, {useState, useEffect} from 'react';
import Covidcard from './Covidcard'

const CovidCardList = () => {
    
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          setdata(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        //  setIsLoaded(true);
          //setError(error);
        }
      )
  }, [])

 /* const {local_new_cases, local_total_cases, local_deaths,
     local_new_deaths, local_recovered, local_active_cases} =data.data;*/

  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '45px'}}>Sri Lanka Covid-19 Update  <div style={{fontSize: '20px',}}>{!data?'Loading':data.data.update_date_time}</div></h1>
     <Covidcard num={!data?'Loading':data.data.local_new_cases} name='New Casess'/>
     <Covidcard num={!data?'Loading':data.data.local_total_cases} name='Total Casess'/>
     <Covidcard num={!data?'Loading':data.data.local_deaths} name='Total Deaths'/>
     <Covidcard num={!data?'Loading':data.data.local_new_deaths} name='New Deaths'/>
     <Covidcard num={!data?'Loading':data.data.local_recovered} name='Recoverd'/>
     <Covidcard num={!data?'Loading':data.data.local_active_cases} name='Active Casess'/>
    </div>
  )
}

export default CovidCardList;

/*"local_new_cases": 674,
"local_total_cases": 529755,
"local_total_number_of_individuals_in_hospitals": 24722,
"local_deaths": 13429,
"local_new_deaths": 21,
"local_recovered": 491604,
"local_active_cases": 24722,*/