/*
6.BONUS
Quyida keltirilgan JavaScript dasturida CRUD ("Create, Read, Update, Delete") amallarini bajaruvchi ma'lumotlar bazasini 
simulyatsiya qilish uchun murakkabroq vazifa taqdim etilgan.

Create (Yaratish) funksiyasi:
Yangi foydalanuvchi ma'lumotlarini qabul qilib, uning nomi bilan studentsList obyektiga qo'shing.
Agar bu nom allaqachon mavjud bo'lsa, xatolik xabarini qaytaring.
Aks holda, yangi foydalanuvchi qo'shilgandan so'ng, butun ro'yxatni qaytaring.
Read (O'qish) funksiyasi:
Foydalanuvchi nomi berilganda, u nom bilan studentsListda qidiruv o'tkazing.
Agar foydalanuvchi topilsa, uning ma'lumotlarini qaytaring.
Topilmasa, "Foydalanuvchi topilmadi" kabi xabar qaytaring.
Update (Yangilash) funksiyasi:
Foydalanuvchi nomi va yangilash kerak bo'lgan ma'lumotlar obyektini qabul qiladi.
Agar foydalanuvchi mavjud bo'lsa, uning ma'lumotlarini yangilang va yangilangan ma'lumotlarni qaytaring.
Foydalanuvchi topilmasa, xatolik xabarini qaytaring.
Delete (O'chirish) funksiyasi:
Berilgan nom bo'yicha foydalanuvchini studentsListdan o'chiring.
O'chirish muvaffaqiyatli bo'lsa, "Foydalanuvchi o'chirildi" kabi xabar qaytaring.
Foydalanuvchi topilmasa, "Foydalanuvchi topilmadi" kabi xabar qaytaring.
==MAPdan foydalangan holatda ishlang ===
*/
const database = {
  StudentList: {
    'Mukhtasar': {
      name: "Mukhtasar",
      age: 22,
      id: 123,
      payment: false
    }
  },
  create(user) {
    //Yangi foydalanuvchi ma'lumotlarini qabul qilib, uning nomi bilan studentsList obyektiga qo'shing.
    // Agar bu nom allaqachon mavjud bo'lsa, xatolik xabarini qaytaring.
    if(database.StudentList.hasOwnProperty(user)){
        return `Bu nomdagi foydalanuvchi mavjud, yangi nom kiriting`
    }
    else{
    database.StudentList[user.name] = user
    return database.StudentList
  }},
  read(name, StudentList) {
    //Read (O'qish) funksiyasi:
    //Foydalanuvchi nomi berilganda, u nom bilan studentsListda qidiruv o'tkazing.
    //Agar foydalanuvchi topilsa, uning ma'lumotlarini qaytaring.
    //Topilmasa, "Foydalanuvchi topilmadi" kabi xabar qaytaring.
    for (let key in database.StudentList){
      if(database.StudentList[key].name === name){
        console.log(database.StudentList[key])
      }
      else{
        console.log("Foydalanuvchi topilmadi")
      }
    }
  },
  update(name, user) {
    // studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
    for (let key in database.StudentList){
      if(database.StudentList[key].name === name){
        database.StudentList[key] = user
        console.log(database.StudentList[key])
      }
    }
    console.log("BUNDAY NOMLI O'QUVCHI BAZADA MAVJUD EMAS")

  },
  deleteUser(name) {
    // studentsList dan faqat bitta userni o'chiring! qaytarish ixtihoriy message qaytarish ixtiyoriy
    // delete this.StudentList["xamidullo"]
    for (let user in database.StudentList){
      if (database.StudentList[user].name === name){
          delete database.StudentList[name]
          console.log(`${name} ismli o'quvchi bazadan o'chirildi`)
      }
      else{
         console.log(`${name} ismli o'quvchi bazada mavjud emas`)
      }
      
    }   
  }}
database.create({
  name: "xamidullo",
  age: 33,
  id: 123,
  tolov: false 
})
database.update("xamidullo", {
  name: "azizbek",
  age: 21,
  tolov: true
})
database.create({
  name: "Hayotkhon",
  age: 25,
  id: 124,
  tolov: false 
})
database.deleteUser("xamidullo")
database.deleteUser("MK")

console.log(database.StudentList)