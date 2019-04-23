import React from 'react';
import ProductComponent from './product.component'

export class ShoppingCart extends React.Component{
    render(){
        // console.log(allProducts);
        let productToBeDisplayed = this.props.allproducts.map(val => <ProductComponent cardDetails = {val} key={val.id} {...this.props}/>);
        return <div className="container">
                    <div className="row mt-4">
                        {productToBeDisplayed}                
                    </div>
            </div>
                          
    }
}