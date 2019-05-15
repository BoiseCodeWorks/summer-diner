import Order from "../models/Order.js";
// PRIVATE


let _orders = [
    // new Order({ description: 'Burger and Fries' }),
    // new Order({ description: 'Milkshake and a Cheese Sandwich' }),
    // new Order({ description: 'Turkey on Wheat' })
];



//PUBLIC
export default class OrderService {
    get Orders() {
        // let out = []
        // for (let i = 0; i < _orders.length; i++) {
        //     let order = _orders[i];
        //     out.push(new Order(order))
        // }
        // return out
        //this makes a copy of each item in the array to break the refrence
        return _orders.map(order => new Order(order))
    }


    addOrder(rawData) {
        _orders.push(new Order(rawData))
    }

    deleteOrder(id) {
        // let orderIndex = -1
        // for (let i = 0; i < _orders.length; i++) {
        //     let order = _orders[i];
        //     if (order.id == id) {
        //         orderIndex = i
        //         break;
        //     }
        // }
        let orderIndex = _orders.findIndex(o => o.id == id)
        _orders.splice(orderIndex, 1)
    }

}






