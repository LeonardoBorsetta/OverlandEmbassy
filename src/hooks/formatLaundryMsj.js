export function formatMsj(inputs){
  const cost = 2.5
  const msj = `Hola!+Soy+${inputs.name}+y+tengo+mi+${inputs.vehicle}+en+el+campground.+Use+la+lavadora+${inputs.timesUsed}+veces%2C+les+debo+$usd+${parseInt(inputs.timesUsed)*cost}.`
  const phonePan = "50762993540"
  const phone = "5076700065"
  const url = `https://api.whatsapp.com/send?phone=${phonePan}&text=${msj}`
  return url
}