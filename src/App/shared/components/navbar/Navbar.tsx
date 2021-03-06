import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../../assets/data/MenuData';
import { MenuItem } from '../../models/menu-item';
import { Button } from '../button/Button';
import { titles } from '../../constants/defines';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
height: 80px;
background: red;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
width: 100%;
text-decoration: none;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
font-style: italic;
color: #fff;
font-size: 30px;
${NavLink}
`;

const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
display: block;
background-size: contain;
height: 40px;
width: 40px;
cursor: pointer;
position: absolute;
top: 0;
right: 0;
transform: translate(-50%, 44%);
color: whitesmoke;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
display: none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
font-size: 25px;
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px){
display: none;
}
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">{titles.logo}</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item: MenuItem, index: number) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        )
        )}
      </NavMenu>
      <NavBtn>
        <Button  primary={true} to="/contact" >{ titles.contactUs }</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar;
