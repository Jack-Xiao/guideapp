/**
 * Created by xiaojiang on 2016/12/21.
 */

import * as types from '../common/ActionTypes';
const initialState = {
    loading: false,

}

export default function test(state = initialState, action) {
    switch (action.type){
        case types.CHANGE_CATEGORY_ACTION:
            return Object.assign({}, state, {
                loading: true,
            });
        default:
            return state;
    }
}