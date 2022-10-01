
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'


function Header() {
    const [state, setState] = useState('1')
    return <div className="header btn-group">
        {/* <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
        <NavLink to='/view'><label class="btn btn-outline-primary lol" for="btnradio1">View Move</label></NavLink>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
        <NavLink to='/settings'><label class="btn btn-outline-primary lol" for="btnradio2">Settings</label></NavLink> */}
        <NavLink to='/view'><button type="button" class={"btn btn-primary"+(state==='1'?' lol': '')} onClick={()=>setState('1')}>View Move</button></NavLink>
        <NavLink to='/settings'><button type="button" class={"btn btn-primary"+(state==='2'?' lol': '')} onClick={()=>setState('2')}>Settings</button></NavLink>
        {/* <button type="button" class="btn btn-primary">Левая</button> */}
        
        {/* <NavLink to='/view'>View Move</NavLink>
        <NavLink to='/settings'>Settings</NavLink> */}
    </div>
}

export default Header;