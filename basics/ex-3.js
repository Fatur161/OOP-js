//Нужно создать класс "Банк", который имеет приватные свойства "баланс" и методы "пополнить баланс" и "снять средства". Обеспечьте доступ к изменению баланса только через эти методы и проверку на достаточность средств при снятии.

class Bank{
    #balance = 0;
    deposit(money){
        this.#balance += money;
    }
    getMoney(money){
        this.#balance -= money;
    }
    getBalance(){
        return this.#balance;
    }
}

const Sborbank = new Bank();
console.log(Sborbank.deposit(450));
console.log(Sborbank.getBalance());
console.log(Sborbank.getMoney(100));
console.log(Sborbank.getBalance());
