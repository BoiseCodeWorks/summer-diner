export default class Order {
    constructor(data) {
        this.id = data.id || Math.floor(Math.random() * 1000000) //temporary hack for random ID
        this.description = data.description
        this.table = data.table
    }

    get template() {
        return `<li>${this.description}<button class="btn btn-danger">Delete</button></li>`
    }
}