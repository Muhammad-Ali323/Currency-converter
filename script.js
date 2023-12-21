let amount= document.querySelector('.first-num')
let converted_amount= document.querySelector('.sec-num')
let fromCurrency= document.querySelector('.amount')
let toCurrency= document.querySelector('.converted-amount')
let result= document.querySelector('.result')
let countries=[{code: 'INR', name:"Indian Rupee"},
   {code: 'USD', name:"United States Dollar"},
   {code: 'AED', name:"UNited Arab Dinar"},
   {code: 'NZD', name:"New Zealand Dollar"},
   {code: 'GBP', name:"United Kingdom Pound"},
   {code: 'AUD', name:"Philipine Peso"},
   {code: 'SGD', name:"Singapore Riyal"},
   {code: 'QAR', name:"Qatari Riyal"},
   {code: 'LKR', name:"Sri Lankan Rupee"},
   {code: 'CAD', name:"Canadian Dollar"},
   {code: 'INR', name:"Indian Rupee"},
   {code: 'PKR', name:"Pakistani Rupee"},
   {code: 'SAR', name:"Saudi Arabia Riyal"},
   {code: 'CNY', name:"China"},
   {code: 'EUR', name:"Germany Euro"},
   {code: 'TRY', name:"Turkish Lira"},
]
countries.forEach((country)=>{
    option1=document.createElement('option')
    option2=document.createElement('option')
    option1.value=option2.value= country.code
    option1.textContent=option2.textContent=`${country.code} (${country.name})`
    fromCurrency.appendChild(option1)
    toCurrency.appendChild(option2)
    fromCurrency.value='USD'
    toCurrency.value='PKR'
})
async function getExchangeRate(){
    let response= await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`)
    let data= await response.json()
    let exchangeRate= data.rates[toCurrency.value]
    let convertedAmount=(amount.value*exchangeRate)
    converted_amount.value=convertedAmount
    result.textContent= `${amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`
}
getExchangeRate()
amount.addEventListener('input', ()=>{
    getExchangeRate()
})
fromCurrency.addEventListener('input', ()=>{
    getExchangeRate()
})
toCurrency.addEventListener('input', ()=>{
    getExchangeRate()
})
