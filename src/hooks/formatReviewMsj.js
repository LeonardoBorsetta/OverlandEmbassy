export function formatMsj(inputs){

  const msj = `Hola!+Soy+${inputs.name}+mi+vehiculo+es+${inputs.vehicle}.Reseña: ${inputs.feedback}`
  const phonePan = "50762993540"
  console.log(msj)
  const url = `https://api.whatsapp.com/send?phone=${phonePan}&text=${msj}`
  return url
}