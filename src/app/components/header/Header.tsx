import { FC } from "react";


const Header: FC = () => {
  return (
    <div style={{ height: '10vh', display: 'flex'}}>
      <div style={{ fontSize: '40px', color: 'white', paddingLeft: '10px', paddingTop: '20px', fontFamily: 'System-UI' }}>
        Center Console
      </div>
      <div style={{ fontSize: '30px', color: 'white', paddingLeft: '10px', paddingTop: '20px', fontFamily: 'System-UI', justifyContent: 'space-around', margin: 'auto' }}>
        <a href="/instruments">Instruments</a>
        <a href="/settings" style={{marginLeft: '30px'}}>Settings</a>
      </div>
    </div>
  );
}

export default Header;