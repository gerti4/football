import axios from 'axios'

// ket for storing teams data in storage
const TEAMS_KEY = 'teams';

// private key for using the football data api
const HEADER_OPTIONS = {
   headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': 'e73d572d5a9e4dfdb5f784b90f90a80b'
   }
};

export default {
   getTeams,
   getTeamById
}

// method for getting items
// getting data by axios or from local storage
async function getTeams() {
   let teams = getFromStorage(TEAMS_KEY);
   if (!teams) {
      try {
         teams = await axios.get('https://api.football-data.org/v2/competitions/PD/teams', HEADER_OPTIONS)
            .then(res => res.data.teams)
         saveToStorage(TEAMS_KEY, teams);
      } catch (err) {
         throw new Error("Cant get teams from server ", err);
      }
   }
   return teams;
}


// a method for getting a specific team by axios call
async function getTeamById(id) {
   let currTeam;
   try {
      currTeam = await axios.get(`http://api.football-data.org/v2/teams/${id}`, HEADER_OPTIONS)
         .then(res => res.data)
   } catch (err) {
      throw new Error("Cant get current team from server ", err);
   }
   return currTeam;  
}


// ===
// Private helpers
// ===

function getFromStorage(key) {
   return JSON.parse(window.localStorage.getItem(key))
}

function saveToStorage(key, state) {
   window.localStorage.setItem(key, JSON.stringify(state))
}
