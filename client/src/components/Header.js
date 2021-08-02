import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Header({userType, userStatus}) {

    return (
        <div className="header">
            <div className="nav-left">
                <NavLink exact to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                    <h2 className="logo">Housework Helper</h2>
                </NavLink>
            </div>
            {userStatus === "login" 
                ? <div className="nav-right">
                    <NavLink to="/account" className="nav-link" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">Account</Button>
                    </NavLink>
                    <NavLink to="/home" className="nav-link" style={{ textDecoration: 'none' }}>
                    {userType === "customer"
                        ? <Button variant="contained" color="primary">Homepage</Button>
                        : <Button variant="contained" color="primary">Dashboard</Button>
                    }
                    </NavLink>
                </div>
                : <div className="nav-right">
                    <NavLink to="/login" className="nav-link" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">Login</Button>
                    </NavLink>
                    <NavLink to="/signup" className="nav-link" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">Sign Up</Button>
                    </NavLink>
                </div>
            }
            
        </div>
    )
}

export default Header;
    