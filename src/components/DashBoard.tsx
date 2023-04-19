import React from 'react'
import { useState } from 'react'
import './DashBoard.scss'
import {Grid} from '../assets/UiKit/grid/Gird'
import {Line,Rows} from '../assets/UiKit/Line/Line'
import { useGlobalState } from '.././GlobalContext';
//create basic TS component
export default function DashBoard() {
  
const {
  setCustomerControlState,
  customerControlState,
  camerasControlState, 
  setCamerasControlState
} = useGlobalState();


function handleCustomerControlState (pick:boolean)  {
  setCustomerControlState(pick)
}
function handleCamerasControlState (pick:boolean)  {
  setCamerasControlState(pick)
}



  return (
    <div className={'dash_container '}>
    <Grid >
    <Line addClass='customer_movement_container btn_dash_container'>
    <button 
    onClick={()=>{
      handleCustomerControlState(true)
    }
    }
    className={'manual_Movement btn_dash'}>customer manual</button>
    <button 
       onClick={()=>{
        handleCustomerControlState(false)
      }
      }
      className={'auto_movement btn_dash'}>customer auto</button>
    </Line>
    <Line addClass='camera_on_off btn_dash_container'>
    <button 
    onClick={()=>{
      handleCamerasControlState(true)
    }
    }
    className={'camera_on btn_dash'}>camera on</button>
    <button
    onClick={()=>{
      handleCamerasControlState(false)
    }
    }
    className={'camera_off btn_dash'}>camera off</button>
    </Line>
   </Grid>
  </div>
  )
}
