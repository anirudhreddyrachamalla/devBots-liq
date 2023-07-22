import { Button, Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'

function LayoutWrapper() {
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
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal" 
        >
            <div style={{display:'flex'}}>
                <Button type='primary' style={{alignSelf:'flex-end'}}>Connect Wallet</Button>
            </div>
        </Menu>
      </Header>
      <Content
        className="site-layout"
      >
        <div
          style={{
            minHeight: '100vh',
            background: '#000',
          }}
        >
          Content
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