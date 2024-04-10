//Создайте класс Order с методами для добавления товаров и вычисления общей стоимости. Используйте полиморфизм для разных типов заказов (например, онлайн и офлайн).

class Order{
    constructor(){
        this.products = [];
    }
    addProduct(product){
        this.products.push(product)
    }
    calculateTotal(){
        return this.products.reduce((total,item) => total + item.price,0);
    }
}

class onlineOrder extends Order{
    constructor(){
        super();
        this.deliveryPrice = 150;
    }
    calculateTotal(){
        const total = super.calculateTotal();
        return total + this.deliveryPrice;
    }
}

class offlienOrder extends Order{
    constructor(){
        super();
        this.pickUpDiscount = 50;
    }
    calculateTotal(){
        const total = super.calculateTotal();
        return total - this.pickUpDiscount;
    }
}

const onlineOrders = new onlineOrder();
onlineOrders.addProduct({name: "Кеды", price:12000});
onlineOrders.addProduct({name: "Кеды", price:12300});
onlineOrders.addProduct({name: "Кеды", price:12600});
console.log(onlineOrders.calculateTotal());
