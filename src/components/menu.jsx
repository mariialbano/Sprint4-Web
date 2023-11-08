import { Link } from'react-router-dom';
import './menu.css';
import {AiFillHome} from 'react-icons/ai';
import {MdDirectionsBike} from 'react-icons/md';
import {BiSolidGroup} from 'react-icons/bi';

export default function Menu(){

    return(
    <nav className='menu'>
            <Link to='/'><AiFillHome /></Link>
            <Link to='/vistoria'><MdDirectionsBike /></Link>
            <Link to='/integrantes'><BiSolidGroup /></Link>
        </nav>
    )
}