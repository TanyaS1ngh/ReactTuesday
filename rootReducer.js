import {combineReducers} from 'redux'
import {users} from './users.reducer'
import {products}  from './product.reducer.js'

export var rootReducer=combineReducers({users,products})