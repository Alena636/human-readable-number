module.exports = function toReadable (number) {
 
  const a = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let result = ''

  if(number == 0) {
    return 'zero'
  }

  if(number > 0 && number < 20) {
   return  result = a[number]
  }

  if(number >= 20 && number < 100){
     result = b[(number - number % 10) / 10] + ' '+ a[number % 10]
     return result.trim()
  }

  if(number >= 100 && number < 1000){
    if((number % 100) < 20) {
      result = a[(number - number % 100) / 100] + ' ' + 'hundred' + ' ' + a[number % 100]
      return result.trim()
    }
    if(number % 100 >= 20 && number % 100 < 100){
      result = a[(number - number % 100) / 100] + ' ' + 'hundred' + ' ' + b[(number % 100 - number % 10) / 10] + ' ' + a[number % 10]
      return result.trim()
    }
  }
}
