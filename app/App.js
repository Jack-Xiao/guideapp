/**
 * Created by xiaojiang on 2016/12/20.
 */
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import Store from './store/Store';
import Launch from './page/Launch';

const store = Store();
export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Launch/>
            </Provider>
        )
    }
}