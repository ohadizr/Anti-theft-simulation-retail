import React from 'react';
import './BeverageModule.scss';
import { Rows} from '../../assets/UiKit/Line/Line'; 
import bottlesShelf from '../../assets/images/bottlesMudle.jpg'
import CocaColaImg from '../.././data/images/Cocacola.png'
import FantaImg from '../.././data/images/Fanta.png'
import SpriteImg from '../.././data/images/Sprite.png'
import PepsiImg from '../.././data/images/Pepsi.png'

//create interface and types - num/string/void 
interface BeverageModuleProps {
  // rowsCount: number;
  // columnsCount: number;
  bottlesArray: {
    name: string;
    price: number;
    key: string;
    image: string;
  }[];

}

export default function BeverageModule(props: BeverageModuleProps) {
  const { bottlesArray } = props;
  //create new array that has the keys of the bottlesArray 4 times 
  const enlargedBottledArray = bottlesArray.concat(bottlesArray, bottlesArray);

  return (
    <div className='beverageModuleContainer'>
    <img className='beverage_layout_background' src={bottlesShelf} alt={"store lay out"} />

        <Rows addClass='productLine bottleRowOne'>
      {enlargedBottledArray.map((bottle, index) => {
        return (
          <div className='productDisplay' key={bottle.key}>
            <img className='bottlesImg' src={
              bottle.name === 'Coca Cola' ? CocaColaImg :
              bottle.name === 'Fanta' ? FantaImg :
              bottle.name === 'Sprite' ? SpriteImg :
              bottle.name === 'Pepsi' ? PepsiImg : 'Pepsi'
              
            } alt={bottle.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{bottle.name}</p>
                <p className='productPrice'>{bottle.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
      <Rows addClass='productLine bottleRowTwo'>
      {enlargedBottledArray.map((bottle, index) => {
        return (
          <div className='productDisplay' key={bottle.key}>
            <img className='bottlesImg' src={
              bottle.name === 'Coca Cola' ? CocaColaImg :
              bottle.name === 'Fanta' ? FantaImg :
              bottle.name === 'Sprite' ? SpriteImg :
              bottle.name === 'Pepsi' ? PepsiImg : 'Pepsi'
              
            } alt={bottle.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{bottle.name}</p>
                <p className='productPrice'>{bottle.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
      <Rows addClass='productLine bottleRowThree'>
      {enlargedBottledArray.map((bottle, index) => {
        return (
          <div className='productDisplay' key={bottle.key}>
            <img className='bottlesImg' src={
              bottle.name === 'Coca Cola' ? CocaColaImg :
              bottle.name === 'Fanta' ? FantaImg :
              bottle.name === 'Sprite' ? SpriteImg :
              bottle.name === 'Pepsi' ? PepsiImg : 'Pepsi'
              
            } alt={bottle.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{bottle.name}</p>
                <p className='productPrice'>{bottle.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
      <Rows addClass='productLine bottleRowFour'>
      {enlargedBottledArray.map((bottle, index) => {
        return (
          <div className='productDisplay' key={bottle.key}>
            <img className='bottlesImg' src={
              bottle.name === 'Coca Cola' ? CocaColaImg :
              bottle.name === 'Fanta' ? FantaImg :
              bottle.name === 'Sprite' ? SpriteImg :
              bottle.name === 'Pepsi' ? PepsiImg : 'Pepsi'
              
            } alt={bottle.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{bottle.name}</p>
                <p className='productPrice'>{bottle.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
    </div>
  );
}
