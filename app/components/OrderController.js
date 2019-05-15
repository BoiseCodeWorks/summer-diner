import OrderService from "./OrderService.js";

//PRIVATE

let _orderService = new OrderService();

function drawOrders() {
    let orders = _orderService.Orders
    let template = ''
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        template += `
    <li>${order.description}: Table: ${order.table}<button class="btn btn-danger" onclick="app.controllers.orderController.deleteOrder(${order.id})">Delete</button></li>
        `
    }
    document.getElementById('orders').innerHTML = template
}


//PUBLIC
export default class OrderController {
    constructor() {
        drawOrders()
    }
    //very first thing to do with a form submission event is to preventDefault
    addOrder(event) {
        event.preventDefault();
        let data = event.target
        let newOrder = {
            description: data.description.value,
            table: data.table.value
        }
        _orderService.addOrder(newOrder)
        data.reset()  // clears form
        drawOrders()
    }

    deleteOrder(id) {
        _orderService.deleteOrder(id)
        drawOrders()
    }
}