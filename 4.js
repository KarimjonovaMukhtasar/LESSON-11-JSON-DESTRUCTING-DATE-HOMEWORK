/*
3.
Harflar va Raqamlarni Hisoblash
Biror matn qabul qilib, unda nechta harf va raqam borligini hisoblaydigan funksiya yozing. Natijani obyekt sifatida qaytaring.
Misol uchun:
countAll("Hello World") ➞ { "HARFLAR":  10, "RAQAMLAR": 0 }
countAll("H3ll0 Wor1d") ➞ { "HARFLAR":  7, "RAQAMLAR": 3 }
countAll("149990") ➞ { "HARFLAR": 0, "RAQAMLAR": 6 }
*/
function countAll(str){
    let letter = 0
    let digit = 0
  for(let key of str){
    if(/[a-zA-Z]/.test(key)){
        letter += 1
    }
    else if(/[0-9]/.test(key)){
        digit += 1
    }
  }
  res = {Harflar: letter, Raqamlar: digit}
  return res
}
let input = prompt("Enter the sentence")
console.log(countAll(input))