export function checkFormLaundry(inputs){
  let error1 = ""
  let error2 = ""
  let error5 = false

  if(inputs.name.length == 0){
    error1 = "1"
  } else if(inputs.name.length < 3){
    error1 = "2"
  }
  if(inputs.vehicle.length == 0){
    error2 = "1"
  } else if(inputs.vehicle.length < 3){
    error2 = "2"
  }
  if(inputs.timesUsed.length == 0){
    error5 = true
  }

  const errorObj = {error1, error2, error5}
  if(errorObj.error1 == "" && errorObj.error2 == "" && errorObj.error5 == false){
    return false
  }
  return errorObj
}

export function checkFormFridge(inputs){

  let error1 = ""
  let error2 = ""
  let error3 = false
  let error5 = ""

  if(inputs.name.length == 0){
    error1 = "1"
  } else if(inputs.name.length < 3){
    error1 = "2"
  }
  if(inputs.vehicle.length == 0){
    error2 = "1"
  } else if(inputs.vehicle.length < 3){
    error2 = "2"
  }
  if(inputs.waters.length == 0 && inputs.beers.length == 0 && inputs.otro.length == 0 && inputs.sodas.length == 0){
    error3 = true
  }
  if(inputs.otro.length > 0 && inputs.numOther == 0){
    error5 = true
  }

  const errorObj = {error1, error2, error3, error5}
  if(errorObj.error1 == "" && errorObj.error2 == "" && errorObj.error3 == false && errorObj.error5 == ""){
    return false
  }

  return errorObj
}

export function checkFormReg(inputs){

  let error1 = ""
  let error2 = ""
  let error4 = false

  if(inputs.name.length == 0){
    error1 = "1"
  } else if(inputs.name.length < 3){
    error1 = "2"
  }

  if(inputs.vehicle.length == 0){
    error2 = "1"
  } else if(inputs.vehicle.length < 3){
    error2 = "2"
  }
  if(inputs.size.length == 0){
    error4 = true
  }

  const errorObj = {error1, error2, error4}
  if(errorObj.error1 == "" && errorObj.error2 == "" && errorObj.error4 == false){
    return false
  }
  return errorObj
}

export function checkFormReview(inputs){

  let error1 = ""
  let error2 = ""
  let error4 = false
  let error5 = false

  if(inputs.name.length == 0){
    error1 = "1"
  } else if(inputs.name.length < 3){
    error1 = "2"
  }

  if(inputs.vehicle.length == 0){
    error2 = "1"
  } else if(inputs.vehicle.length < 3){
    error2 = "2"
  }

  if(inputs.feedback.length == 0){
    error4 = true
  } else if(inputs.feedback.length < 4){
    error5 = true
  }

  const errorObj = {error1, error2, error4, error5}
  if(errorObj.error1 == "" && errorObj.error2 == "" && errorObj.error4 == false && errorObj.error5 == false){
    return false
  }
  return errorObj
}