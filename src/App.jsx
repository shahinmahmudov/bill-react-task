import React, { useState, useEffect } from 'react';
import './Css/style.css';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [totalTip, setTotalTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    const billNum = parseFloat(bill);
    const tipPercentageNum = parseFloat(tipPercentage);
    const numberOfPeopleNum = parseFloat(numberOfPeople);

    if (billNum && tipPercentageNum && numberOfPeopleNum) {
      const tip = billNum * (tipPercentageNum / 100);
      const totalTipNum = tip.toFixed(2);
      const tipPerPersonNum = (tip / numberOfPeopleNum).toFixed(2);
      setTotalTip(totalTipNum);
      setTipPerPerson(tipPerPersonNum);
    } else {
      setTotalTip(0);
      setTipPerPerson(0);
    }
  }, [bill, tipPercentage, numberOfPeople]);

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <div className="input-group">
        <label htmlFor="bill-input">Bill:</label>
        <input id="bill-input" type="number" value={bill} onChange={(e) => setBill(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="percentage-input">Percentage(%):</label>
        <input id="percentage-input" type="number" value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="people-input">People:</label>
        <input id="people-input" type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
      </div>
      <div className="output-group">
        <p>Total Tip: {totalTip}$</p>
        <p>Tip Per Person: {tipPerPerson}$</p>
      </div>
    </div>
  );
}

export default TipCalculator;
