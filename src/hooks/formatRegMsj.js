export function formatMsj(inputs){

  const msj = `Hola!+Soy+${inputs.name}+llegue+con+mi+${inputs.vehicle}+de+${inputs.size}+Mts+en+el+campground.`
  const phonePan = "50762993540"
  const phone = "50767800065"
  const url = `https://api.whatsapp.com/send?phone=${phonePan}&text=${msj}`
  return url
}