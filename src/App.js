import { Menu } from 'antd';
import {DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

import './App.less';
import { Route, Routes, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div>
      Home Component
    </div>
  );

}

function Content() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
        <Route path='/activeUsers' element={<div>Active User List</div>}></Route>
        <Route path='/disabledUsers' element={<div>Disabled User List</div>}></Route>
        {/* <Route path='/uersList' element={<div>User List</div>}></Route> */}
        <Route path='/profile' element={<div>Profile</div>}></Route>
        <Route path='/signout' element={<div>Signout</div>}></Route>
      </Routes>
    </div>
  );
}

function SideMenu () {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection:'row'}}> 
      <Menu
        mode='inline'
        onClick={({ key }) => {
          if(key ===' signout') {
            //TODO, sign out feature here
          }else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
            { label: "Home", key:"/", icon: <HomeOutlined /> },
            { label: "Dashboard", key:"/dashboard", icon: <DashboardOutlined /> },
            { 
              label: "Users List",
              key:"/uersList",
              icon: <UnorderedListOutlined />,
              children:[
                { 
                  label:'Active Users',
                  key:'/activeUsers'
                },
                { 
                  label:'Disabled Users',
                  key:'/disabledUsers'
                }    
              ]
            },
            { label: "Profile", key:"/profile", icon: <UserOutlined /> },
            { label: "Signout", key:"/signout", icon: <PoweroffOutlined />, danger:true },
        ]}
          
      />
      </div>
  )
}
  
  
function Header () {
  return (
    <div 
      style={{
        height: 60, 
        backgroundColor:'lightskyblue', 
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold'
      }}
    >
      Header
    </div>
  )
}

function Footer () {
  return (
    <div 
      style={{
        height: 60, 
        backgroundColor:'lightgray', 
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold'
      }}
    >
      Footer
    </div>
  )
}

function App() {

  return (
    <div 
      style={{ 
        display: 'flex',
         flexDirection:'column', 
         flex:1,
         height: '100vh'
      }}
    >  
      <Header />
      <div style={{ display: 'flex', flexDirection:'row', flex:1}}> 
        <SideMenu />
        <Content />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
