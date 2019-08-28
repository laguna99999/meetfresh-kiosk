import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public current_products: any = [];

    public sub_category: any = [
        {
            id: 1,
            name: "Taro Ball"
        },
        {
            id: 2,
            name: "Grass Jelly"
        },
        {
            id: 3,
            name: "Purple Rice Soup"
        },
        {
            id: 4,
            name: "Tofu Pudding"
        }
    ];

    public toppings: any = [
        "Almond Pudding",
        "Caramel Pudding",
        "Ice Cream",
        "Taro",
        "Q Moci",
        "Taro Paste",
        "Mini Taro Balls",
        "Sesame Rice Balls",
        "Sweet Potato",
        "Taro Balls",
        "Sweet Potato Taro Balls",
    ];
    public toppings_secondary: any = [
        "Barley",
        "Black Sugar Boba",
        "Boba",
        "Grass Jelly",
        "Kidney Beans",
        "Lychee Jelly",
        "Mellon Jelly",
        "Mung Beans",
        "Peanuts",
        "Read Beans",
        "Rice Balls",
        "Jelly Noodle"
    ];
    constructor() { }
}
