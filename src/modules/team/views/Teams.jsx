import React, { useState, useEffect } from 'react';

import CustomizedTable from '../cmps/CustomizedTable'
import ErrorMsg from '../cmps/ErrorMsg'
import Loading from '../cmps/Loading'
import teamService from '../service.js'

export default function Teams() {
   const [teams, setTeams] = useState([]);
   
   // one way for rendering components according to the api call status
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   // used for rendring type in error massage or table
   const SRC_TYPE = 'teams';

   useEffect(() => {
      setIsError(false);
      setIsLoading(true);
      teamService.getTeams()
         .then(res => {
            setTeams(res)
         })
         .catch(err => {
            console.log(err);
            setIsError(true);
         })
      setIsLoading(false);
   }, [])

   return (
      <div style={{ textAlign: "center" }}>
         <h1>Spain football-League Primera Division!</h1>
         {
            (isLoading) ?
               <Loading></Loading> :
               (isError) ?
                  <ErrorMsg errType={SRC_TYPE}></ErrorMsg>
                  : <div>
                     <CustomizedTable type={SRC_TYPE} data={teams}></CustomizedTable>
                  </div>
         }
      </div>
   );
}



