import React from 'react';
import Nav from 'react-bootstrap/Nav';
import * as bsIcons from 'react-icons/bs';
import * as biIcons from 'react-icons/bi';

const Header = () => {
  return (
    <div>
      <Nav className="mt-4 mb-4" style={{float: "right", left: "-25px"}} activeKey="/signup">
        <Nav.Item>
          <Nav.Link to="/signup" className='nav-item'>Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/login" className='nav-item icon'><biIcons.BiLogInCircle size={"25px"} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/profile" className='nav-item icon'>< bsIcons.BsFillGearFill size={"20px"}/></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header
