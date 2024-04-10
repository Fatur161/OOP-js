//Система управления студентами: Разработайте класс StudentManager, который будет содержать коллекцию студентов (Student классов) и методы для добавления, удаления, и поиска студентов по имени.

class Student{
    constructor(name, surname, tel){
        this.name = name;
        this.surname = surname;
        this.tel = tel;
    }
    getName(){
        return this.name;
    }
    getSurName(){
        return this.surname;
    }
    getTel(){
        return this.tel;
    }
}

class StudentManager{
    constructor(){
        this.students = [];
    }
    addStudent(student){
        if(student instanceof Student){
            this.students.push(student);
        }else{
            console.log("Error");
        }
    }
    removeStudentByName(name){
        this.students = this.students.filter(student => this.students.name !== name);
    }
    findStudentByName(name){
        return this.students.find(student => student.name === name);
    }
    showAllStudents(){
        this.students.forEach(student => console.log(student));
    }
}

const stud1 = new Student("Иван", "Зайцев", 88008889192);
const stud2 = new Student("Григорий", "Васильев", 89002889192);
const stud3 = new Student("Елизавета", "Дуоновна", 84004889192);
const studMan = new StudentManager();
studMan.addStudent(stud1);
studMan.addStudent(stud2);
studMan.addStudent(stud3);
console.log(studMan.findStudentByName("Григорий"));
studMan.removeStudentByName("Григорий");
studMan.showAllStudents();
