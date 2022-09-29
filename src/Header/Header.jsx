
import { NavLink } from 'react-router-dom';
import './Header.scss'


function Header() {
   
    return <div className="header btn-group">
        <NavLink to='/view'>View Move</NavLink>
        <NavLink to='/settings'>Settings</NavLink>
    </div>
}

export default Header;