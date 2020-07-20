import React from 'react';

export default function ({src,name}) {
   const imgStyle = { marginTop: "10px", width: "190px", height: "190px" };
   return(
      <div>
         <img src={src} alt={`${name} img`} style={imgStyle} />
      </div>
   );
}