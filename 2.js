/*
1.
To-Do List Loyihasi Tavsifi
Obyekt yondashuvi: Biz to-do ro'yxatini boshqarish uchun obyekt yaratamiz. Bu obyekt ro'yxat elementlarini saqlash, yangi vazifa qo'shish, vazifa o'chirish va ro'yxatni konsol orqali ko'rish kabi metodlarga ega bo'lsin.
Metodlar:
addTask(task): Yangi vazifani ro'yxatga qo'shadi.
removeTask(id): Berilgan indeksdagi vazifani o'chiradi.
printTasks(): Barcha vazifalarni konsolga chiqaradi
*/
let toDoList = {
    tasks: [],
    addTask: function (task){
        if(!this.tasks.includes(task)){
            this.tasks.push(task)
            console.log("The task has been added successfully!")
        }
        else{
            console.log("This task is already in tasklist")
        }
        return this.tasks
    },
    removeTask: function (id){
            if(id <= this.tasks.length - 1){
                this.tasks.splice(id,1)
                console.log(`The ${id+1}-indexed task has been removed from the tasklist`)
            }
            else{
                console.log(`Not Found such an indexed task`)
            }
            return this.tasks
        },
    printTasks: function (){
        console.log(`Here you can see all the tasks existing your to-do-List`)
        if(this.tasks.length === 0){
            console.log(`There are not any tasks yet in the to-do-list`)
        }
        else{
        for(let key of this.tasks){
            console.log(`Task:  ${key}`)
        }
    }
    }
    }
toDoList.addTask("SLEEPING")
toDoList.addTask("Running in the morning")
toDoList.addTask('JavaScript basics lessons')
toDoList.addTask('Python Revision')
toDoList.removeTask(0)
toDoList.printTasks()
toDoList.addTask("Python Revision")
toDoList.removeTask(8)
