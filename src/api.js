
const BASE = "https://testnet3.explorer.nexus.xyz";
export async function fetchAddressStats(address) {
  const url = `${BASE}/api?module=account&action=txlist&address=${address}&sort=asc`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("API fetch failed");
  const { result } = await res.json();
  return result;
}
