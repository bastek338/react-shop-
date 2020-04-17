import React, { useContext } from 'react';
import SideBar from '../UI/SideBar/SideBar';
import InitialLogin from '../Sliders/InitialLoginComponent/InitialLoginComponent';
import SignIn from '../SignIn/SignIn';
import SignUp from '../Sliders/SignUp/SignUp';
import { ClosedContext } from '../../App';

const SlideBarChanger = ({sliderState, dispatch}) =>{ 

    let slider = null; 

    if(sliderState !== undefined) {
        switch(true) {
        case (sliderState.initialLogin):
            slider = (
                <SideBar>
                    <InitialLogin dispatch={dispatch}/>
                </SideBar>
            )
        break;
        case (sliderState.login):
            slider = (
            <SideBar>
                <SignIn/>
            </SideBar>
            )
        break;
            case (sliderState.register):
                slider = (
                    <SideBar>
                        <SignUp />
                    </SideBar>
                ) 
            break;
        default:
            slider = null;
        break;
    }
}

    return (
        <div style={{zIndex: "70"}}>
            {slider}
        </div>
    )

}

export default SlideBarChanger;