import {h} from 'preact'

export const TabList = ({children}) => {
  return (<ul className='tabList' role="tablist">
    {children}
  </ul>)
}

export const Tab = ({active, index, children, onClickTab}) => {
  const activeTabClassName = active===parseInt(index) ? ' active': '';
  return (<li className={activeTabClassName} role="tab" onClick={()=>{
      onClickTab({index})
    }}>
      {children}</li>)
}

export const TabPanel = ({index, active, children}) => {
  const cssDisplay = active === parseInt(index)? 'block': 'none'
  //console.log('cssDisplay: ', cssDisplay)
  const style = {
    display:`${cssDisplay}`
  }
  return (<div className='tabPanel' role="tabpanel" style={style}>
      {children}
    </div>)
}
