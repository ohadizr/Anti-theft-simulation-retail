import React from 'react'
import './CardWithPopUpInfoPage.scss'
import {Line,Rows,Around} from '../../Line/Line'
import {Btn} from '../../elements/Btns/Btn'
import {useState} from 'react'

export default function CardWithPopUpInfoPage() {


const InfoPage = ({ visible }) => ( 
    <div  className={visible ? 'show' : 'hide'}>
      <h1>info page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lacinia enim.</p>
      <p>Mauris venenatis eros vitae sem rutrum sollicitudin eget ac nisi. Duis dapibus in arcu a mollis.</p>
      <p>Nullam sit amet sem viverra, hendrerit massa non, facilisis nisl.</p>
    </div>
  )
  const [state, setState] = useState({ visible: false })


  
    const toggleInfoPage = () => setState(prev => ({ visible: !prev.visible }));
    
     
      return (
  <>
  {/* <div className='CardWithPopUpInfoPageContainer'> */}
    <Line addClass={'CardWithPopUpInfoPageContainer'}>
        <Line className='CardBody'>
            <Btn onClick={toggleInfoPage}> click</Btn>
        </Line>
        <Line addClass={"CardBody"}>
        {state.visible && <InfoPage visible={state.visible} />}
    </Line>
    </Line>
</>
      )
      
    }
  
  
