import{ useReducer, useState } from 'react';

const initialState = {
    initialLogin: false,
    login: false,
    register: false,
}

function reducerSlider (state, action) {
  switch(action.type) {
    case 'initialLogin': 
      return {
        ...state,
        initialLogin: true
      }
    case 'login':
      return {
        initialLogin: false,
        login: true,
        register: false
      }
    case 'register': 
      return {
        initialLogin: false,
        login: false,
        register: true
      }
    default: 
    return initialState
  }
}


const useSlider = () => {
    const [sliderState, dispatch] = useReducer(reducerSlider, initialState);
    const [closed, setClosed] = useState(false);

    const closeSideBarHandler = () => {
      setClosed(false);
    }

    return {
        dispatch,
        sliderState,
        setClosed, 
        closed,
        closeSideBarHandler
    }
}

export default useSlider;