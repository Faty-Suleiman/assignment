


function divisibleBy4(leapYear){
    if(leapYear % 4 === 0){
        return true
    }else{
        return false

    }
}

console.log(divisibleBy4(2000))
console.log(divisibleBy4(1998)) 
console.log(divisibleBy4(2012))

            
function shapes(length, breadth){
  let square = (length === breadth)
let rectangle = length !== breadth

if (length === breadth){
  return "this is square"

  }else{
  return "this is rectangle"
}
  }
console.log(shapes(5,9))
console.log(shapes(4,4))
console.log(shapes(12,11))
console.log(shapes(6,6))



function profitableGamble(prob, prize, pay){
  if(prob*prize>pay){
    return true
  }else{
  return false}
}
console.log(profitableGamble(0.2,50,9))
console.log(profitableGamble(0.9,1,2))
console.log(profitableGamble(0.8,5,4))

function twoMakesTen(a, b){
  if((a, b === 10) || (a + b === 10)) {
  return true
  
}else{
  return false
  }
} 
console.log(twoMakesTen(9,10))
console.log(twoMakesTen(9,9))
console.log(twoMakesTen(1,9))

function discount(costOfPurchase){
if (costOfPurchase > 10000){
  let discount = ((10/100) * costOfPurchase)
  let newCostOfPurchase = costOfPurchase - discount
return 'thanks for shopping with us'
}else{
  return 'you are not eligible to our discount'
  }
}

console.log(discount(8000))  
console.log(discount(100000))
console.log(discount(2000000))

function compareStrings(a, b){
  if (a.length === b.length){
  return true
}else{
  return false
 }
}
console.log(compareStrings("AB", "CD"))
console.log(compareStrings("ABC", "DE"))
console.log(compareStrings("KLM", "TN"))

function acceptIntoMovies(age, supervised){
  if ((age >= 15) || (supervised)){
    return true
  }else{
    return false
  }
}
console.log(acceptIntoMovies(14, true))
console.log(acceptIntoMovies(14, false))
console.log(acceptIntoMovies(16, false))

function stringLength(string){
let newString = string.length
  let even = string.length % 2
  if(even === 0){
  return true
  }else{
    return false
  } 
}
console.log(stringLength("apple"))
console.log(stringLength("pears"))
console.log(stringLength("cherry"))

function lastChar(string){
  if(string === string.endsWith("n") || string.endsWith("N") )

  return true
}else{
  return false
  }

console.log(lastChar("Aiden"))
console.log(lastChar("Piet"))
console.log(lastChar("Bert"))

function isPlural(word){
  let lastChar = word[word.length - 1]
  if(lastChar === "s"){
  
    return true
 }else{
    return false
  }
  
}
console.log(isPlural("changes"))
console.log(isPlural("music"))
console.log(isPlural("dudes"))
console.log(isPlural("change"))


function fifth(fifthArg){
  if(argument = typeof fifthArg){
  
    return argument
  }else{
    return "not enough argument"
  }
}
console.log(fifth(1,2,3,4,5))
console.log(fifth("a", 2, 3, true, "five"))
console.log(fifth(1,2,3,4,5))

function reverse(x){
  
  let newString = x.slice("").reverse().join("");
  
    return newString
  
}
console.log(reverse("Hello World"))
console.log(reverse("The quick brown fox"))
console.log(reverse("Edabit is really helpfull"))

function journeyDistance(cost){
  
  let distance =  ((cost - 3)/2)+1
  return distance
  }
    
  console.log(journeyDistance(3))
  console.log(journeyDistance(9))
  console.log(journeyDistance(5))

function days( month, year){
  let noOfDays = new Date (year, month, 0).getDate()
  
  
   return noOfDays
  
} 
  
console.log(days(2, 2012))
console.log(days(12, 1996))
console.log(days(4, 1987))


function newWord(word){
  let result = word.slice(1)
  
    return result
  }

console.log(newWord("apple"))
console.log(newWord("hello"))
console.log(newWord("cherry"))

