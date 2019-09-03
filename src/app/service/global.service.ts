import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public current_products: any = [];

    public category: any = [
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
        {
            'name': "Almond Pudding",
            'img': "t2.jpg"
        },
        {
            'name': "Caramel Pudding",
            'img': "t3.jpg"
        },
        {
            'name': "Ice Cream",
            'img': "t4.jpg"
        },
        {
            'name': "Taro",
            'img': "t5.jpg"
        },
        {
            'name': "Q Moci",
            'img': "t6.jpg"
        },
        {
            'name': "Taro Paste",
            'img': "t7.jpg"
        },
        {
            'name': "Mini Taro Balls",
            'img': "t1.jpg"
        },
        {
            'name': "Sesame Rice Balls",
            'img': "t2.jpg"
        },
        {
            'name': "Sweet Potato",
            'img': "t3.jpg"
        },
        {
            'name': "Taro Balls",
            'img': "t4.jpg"
        },
        {
            'name': "Sweet Potato Taro Balls",
            'img': "t5.jpg"
        },
    ];
    public toppings_secondary: any = [
        {
            'name': "Barley",
            'img': "t1.jpg"
        },
        {
            'name': "Black Sugar Boba",
            'img': "t2.jpg"
        },
        {
            'name': "Boba",
            'img': "t3.jpg"
        },
        {
            'name': "Grass Jelly",
            'img': "t4.jpg"
        },
        {
            'name': "Kidney Beans",
            'img': "t5.jpg"
        },
        {
            'name': "Lychee Jelly",
            'img': "t6.jpg"
        },
        {
            'name': "Mellon Jelly",
            'img': "t7.jpg"
        },
        {
            'name': "Mung Beans",
            'img': "t1.jpg"
        },
        {
            'name': "Peanuts",
            'img': "t2.jpg"
        },
        {
            'name': "Read Beans",
            'img': "t3.jpg"
        },
        {
            'name': "Rice Balls",
            'img': "t4.jpg"
        },
        {
            'name': "Jelly Noodle",
            'img': "t5.jpg"
        }
    ];
    constructor() { }
}
