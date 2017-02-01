import {h} from 'preact'

export const MaxWidthWrapper = ({maxWidth, children}) => {
  const style = {
    maxWidth : `${maxWidth}px`
  }
  return (<div className='maxWidthWrapper' style={style}>
    {children}
  </div>)
}

export const FullWidthWrapper = ({children}) => {
  return (<div className='fullWidthWrapper' >
    {children}
  </div>)
}
