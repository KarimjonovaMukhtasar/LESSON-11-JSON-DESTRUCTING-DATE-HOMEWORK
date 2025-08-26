/*
2.
Vazifa 1: Kirim va Chiqimlar Uchun Obyekt Strukturasini Yaratish
Maqsad: Xo'jalik kirim va chiqimlarini saqlash uchun obyekt yaratish.
Ishlar:
Expenses nomli obyekt yaratish. Bu obyektning ichida water, gas, electricity kabi xususiyatlar bo'ladi, ularning boshlang'ich qiymatlari 0 ga teng.
Har bir xarajat turiga oid metodlar qo'shiladi, bu metodlar orqali foydalanuvchi o'z xarajatlarini kirita olishi va o'chira olishi mumkin.
Misol:
javascript ``
let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {

    },
    removeExpense: function(type, amount) {

    },
    printMonthlyReport = function() {

	};
};
Vazifa 2: Oylik Hisobotlarni Ko'rsatish
Maqsad: Har bir xarajat turining oylik umumiy summasini hisoblaydi va konsolga chiqaradi.
Ishlar:
Expenses obyektiga printMonthlyReport metodini qo'shish.
Misol:
javascript

    console.log(`Suv uchun oylik xarajat: $${this.water}`);
    console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
    console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`);
*/
let Expenses ={
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {
        if((Expenses.hasOwnProperty(type))){
            Expenses[type] = Expenses[type] += amount
            console.log(`${type} expenses has been updated to ${amount}`)
        }
        else{
            if(confirm(`You entered a wrong type of expense, do you want to add a new expense type?`)){
                Expenses[type] = amount
                console.log(`${type} expense type has been added to your Expenses`)
            }
        }
    },
    removeExpense: function(type, amount) {
        if((Expenses.hasOwnProperty(type))){
            if(this[type] === 0){
                if(confirm(`${type} expense has been paid fully, do you want to remove it???`)){
                    delete Expenses[type]
                }
            }
            else{
                this[type] = this[type] - amount
                console.log(`This ${type} expense has been decreased to ${amount}`)
            }
            
        }
    },
    printMonthlyReport: function() {
        console.log(`Suv uchun oylik xarajat: $${this.water}`);
        console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
        console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`)
	}
}
Expenses.addExpense("water",500_000)
Expenses.addExpense("electricity", 1_000_000)
Expenses.addExpense("gas", 300_000)
Expenses.removeExpense("electricity",50_000)
Expenses.printMonthlyReport()
