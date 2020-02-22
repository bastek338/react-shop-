import React, { useContext } from 'react';
import SideBar from '../UI/SideBar/SideBar';
import InitialLogin from '../Sliders/InitialLoginComponent/InitialLoginComponent';
import SignIn from '../SignIn/SignIn';
import SignUp from '../Sliders/SignUp/SignUp';
import { ClosedContext } from '../../App';

const SlideBarChanger = (props) =>{ 
 
    const context = useContext(ClosedContext);

    const { sliderState, dispatch } = context; 

    let slider = null; 

    
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

    return (
        <div>
            {slider}
        </div>
    )

}

export default SlideBarChanger;