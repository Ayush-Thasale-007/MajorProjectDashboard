import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function Sidebar() {
  // let navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="dashboard">
        <li className="link">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        {/* <li className='linkkkk' onClick={()=>{navigate("/")}}>Dashboard</li> */}
        <li className="link">
          <NavLink to="/management">My Documents</NavLink>
        </li>
        <li className="link">
          <NavLink to="/managebot">Give Access</NavLink>
        </li>
        <li className="link">
          <NavLink to="/help">Free Access</NavLink>
        </li>
        <li className="link">
          <NavLink to="/query">Change Institute</NavLink>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
