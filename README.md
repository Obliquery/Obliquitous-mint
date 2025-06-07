# 🌐 Obliquitous Mint

Welcome to **Obliquitous Mint** — the official minting portal for the $OBLIQ memecoin and its NFT collection. This site allows users to connect their wallet, mint on-chain identity NFTs, and view their $OBLIQ token balance.

---

## 🚀 Live Site

👉 [https://obliquery.github.io/obliquitous-mint](https://obliquery.github.io/onliquitous-mint)  


---

## 🧠 What Is Obliquitous?

Obliquitous is a chaos-core memecoin project combining irreverent memes with on-chain interactivity. Our mint portal offers:

- ✅ Free NFT minting (gas-only)
- 🪙 Live $OBLIQ token balance display
- 🔢 Total supply counter
- 🌐 Base chain compatibility
- 📦 IPFS asset & metadata support

---

## 🛠 Features

- Wallet connect via MetaMask
- NFT minting from smart contract
- Live `$OBLIQ` ERC-20 balance
- Dynamic total supply readout
- Contract ABI pre-wired in `config.js`

---

## 📦 Folder Structure
onliquitous-mint/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── mint.js
├── config.js
├── assets/
│   └── logo.png
└── README.md
---

## 🔐 Smart Contracts

| Type        | Address                                                                 |
|-------------|-------------------------------------------------------------------------|
| NFT Mint    | [`0xC489d5eA1174Bbe4330fd7082779969096403cF2`](https://basescan.org/address/0xC489d5eA1174Bbe4330fd7082779969096403cF2) |
| $OBLIQ Token| [`0x08e71f813cb60953a15843d4f397c61649a62277`](https://basescan.org/address/0x08e71f813cb60953a15843d4f397c61649a62277) |

---

## 🌍 Blockchain Info

- **Chain**: Base Mainnet
- **Chain ID**: `0x2105` (decimal 8453)
- **RPC**: `https://mainnet.base.org`
- **Explorer**: [basescan.org](https://basescan.org)

---

## ⚙️ How to Use Locally

```bash
git clone https://github.com/obliquery/obliquitous-mint.git
cd obliquitous-mint
open index.html  # Or use Live Server in VS Code

---


💻 Developer Info
	•	Uses ethers.js v5 via CDN
	•	Minimal ABI included for both NFT + ERC-20 contracts
	•	Easy to extend with trait display, metadata fetches, etc.

⸻

🪙 Future Plans
	•	Trait visualizer from IPFS
	•	Mint analytics dashboard
	•	Meme-based rarity filter
	•	Swap integration for $OBLIQ liquidity

⸻

📜 License

MIT © Obliquitous Labs — Mint the absurd. Own the chaos. Be Obliquitous.
