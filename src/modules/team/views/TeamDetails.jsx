import React, { useState, useEffect } from 'react';
import CustomizedTable from '../cmps/CustomizedTable'
import TeamImg from '../cmps/CustomizedImg'
import ErrorMsg from '../cmps/ErrorMsg'
import Loading from '../cmps/Loading'
import teamService from '../service.js'

export default function TeamDetails(props) {
   const [currTeam, setCurrTeam] = useState(null);
   const { id } = props.match.params;
   // used for rendring type in error massage or table
   const SRC_TYPE = 'players'

   const headerStyle = { display: "flex", justifyContent: "space-evenly", margin: "20px" }
   
   useEffect(() => {
      teamService.getTeamById(parseInt(id))
         .then(res => {
            setCurrTeam(res)
         })
         .catch(err => {
            console.log(err);
            setCurrTeam([])
         }) 
   }, [id])

   return (
      // another way for rendering components according to the current state value - in oposite of (isLoaidng isError in Team view componnent)
      (!currTeam) ? <Loading></Loading> :
         (currTeam.length === 0) ?
            <ErrorMsg errType={SRC_TYPE}></ErrorMsg>
            : <div>
               <header style={headerStyle}>
                  <div>
                     <h1>{currTeam.name}</h1>
                     <h4>Founded at: {currTeam.founded}</h4>
                     <h4>Address: {currTeam.address}</h4>
                     <h4>Webstie: <a href={`${currTeam.website}`}>{currTeam.name}</a></h4>
                  </div>
                  <TeamImg src={currTeam.crestUrl} name={currTeam.name} ></TeamImg>
               </header>
               <CustomizedTable type={SRC_TYPE} data={currTeam.squad}></CustomizedTable>
            </div>
   );
}