function concChar(string){
  let firstStr = string.slice(0, 1)
  let lastStr = string.slice(-1)
  let result = firstStr + lastStr
  return result
    
  }
  

console.log(concChar("ganesh"))
console.log(concChar("zulfah"))
console.log(concChar("javascript"))

function wumbo(string){
  let newString = string.replaceAll("M", "W")
  
  return newString
}
console.log(wumbo("I LOVE MAKING CHALLENGES"))
console.log(wumbo("MEET ME IN WARSAW"))
console.log(wumbo("WUMBOLOGY"))


function reverse(string){
  let newWord = string.split("").reverse().join("")
  return newWord
}
console.log(reverse("Hello World"))
console.log(reverse("The quick brown fox"))
console.log(reverse("Edabit is really helpful"))

function endMatches(a, b){
  let newStr = a.endsWith(b)
  if(a === newStr){
    
  }
  return newStr
  
}
console.log(endMatches("abc", "bc"))
console.log(endMatches("abc", "d"))
console.log(endMatches("samurai", "zi"))
console.log(endMatches("convention", "tio"))
console.log(endMatches("feminine", "nine"))

function middleChar(string){
  var position;
  var length;
  if(string.length % 2 == 1){
    position = string.length / 2;
    length = 1
  }else{
    position = string.length / 2 - 1;
    length = 2;
  }return string.substring(position, position + length)
}

console.log(middleChar("test"))
console.log(middleChar("testing"))
console.log(middleChar("middle"))
console.log(middleChar("A"))

function defaultMood(mood){
  if(mood !== null){

  }
  let result = "Today, I am feeling" + mood
  return result
}
else{
 return "Today, I am feeling neutral"
}


console.log(defaultMood("Happy"))
console.log(defaultMood("sad"))
console.log(defaultMood())


function intComp(a, b){
  let newS = a.localeCompare(b)
  if(newS === a, b){
  return true
}else{
    return false
}
}
console.log(intComp("hello", "hELLo"))
console.log(intComp("motive", "emotive"))
console.log(intComp("venom", "VENOM"))
console.log(intComp("mask", "mAskinG"))

function IDS(first, last){
  let firstName = first.slice(0, 1).toLowerCase()
  let lastName = last.slice(0, 3)
  let nameID = firstName + lastName
  return nameID
}
console.log(IDS("Mary", "Lamb"))
console.log(IDS("John", "Smith"))
console.log(IDS("Mary", "Smith"))

function google(string){
  let newS = string.trimEnd().replaceAll("+")
  return newS
}

console.log(google("Enjoy        "))
console.log(google("Zulfha       "))
console.log(google("Email      "))

function reverse(string){
  let newS = string.split(string).reverse().join("").toUpperCase
  if(newS === string){
  return newS
  } 
}
console.log(reverse("abc"))


function repeatData(string, number){
  let result = string.repeat(number)
  return result
}
console.log(repeatData("Hello", 4))
console.log(repeatData("Vote wisely", 2))
console.log(repeatData("Thank you", 3))

 function multiple(integer){
  if(integer % 3 == 0){
    return "Hello"
    
 
  }else if(integer % 5 == 0){
    return "World"
 }else if(integer % 3 && 5 == 0){
    return "Hello World"
  }
 }
    
console.log(multiple(3))
console.log(multiple(5))
console.log(multiple(15))

function validNum(x){
  
  if(isNaN(x)){
    return "Variable is not a number";
  }else{
  return "Variable is a number";
}
}
console.log(validNum("19"))
console.log(validNum("xyz"))
console.log(validNum("21F"))

function validEmail(email){
  var emailFormat = /^W+([.-]?W+*@w+([.-]?W+*(.W{2,3}]+$/;
  
  if(email.value.match(emailFormat)){
    return "valid email address"
  }else{
    return "invalid email address"
  }
}
console.log(validEmail("roshbon@gmail.com"))

function truncate(firstname, lastname){

  if(string.length )
}