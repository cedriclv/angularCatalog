export class Product {
    public id : number;
    public name : string;
    public price : number;
    public discount : number;

    constructor(id: number, name : string, price: number, discount: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}