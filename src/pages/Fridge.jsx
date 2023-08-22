import React, {useEffect, useState} from 'react'
import { checkFormFridge } from '../hooks/checkForms'
import { formatMsj } from '../hooks/formatFridgeMsj'
import Header from '../components/Header'

function Fridge() {

  const [url, setUrl] = useState("")
  const [error, setError] = useState(true)
  const [inputs, setInputs] = useState({})

  function handleSubmit(event){
    event.preventDefault()
    const input = {
      "name" : event.target.fullname.value,
      "vehicle" : event.target.vehicle.value,
      "beers" : event.target.beers.value,
      "sodas" : event.target.sodas.value,
      "waters" : event.target.waters.value,
      "otro" : event.target.other.value,
      "numOther" : event.target.numOther.value
    }
    setError(checkFormFridge(input))
    setInputs(input)
  }

  useEffect(()=>{
    !error ? setUrl(formatMsj(inputs)) : null
  },[error])

  return (
    <>
      <div className="app-body">
      <Header prop = {"Fridge"}/>
      <h3 className='msj-to-action'>Please fill the fridge form...</h3>
      <form action="submit" onSubmit={handleSubmit}>
      <label>Name<input type="text" name='fullname'/></label>
        {error.error1 === "1" ? <p>.Name box is mandatory</p> : null}
        {error.error1 === "2" ? <p>.Name must be at least 3 characters long</p> : null}
        <label>Vehicle<input type="text" name='vehicle'/></label>
        {error.error2 === "1" ? <p>.Vehicle box is mandatory</p> : null}
        {error.error2 === "2" ? <p>.Vehicle must be at least 3 characters long</p> : null}
        <label>Beers?<input type="number" name='beers'/></label>
        <label>Sparkling?<input type="number" name='sodas'/></label>
        <label>Waters?<input type="number" name='waters'/></label>
        <label>
          <div className='other-label'>
            <div>Other items<input type='text' name='other'/></div>
            <div>How many?<input type="number" name="numOther"/></div> 
          </div>
        </label>
        {error.error3 ? <p>.Tell us what did you consume</p> : <p className='placeholder'>placeholder</p>}
        {error.error5 ? <p>.How much box is mandatory</p> : null}
        {error || url == ""? <button>Prepare message</button> : null}
        {url === "loading" && !error ? <h7>Loading message</h7> : null}
        {url != "" && !error ? <a href={url}>Send</a> : null}
      </form>
      </div>
    </>
  )
}

export default Fridge