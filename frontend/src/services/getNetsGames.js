const axios = require('axios')
let myTeam = 'Nets'

async function getTeams() {
    const URL = 'https://www.balldontlie.io/api/v1/teams'
    let teamList = await axios.get(URL).then(response => response.data.data)
    return teamList
}

async function getMyTeamNextGame() {
    let today = new Date()
    let start_date = today.getFullYear()+ '-' + (today.getMonth() + 1 + '-' + today.getDate())
    let tomorrow = new Date(start_date)
    tomorrow.setDate(tomorrow.getDate() + 7)
    let end_date = tomorrow.getFullYear()+ '-' + (tomorrow.getMonth() + 1 + '-' + tomorrow.getDate())

    let allTeams = await getTeams().then(res => res)
    let favTeam = allTeams.filter(team => team.name === myTeam) 
    let nextGame = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${favTeam[0].id}&start_date=${start_date}&end_date=${end_date}`)
      .then(res => {
          
          return res.data.data;
        //   let homeTeam = res.data.data[0].home_team.full_name
        //   let visitorTeam = res.data.data[0].visitor_team.full_name
        //   let startTime = res.data.data[0].status 
        //   let gameDate = res.data.data[0].date
          
        //   return `${visitorTeam} vs. ${homeTeam} on ${gameDate.substr(0,10)} @ ${startTime}`
        })
    return nextGame
}

module.exports = {
    getMyTeamNextGame
}

