import {h, render} from 'preact'

const TabNavUnit = ({name, children}) => {
  return (<div className='tabNavHoverWrapper'>
    <div className='tabNavUnit'>
    <div className='iconContainer'>
      {children}
    </div>
    <div className='centerVerticalLiName'>
      <span>{name}</span>
    </div>
  </div></div>)
}

export default TabNavUnit
