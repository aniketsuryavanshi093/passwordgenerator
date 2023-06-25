import './App.css'
import PasswordGenerator from './Components/PasswordGenerator/PasswordGenerator'

const  App =  (): JSX.Element =>  {
  return (
    <div className='container'>
      <h3 className='text-center w-100'> Welcome To Password Generator. </h3>
      <p className='text-center my-3'>Please Select conditions to generate Password string. </p>
      <PasswordGenerator/>
    </div>
  )
}

export default App
