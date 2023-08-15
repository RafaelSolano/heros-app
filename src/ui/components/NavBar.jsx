import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/marvel',{replace:true})
    
  }
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
        <Link className='navbar-brand' to='/'>
          Asociaciones
        </Link>

        <div className='navbar-collapse'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/marvel'>
              Marvel
            </NavLink>

            <NavLink className='nav-item nav-link' to='/dc'>
              DC
            </NavLink>
          </div>
        </div>

        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
          <ul className='navbar-nav ml-auto'>
            <NavLink className='nav-item nav-link' to='/login'>
              Login
            </NavLink>
            <div className=' navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
              <span className='nav-item nav-link'>Rafael Solano </span>
              <button
                className='nav-item nav-link btn btn-primary '
                onClick={onLogout}
              >logout</button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
