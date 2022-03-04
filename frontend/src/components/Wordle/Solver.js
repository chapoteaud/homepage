import { La } from './wordList';
import React from 'react';

const Solver = () => {
  var Ha = new Date(2021,5,19,0,0,0,0);
  var today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  function Na(e, a) {
      var s = new Date(Ha)
        , t = new Date(tomorrow).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.round(t / 864e5)
  }

  let answer = La[Na(Ha, tomorrow)];

  return <div><span id="answer">{answer.toUpperCase()}</span></div>;
}


export default Solver;
