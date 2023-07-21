import React, { useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMaskButton = () => {
  const [account, setAccount] = useState("");

  const connectMetaMask = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      console.log('Please install MetaMask.');
    }
  };

  return (
    <div 
      style={{ 
        position: 'absolute', 
        right: '20px', 
        top: '20px', 
        textAlign: 'center',
        border: '2px solid black',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer'
      }} 
      onClick={connectMetaMask}
    >
      <img src="/metamask.png" alt="Metamask" width="20" height="20" style={{ marginRight: '10px' }} />
      {account || 'Connect'}
    </div>
  );
};

export default MetaMaskButton;