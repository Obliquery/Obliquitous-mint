import {
  MINT_CONTRACT,
  MINT_ABI,
  TOKEN_CONTRACT,
  TOKEN_ABI,
  NETWORK
} from '../config.js';

let provider;
let signer;
let nftContract;
let tokenContract;

async function connectWallet() {
  if (!window.ethereum) return alert('MetaMask not detected');

  await window.ethereum.request({ method: 'eth_requestAccounts' });
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  await switchToBase();
  setupContracts();
  document.getElementById('status').innerText = 'Wallet connected!';
  await showTokenBalance();
  await showTotalSupply();
}

async function switchToBase() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: NETWORK.chainId }]
    });
  } catch (err) {
    console.warn('Network switch failed:', err);
  }
}

function setupContracts() {
  nftContract = new ethers.Contract(MINT_CONTRACT, MINT_ABI, signer);
  tokenContract = new ethers.Contract(TOKEN_CONTRACT, TOKEN_ABI, provider);
}

async function mintNFT() {
  try {
    const tx = await nftContract.mint({ value: 0 });
    document.getElementById('status').innerText = 'Transaction sent...';
    await tx.wait();
    document.getElementById('status').innerText = 'NFT minted!';
    await showTotalSupply();
  } catch (err) {
    console.error('Mint failed:', err);
    document.getElementById('status').innerText = 'Mint failed.';
  }
}

async function showTokenBalance() {
  const userAddress = await signer.getAddress();
  const balance = await tokenContract.balanceOf(userAddress);
  const decimals = await tokenContract.decimals();
  const symbol = await tokenContract.symbol();

  const formatted = ethers.utils.formatUnits(balance, decimals);
  document.getElementById('tokenBalance').innerText = `You hold: ${formatted} ${symbol}`;
}

async function showTotalSupply() {
  const total = await nftContract.totalSupply();
  document.getElementById('totalSupply').innerText = `Total NFTs Minted: ${total}`;
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);
document.getElementById('mintButton').addEventListener('click', mintNFT);
