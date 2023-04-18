import React from 'react';
import './VegtableMoudle.scss';
import { Rows} from '../../assets/UiKit/Line/Line'; 
import veg_shelf from '../../assets/images/veg_shelf.png'
import onion from '../.././data/images/onion.png'



type VegetableMoudleProps = {
    VegetableArray: {
        name: string;
        price: number;
        key: string;
        image: string;
    }[];
}
const VegetableMoudle: React.FC<VegetableMoudleProps> = (props) => {
    const { VegetableArray } = props;

    return (
        <div className='vegetableModuleContainer'>
        <img className='vegetable_layout_background' src={veg_shelf} alt={"store lay out"} />
        <Rows addClass='productLine lineOne'>
      {VegetableArray.map((veg, index) => {
        if (index > 1) return null;
        return (
          <div className={`productDisplay`} key={veg.key}>
            <img className='vegImg' src={onion} alt={veg.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{veg.name}</p>
                <p className='productPrice'>{veg.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
      <Rows addClass='productLine lineTwo'>
      {VegetableArray.map((veg, index) => {
        if (index < 2 || index > 4) return null;
        return (
          <div className={`productDisplay`} key={veg.key}>
            <img className='vegImg' src={onion} alt={veg.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{veg.name}</p>
                <p className='productPrice'>{veg.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
      <Rows addClass='productLine lineThree'>
      {VegetableArray.map((veg, index) => {
        if (index < 2 || index > 4) return null;
        return (
          <div className={`productDisplay`} key={veg.key}>
            <img className='vegImg' src={onion} alt={veg.name} />
            {/* <div className='hoveringOnProduct'>
                <p className='productName'>{veg.name}</p>
                <p className='productPrice'>{veg.price} </p>
            </div> */}
          </div>
        );
      })}
      </Rows>
        </div>
        )

}

export default VegetableMoudle




