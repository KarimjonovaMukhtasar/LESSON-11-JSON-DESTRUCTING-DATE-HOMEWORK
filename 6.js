/*
5.
Bir funksiya yarating, bu funksiya matnlar ro'yxatini qabul qilib, faqatgina ichida raqamlar bo'lgan matnlarni saqlagan yangi ro'yxatni qaytaradi. Agar raqamlar bo'lgan matnlar bo'lmasa, bo'sh ro'yxat qaytariladi. Misol uchun:
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) ➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) ➞ ["test1"]
*/
function numInStr(arr){
    let res = []
    for(let key of arr){
        if(/[a-z]/.test(key) && /[0-9]/.test(key)){
                res.push(key)
        }
    }
    return res
}
console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["this is a test", "test1"]))