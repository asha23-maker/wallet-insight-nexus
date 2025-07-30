
import React, { useState } from "react";
import WalletForm from "./components/WalletForm";
import WalletStats from "./components/WalletStats";
import { fetchAddressStats } from "./api";

function App() {
  const [stats, setStats] = useState(null);

  const handleAnalyze = async (addr) => {
    try {
      const txs = await fetchAddressStats(addr);
      if (!txs.length) return alert("No transactions or invalid address");

      const total = txs.length;
      const incoming = txs.filter(tx => tx.to.toLowerCase() === addr.toLowerCase()).length;
      const outgoing = total - incoming;
      const fees = txs.map(tx => +tx.gasUsed * +tx.gasPrice);
      const totalFeeNEX = fees.reduce((a, b) => a + b, 0) / 1e18;
      const avgFee = totalFeeNEX / total;

      setStats({
        total,
        incoming,
        outgoing,
        totalFee: totalFeeNEX.toFixed(6),
        avgFee: avgFee.toFixed(6),
        firstTx: txs[0].timeStamp,
        lastTx: txs[txs.length - 1].timeStamp,
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Wallet Insight — Nexus Testnet III</h1>
      <WalletForm onAnalyze={handleAnalyze} />
      {stats && <WalletStats stats={stats} />}
    </div>
  );
}

export default App;
