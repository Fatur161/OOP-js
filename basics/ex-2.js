//Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
    }
    getSalary() {
      return this.rate * this.days;
    }
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
  }

class Boss extends Worker{
    constructor(name, surname, rate, days, workers){
        super(name, surname, rate, days)
        this.workers = workers;
    }
    getSalary(){
        return this.workers * this.rate * this.days;
    }
}

const bossFirst = new Boss("Иван","Иванов",10,31,3);

console.log(bossFirst.getSalary());
