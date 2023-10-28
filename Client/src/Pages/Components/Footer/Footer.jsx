import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FooterLists'>
                <ul className='FooterList'>
                    <Link to="/TermeniiSiConditii"><li className="FooterListItem">Termeni si conditii</li></Link>
                    </ul>
                    <ul className='FooterList'>
                    <Link to="/Confidentialitate"><li className="FooterListItem">Confidentialitate si Cookie-uri</li></Link>
                    </ul>
                    <ul className='FooterList'>
                    <Link to="/DespreBook&Go"><li className="FooterListItem">Despre Book and Go</li></Link>
                    </ul>
                    <ul className='FooterList'>
                    <Link to="/Contact"><li className="FooterListItem">Contact</li></Link>
                    </ul>
            </div>
            <div className='FooterTextCopy'>Copyright © 2023 Book and Go.</div>
        </div>
    )
}

export default Footer