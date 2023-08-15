import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/',{replace: true})
  }
  
  return (
    <div className='container mt-5'>

      <button
        className="btn btn-primary"
        onClick={onLogout}
      >Logout</button>
      
    </div>
  )
}

export default LoginPage