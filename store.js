import {createStore} from 'redux'
import {rootReducer} from '../reducers/rootReducer';

var defdata={
    products:[
        {"type":"Clothing","id":"1234","name":"shirt","rating":"5","img":"https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_600x600.png?v=1520399372","quantity":"1","likes":0},
        {"type":"Clothing","id":"1235","name":"pant","rating":"4","img":"https://stockx.imgix.net/products/streetwear/Supreme-Warm-Up-Pant-Yellow-Camo.jpg?fit=fill\u0026bg=FFFFFF\u0026w=700\u0026h=500\u0026auto=format,compress\u0026q=90\u0026dpr=2\u0026trim=color\u0026updated_at=1538830123","quantity":"2","likes":0},
        {"type":"Clothing","id":"1236","name":"bow tie","rating":"7","img":"https://www.jcrew.com/s7-img-facade/K4787_BK0001","quantity":"10","likes":0}],
    users:[]
};

export var store=createStore(rootReducer,defdata);