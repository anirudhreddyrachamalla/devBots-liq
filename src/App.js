import React, { useState } from 'react';
import MetaMaskButton from './MetaMaskButton';
import IntegerInput from './IntegerInput';
import LayoutWrapper from './layout';
import { SettingOutlined, DownOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './App.css';
import { Modal } from 'antd';
import TokenCard from './TokenCard';

function App() {

  const [tokenCount, setTokenCount] = useState(0);
  const [tokenName, setTokenName] = useState("ETH");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {/* <MetaMaskButton />
      <IntegerInput /> */}
      <LayoutWrapper>
        <div className='mainCard'>
          <div className='headerSection'>
            <div className='headerButtonWrapper'>
              <button>
                Swap
              </button>
              <button>
                Buy
              </button>
            </div>
            <div>
              <SettingOutlined style={{fontSize: "18px", color: '#7780a0'}}/>
            </div>
          </div>

          <div style={{position:'relative'}}>
          <div className='section1'>
              <div style={{fontSize:"30px"}}>{tokenCount}</div>
              <div className='tokenWrapper' onClick={() => setIsModalOpen(true)}>
                <div style={{fontWeight:"500"}} >{tokenName}</div>
                <div><DownOutlined style={{fontSize:"12px"}} /></div>
              </div>
          </div>
          <div className='absoluteIcon'>
          <ArrowDownOutlined />
          </div>
          <div className='section2'>
          <div style={{fontSize:"30px"}}>{tokenCount}</div>
              <div className='selecTokenWrapper'>
                <div>Select token</div>
                <div><DownOutlined style={{fontSize:"12px"}} /></div>
              </div>
          </div>
          </div>
          <div className='connectWallet'>
            Connect Wallet
          </div>
        </div>
      </LayoutWrapper>
      <Modal width={450} title="Select a token" open={isModalOpen} onCancel={handleCancel}>
        <TokenCard />
      </Modal>
    </div>
  );
}

export default App;
