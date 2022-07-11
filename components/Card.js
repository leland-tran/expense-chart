import React from 'react';
import logo from './../images/logo.svg';
import Chart from './Chart';
import data from './../data.json';

export default function Card() {
  const maxAmount = Math.max(...data.map(amount => amount.amount));
  const chart = data.map((items, i) => (
    <Chart
      key={i}
      amount={items.amount}
      day={items.day}
      max={maxAmount}
      index={i}
    />
  ));

  return (
    <main className="card">
      <section className="balance-summary">
        <p>
          My balance <br />
          <span className="balance-number">$921.48</span>
        </p>
        <img src={logo} className="logo" alt="Expense Chart logo" />
      </section>
      <section className="spend-info">
        <h2 className="chart-title">Spending - Last 7 days</h2>
        <div className="chart">{chart}</div>
        <div className="divider"></div>
        <div className="total-container">
          <p>Total this month</p>
          <div className="total-info">
            <p className="total-number">$478.33</p>
            <p className="total-percentage">
              <strong>+2.4%</strong> <br />
              <span>from last month</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
