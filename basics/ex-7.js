//Создайте класс Car с методами для запуска и остановки двигателя. Используйте инкапсуляцию для защиты внутренних данных и полиморфизм для разных типов автомобилей.

class Car{
    constructor(){
        this.engine = false;
    }
    startEngine(){
        this.engine = true;
        console.log("Двигатель запущен");
    }
    stopEngine(){
        this.engine = false;
        console.log("Двигатель остановлен");
    }
    checkEngine(){
        return this.engine;
    }
}

class Audi extends Car{
    startEngine(){
        super.startEngine();
        console.log("Двигатель Audi запущен");
    }
    stopEngine(){
        super().stopEngine();
        console.log("Двигатель Audi остановлен");
    }
}
