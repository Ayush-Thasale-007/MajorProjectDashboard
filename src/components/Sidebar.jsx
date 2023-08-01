import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Sidebar() {
    // let navigate = useNavigate();
    return (
        <div className='sidebar'>
            <div className="dashboard">
                    <li className='link'><NavLink to='/'>Dashboard</NavLink></li>
                    {/* <li className='linkkkk' onClick={()=>{navigate("/")}}>Dashboard</li> */}
                    <li className='link'><NavLink to='/management'>Department Management</NavLink></li>
                    <li className='link'><NavLink to='/managebot'>Manage Bot</NavLink></li>
                    <li className='link'><NavLink to='/help'>Help & Queries management</NavLink></li>
                    <li className='link'><NavLink to='/query'>Query Type Management</NavLink></li>

            </div>
        </div>
    )
}

export default Sidebar