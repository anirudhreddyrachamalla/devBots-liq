import React from 'react'
import { Card, Divider, Input, Space } from 'antd';
import {CheckOutlined} from '@ant-design/icons';
const { Search } = Input;

function TokenCard() {

    const tokenList = ['ETH', 'BTC', 'USDC', 'WETH', 'UNI', 'USDT', 'LINK'];

    const FullTokenList = [{name:'ETHER', code: 'ETH' }, {name:'ETHER', code: 'ETH' },{name:'ETHER', code: 'ETH' }, {name:'ETHER', code: 'ETH' },{name:'ETHER', code: 'ETH' }, {name:'ETHER', code: 'ETH' },];

    return (
        <>
            <Search
                placeholder="input search text"
                onSearch={() => { }}
                style={{
                    width: "100%",
                }}
            />
            <Space wrap style={{ marginTop: "10px" }}>
                {
                    tokenList.map((token, index) =>
                        <div className='token' key={`token-${index}`}>{token}</div>
                    )
                }
            </Space>
            <Divider />
            <ul style={{padding:0}}>
                {
                    FullTokenList.map((token, index) =>
                    <li className='fullToken' key={`token-${index}`}>
                        <div>
                            <div>{token.name}</div>
                            <div>{token.code}</div>
                        </div>
                        <div><CheckOutlined /></div>
                    </li>
                )
                }
            </ul>
        </>
    )
}

export default TokenCard