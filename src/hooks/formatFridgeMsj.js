export function formatMsj(inputs){

  console.log(inputs)

  let beerText = ""
  let sodaText = ""
  let waterText = ""
  let otrosText = ""
  let total = 0

  if(inputs.beers > 0){
    const beerCost = 2.5
    beerText = `// ${inputs.beers}+cervezas%2C+tenemos+que+pagar+usd$+${parseInt(inputs.beers)*beerCost}. `
    total = total + parseInt(inputs.beers)*beerCost
  }
  if(inputs.sodas > 0){
    const sodaCost = 1.5
    sodaText = `// ${inputs.sodas}+agua+con+gas%2C+tenemos+que+pagar+usd$+${parseInt(inputs.sodas)*sodaCost}.`
    total = total + parseInt(inputs.sodas)*sodaCost
  }
  if(inputs.waters > 0){
    const waterCost = 0.5
    waterText = `//+${inputs.waters}+aguas%2C+tenemos+que+pagar+usd$+${parseInt(inputs.waters)*waterCost}.`
    total = total + parseInt(inputs.waters)*waterCost
  }
  if(inputs.otro.length > 0 && inputs.numOther > 0){
    otrosText = `// Tambien+tome+${inputs.numOther}+${inputs.otro}`
  }

  const msj = `Hola!+Soy+${inputs.name}+y+tengo+mi+${inputs.vehicle}+en+el+campground.
    Tome+de+la+nevera:+${beerText}${sodaText}${waterText}+Total+:+usd+$+${total}.+${otrosText}`
  const phonePan = "50762993540"
  const phone = "50767800065"
  const url = `https://api.whatsapp.com/send?phone=${phonePan}&text=${msj}`
  return url
}