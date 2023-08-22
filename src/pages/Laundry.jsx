import React, {useState, useEffect} from 'react'
import { checkFormLaundry } from '../hooks/checkForms'
import { formatMsj } from '../hooks/formatLaundryMsj'
import Header from '../components/Header'

function Laundry() {

  const [url, setUrl] = useState("")
  const [error, setError] = useState(true)
  const [inputs, setInputs] = useState({})


  function handleSubmit(event){
    event.preventDefault()
    const inputs = {
      "name" : event.target.fullname.value,
      "vehicle" : event.target.vehicle.value,
      "timesUsed" : event.target.times.value
    }
    setError(checkFormLaundry(inputs))
    setInputs(inputs)
  }

  useEffect(()=>{
    !error ? setUrl(formatMsj(inputs)) : null
  },[error])

  return (
    <>
      <div className="app-body">
      <Header prop = {"Laundry"}/>
      <h3 className='msj-to-action'>Please fill the laundry form...</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <label>Name<input type="text" name='fullname'/></label>
        {error.error1 === "1" ? <p>.Name box is mandatory</p> : null}
        {error.error1 === "2" ? <p>.Name must be at least 3 characters long</p> : null}
        <label>Vehicle<input type="text" name='vehicle'/></label>
        {error.error2 === "1" ? <p>.Vehicle box is mandatory</p> : null}
        {error.error2 === "2" ? <p>.Vehicle must be at least 3 characters long</p> : null}
        <label>Times used<input type="number" name='times'/></label>
        {error.error5 ? <p>.Times box is mandatory</p> : <p className='placeholder'>placeholder</p>}
        {error || url == ""? <button>Prepare message</button> : null}
        {url === "loading" && !error ? <h7>Loading message</h7> : null}
        {url != "" && !error ? <a href={url}>Send</a> : null}
      </form>
      </div>
    </>
  )
}

export default Laundry