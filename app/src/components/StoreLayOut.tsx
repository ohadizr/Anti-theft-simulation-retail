import React from 'react'
import { useState } from 'react'
import storeImgLayout from '../assets/images/supermarket.jpg'
import './StoreLayOut.css'
import BeverageModule from './BeverageModules/BeverageModule'
import VegetableMoudle from './VegtableMoudules/VegtableMoudle'
import CartRoutes from './cart/CartRoutes'
import CartRoutesAuto from './cart/CartRoutesAuto'
import CenteredModal from '../assets/UiKit/premade_componenets/Modals/VerticalModal'
import product from '.././data/products.json'
import { useGlobalState } from '.././GlobalContext';
//create basic TS component
export default function StoreLayOut() {
    const {customerControlState, setCustomerControlState} = useGlobalState();
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [whitchModule, setWhitchModule] = useState('')
    function handleModal(status:boolean, modulePicked?:string) {
        setWhitchModule(modulePicked!)
        setIsModelOpen(status)
    }

    const BeverageArray = product.bottles
    const VegetableArray = product.vegetables
    

  return (
    <div className={'store_layout'}>
    <img className='store_layout_background' src={storeImgLayout} alt={"store lay out"} />

    <button className='soft_drinks' ></button>
    <button className='natural_drinks'></button>
    <button className='beers'
    onClick={() => handleModal(true, 'beers')}
    >🧃</button>
  <button className='vegetables'
    onClick={() => handleModal(true, 'vegetables')}
    >🍆</button>


 {customerControlState? <CartRoutes /> : <CartRoutesAuto />}
    

   
   {isModelOpen?

   <CenteredModal
    show={isModelOpen}
    onHide={() => handleModal(false, '')}
    >
    {whitchModule === 'vegetables' ? <VegetableMoudle VegetableArray={VegetableArray}/> : null}
    {whitchModule === 'beers' ? <BeverageModule   bottlesArray={BeverageArray} /> : null}
    </CenteredModal>
    : null
    } 
  </div>
  )
}
