import React from 'react'
import action from './Action' 
let inital_state={
    count:0
}

const Reducer = (state=inital_state,action) => {
    switch(action.type)
    {
        case INCREMENT:
            return {  ...state,count:state.count+1}
    }
}

export default Reducer