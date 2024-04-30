/* eslint-disable no-constant-condition */
import { useState } from "react";
import "./Planetaria.css";
import { project } from "./project";
export default function Planetaria() {
  const [value,setVule] = useState('all')
  const [arr,setArr] = useState(project)
  const nweArre = project.filter((item) => {
   return item.category === 'react'
  })
  const nweArr = project.filter((item) => {
    return item.category === 'javas'
   })
   const nweAr = project.filter((item) => {
    return item.category === 'boots'
   })
   const nwerre = project.filter((item) => {
    return item.category === 'htmlc'
   })
  return (
    <div className="sudmite">
      <div className="sub-title-1">
        <div className="byit-1">
          <button onClick={() => {setVule('all') + setArr(project)}}  className={value === 'all'? 'active' : null}>all project</button>
          <button onClick={() => {setVule('css') + setArr(nweArre)}}  className={value === 'css'? 'active' : null}>html&css</button>
          <button onClick={() => {setVule('htm') + setArr(nweArr)}}  className={value === 'htm'? 'active' : null}>javascript</button>
          <button onClick={() => {setVule('boo') + setArr(nweAr)}}  className={value === 'boo'? 'active' : null}>reactjs&nextjs</button>
          <button onClick={() => {setVule('rrr') + setArr(nwerre)}}  className={value === 'rrr'? 'active' : null}>bootstrap&tialwind</button>
        </div>
      </div>
      <div className="sub-title-2 ">
      {arr.map((item)=>{
        return(
          <div key={item} style={{width:'269px'}} className="card">
          <img style={{borderRadius:'10px'}} width={266} src={item.image} alt="#" />
           <div className="clidrerm"> 
            <h1>liding page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam ad similique facere animi est!</p>
            <div className="card-9">
             <div className="proparty">
                  <span className="icon-infinity"></span>
                  <span className="icon-atom"></span>
             </div>
             <div className="facewrite">
               <p>more <span className="icon-forward"></span></p>
             </div>
           </div>
           </div>
        </div>
        )
      })

      }
        
      </div>
    </div>
  );
}
