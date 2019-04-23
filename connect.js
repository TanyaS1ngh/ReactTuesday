import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { ShoppingCart } from './components/shoppingCart.component';
import * as allactions from './actions/actionCreators'

function mapStateToProps(store){
    return{        
        allusers:store.users,
        allproducts:store.products  
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators(allactions,dispatcher)
}
export var Main=connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);