import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import s from './MainPage.module.css'
import moment from 'moment'; 

const days = [
    { id: 1, label: "Понеділок", selected: false },
    { id: 2, label: "Вівторок", selected: false },
    { id: 3, label: "Середа", selected: false },
    { id: 4, label: "Четвер", selected: false },
    { id: 5, label: "П'ятниця", selected: false },
    { id: 6, label: "Субота", selected: false },
    { id: 7, label: "Неділя", selected: false },
  ];

const windowWidth = document.documentElement.clientWidth;
const setMainPath = ()=>{
    const weekDay = moment().get('day')
    days.map(day=>day.id===weekDay ? day.selected=true : day.selected=false)
return(days)
}

const selectDay=(choosenDay)=>{
    days.map(day=>day.id===choosenDay ? day.selected=true : day.selected=false)
    return days
}


export const MainPage = () => {
<<<<<<< HEAD
    const day = setMainPath()
    const history = useHistory()

    useEffect(()=>
    {history.push(day)},
    [day, history])
    
return (
<div className={s.mainDiv}>
    {/* {windowWidth < 768 && <Васин компонент для мобила choosenDay={selectDay()} days={setMainPath()}/>}
    {windowWidth >=768 && windowWidth <1200 && (<Васин компонент для ТАблетки choosenDay={selectDay()} days={setMainPath()}/>)} */}
    {/* {windowWidth >=1200 &&(<Васин компонент для ДЕска choosenDay={selectDay()} days={setMainPath()}/>)} */}
    {/* <WeekTabContent/> */}
</div>
)
}


    
=======
    return (
      <>
      {/* <h4>THIS IS SPARTAAAA</h4> */}
      </>
    );
  };
  
>>>>>>> 09a636d87c18d221cf546fd5fa3ec752d4ed7ae8
