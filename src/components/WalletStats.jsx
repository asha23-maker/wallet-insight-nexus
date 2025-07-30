
import React from "react";
export default function WalletStats({ stats }) {
  const first = new Date(+stats.firstTx * 1000).toLocaleDateString();
  const last = new Date(+stats.lastTx * 1000).toLocaleDateString();
  return (
    <div style={{ marginTop: 20 }}>
      <p>Total transactions: {stats.total}</p>
      <p>Incoming: {stats.incoming} | Outgoing: {stats.outgoing}</p>
      <p>Average fee: {stats.avgFee} NEX</p>
      <p>Total fees: {stats.totalFee} NEX</p>
      <p>Active from: {first} → {last}</p>
    </div>
  );
}
