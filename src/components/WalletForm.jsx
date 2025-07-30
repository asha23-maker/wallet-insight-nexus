
import React, { useState } from "react";

export default function WalletForm({ onAnalyze }) {
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onAnalyze(input.trim());
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ padding: 8, width: 300 }}
      />
      <button type="submit" style={{ marginLeft: 10, padding: 8 }}>Analyze</button>
    </form>
  );
}
