import React, {useEffect, useState} from 'react'
import { checkFormReg } from '../hooks/checkForms'
import { formatMsj } from '../hooks/formatRegMsj'
import Header from '../components/Header'

function Registration() {

  const [url, setUrl] = useState("")
  const [error, setError] = useState(true)
  const [inputs, setInputs] = useState({})


  function handleSubmit(event){
    event.preventDefault()
    const inputs = {
      "name" : event.target.fullname.value,
      "vehicle" : event.target.vehicle.value,
      "size" : event.target.size.value
    }
    setError(checkFormReg(inputs))
    setInputs(inputs)
  }

  useEffect(()=>{
    !error ? setUrl(formatMsj(inputs)) : null
  },[error])

  return (
    <>
      <div className="app-body">
      <Header prop = {"Registration"}/>
      <h3 className='msj-to-action'>Please register yourself...</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <label>Name<input type="text" name='fullname'/></label>
        {error.error1 === "1" ? <p>.Name box is mandatory</p> : null}
        {error.error1 === "2" ? <p>.Name must be at least 3 characters long</p> : null}
        <label>Vehicle<input type="text" name='vehicle'/></label>
        {error.error2 === "1" ? <p>.Vehicle box is mandatory</p> : null}
        {error.error2 === "2" ? <p>.Vehicle must be at least 3 characters long</p> : null}
        <label>Lenght (MTS)<input type="number" name='size'/></label>
        {error.error4 ? <p>.Size box is mandatory</p> : null}
        {error || url == ""? <button>Prepare message</button> : null}
        {url != "" && !error ? <a href={url}>Send</a> : null}
      </form>
      </div>
    </>
  )
}

export default Registration