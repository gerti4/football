import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      '& > * + *': {
         marginLeft: theme.spacing(2),
      },
   },
}));

export default function CircularIndeterminate() {
   const classes = useStyles();
   const loadingStyle = { textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }

   return (
      <div className={classes.root} style={loadingStyle}>
         <h3>Loading</h3>
         <div >
            <CircularProgress />
         </div>
      </div>
   );
}
