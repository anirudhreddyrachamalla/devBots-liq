import { Button, Layout, Menu, Card } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'

function LayoutWrapper({children}) {

  const handleConnect = () => {

  }

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" >Logo</div>
        {/* <Menu
          theme="dark"
          mode="horizontal" 
        > */}
        <div style={{display: "flex", width: "100%", flexDirection:"row-reverse"}}>
                <Button type='primary' style={{alignSelf:'flex-end'}} onClick={handleConnect}>Connect Wallet</Button>
                </div>
        {/* </Menu> */}
      </Header>
      <Content
        className="site-layout"
      >
        <div
          style={{
            display:"flex",
            justifyContent:"center",
            padding:"20px 40px",
            minHeight: '100vh',
            background: '#000',
          }}
        >
          {/* <Card
    title="Card title"
    bordered={false}
    style={{
      width: 450,
      height: 350
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card> */}
  {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Liquidity splitter
      </Footer>
    </Layout>
  )
}

export default LayoutWrapper