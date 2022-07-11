import React, { useState, useEffect } from 'react';

export default function Chart(props) {
  const [amount, setAmount] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth);
  const [barColor, setBarColor] = useState('#76B5BC');

  useEffect(() => {
    const handleWindowResize = () => setDesktop(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const today = new Date().getDay();

  let barStyles = {
    height: `calc((${props.amount} / ${props.max}) * 100%)`,
    backgroundColor: `${today === props.index + 1 && barColor}`,
  };

  function hoverOn() {
    setAmount(true);
    setBarColor('#B4E0E5');
  }

  function hoverOff() {
    setAmount(false);
    setBarColor('#76B5BC');
  }

  return (
    <div className="chart-bars-container">
      <div className="chart-bars">
        <div
          className="chart-bar"
          style={barStyles}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          {desktop > 550 && (
            <div
              style={{ display: amount && 'inline-block' }}
              className="chart-bars-amount"
            >
              ${props.amount}
            </div>
          )}
        </div>
      </div>
      <p className="chart-days-label">{props.day}</p>
    </div>
  );
}
