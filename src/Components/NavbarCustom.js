import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { Login , isLogin} from '../Redux/Action'

const NavbarCustom = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const udehLogin = useSelector(state => state.contoh.isLogin)

  const dispatch = useDispatch()

  const keluar = () => {
    dispatch(Login(null))
    dispatch(isLogin())
  }

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">TS</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            {udehLogin 
                ? 
            <div><NavItem>
              <Link to="/method">Method</Link>
            </NavItem>
            <NavItem>
              <Link onClick={keluar} to="/">LogOut</Link>
            </NavItem></div>
                :
            <div><NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/register">Register</Link>
            </NavItem>
            </div>
            }
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;