import React from "react"

const Nets = (props) => {
    return (
      <li>
          {props.visitorTeam} vs. {props.homeTeam} on {props.gameDate.substr(0,10)} @ {props.startTime}
      </li>
    )
  }

export default Nets