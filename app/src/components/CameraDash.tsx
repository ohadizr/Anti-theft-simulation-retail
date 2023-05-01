import React from 'react'
import { useState } from 'react'
import './DashBoard.scss'
import {Grid} from '../assets/UiKit/grid/Gird'
import {Line,Rows} from '../assets/UiKit/Line/Line'
import { useGlobalState } from '.././GlobalContext';
//create basic TS component
export default function DashBoard() {
  
const {
  customerControlState,
  camerasControlState, 
} = useGlobalState();



  return (
    <div className={'camera_dash_container '}>
    <Grid >
        <Line>
            
        </Line>
   </Grid>
  </div>
  )
}
