import {combineReducers} from 'redux'
import Modal from './Modal'
import Cart from './Cart'
import Page from './Page'
import User from './User'
import Render from './Render'
import ListProduct from './ListProduct'
import FormProduct from './FormProduct'
const reducer = combineReducers({
        Modal,
        Cart,
        Page,
        User,
        Render,
        FormProduct,
        ListProduct,
});

export default reducer;