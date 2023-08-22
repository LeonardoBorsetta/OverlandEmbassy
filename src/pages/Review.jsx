import React, {useEffect, useState} from 'react'
import { checkFormReview } from '../hooks/checkForms'
import { formatMsj } from '../hooks/formatReviewMsj'
import Header from '../components/Header'
import {Link} from 'wouter'

function Registration() {

  const [url, setUrl] = useState("")
  const [error, setError] = useState(true)
  const [inputs, setInputs] = useState({})


  function handleSubmit(event){
    event.preventDefault()
    const inputs = {
      "name" : event.target.fullname.value,
      "vehicle" : event.target.vehicle.value,
      "feedback" : event.target.feedback.value,
    }
    setError(checkFormReview(inputs))
    setInputs(inputs)
  }
  
  useEffect(()=>{
    !error ? setUrl(formatMsj(inputs)) : null
  },[error])

  return (
    <>
      <div className="app-body">
      <Header prop = {"Feedback"}/>
      <h3 className='msj-to-action'>Please share your feedback with us...</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <label>Name<input type="text" name='fullname'/></label>
        {error.error1 === "1" ? <p>.Name box is mandatory</p> : null}
        {error.error1 === "2" ? <p>.Name must be at least 3 characters long</p> : null}
        <label>Vehicle<input type="text" name='vehicle'/></label>
        {error.error2 === "1" ? <p>.Vehicle box is mandatory</p> : null}
        {error.error2 === "2" ? <p>.Vehicle must be at least 3 characters long</p> : null}
        <label><h4 className='textarea-label'>Feedback</h4><textarea name='feedback' className="textarea"/></label>
        {error.error4 ? <p>.Feedback box is mandatory</p> : null}
        {error.error5 ? <p>.Feedback box must be 40 caracters or more</p> : null}
        {error || url == ""? <button>Prepare message</button> : null}
        {url != "" && !error ? <a href={url}>Send</a> : null}
      </form>
      </div>
    </>
  )
}

export default Registration