import React from 'react';
import {Link} from 'react-router-dom'

export default function () {
   return (
      <div>
         <h1>Welcome to the spanish leguae</h1>
         <Link to="/teams">Teams Table</Link>
      </div>
   );
}