import OrderController from "./components/OrderController.js";

// Private


//Public
class App {
    constructor() {
        this.controllers = {
            orderController: new OrderController()
        }
    }
}


window['app'] = new App();