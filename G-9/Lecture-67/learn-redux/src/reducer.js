import { INCREMENT } from './action'
const intialstate={
    count:0
}
const reducer = (state=intialstate,action) => {
    switch(action.type)
    {
        case INCREMENT:
            return {...state,count:state.count+1};
        default:
            return state;
    }
}

export default reducer;
