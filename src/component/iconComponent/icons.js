import {h} from 'preact'

export const LaptopIcon = (props) => {
  return (<svg
    className='tabIcon'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    aria-labelledby="title">
    <title id="title">Laptops</title>
    <linearGradient id="laptopActiveGradient" gradientUnits="userSpaceOnUse" y1="15" x2="29.9" y2="15">
    <stop offset="0" stop-color="#F69366"/>
    <stop offset="1" stop-color="#6D3C92"/>
    </linearGradient>
  <path class='laptopIconSvg' d="M25.9 4.1c1.1 0 2 .9 2 2v15.7h1.7c.2 0 .3.2.3.3v1.4c0 1.3-1.1 2.4-2.4 2.4H2.4c-1.3 0-2.4-1.1-2.4-2.4v-1.4c0-.2.2-.3.3-.3H2V6.1c0-1.1.9-2 2-2h21.9zm0 .7H4.1c-.7 0-1.4.6-1.4 1.3v.7h24.5v-.7c.1-.7-.5-1.3-1.3-1.3 0-.1 0-.1 0 0zm1.4 2.7H2.7v14.3h24.5V7.5zM7 8.5c.1 0 .2 0 .2.1.1.1.1.3 0 .5L4.3 12c-.1.1-.4.1-.5 0s-.1-.4 0-.5l2.9-2.9c.1-.1.2-.1.3-.1zm1.4 1c.1 0 .2 0 .2.1.1.1.1.4 0 .5l-3.4 3.3c-.1.1-.4.1-.5-.1-.1-.1-.1-.3 0-.4l3.4-3.4h.3zm20.9 13H.7v1.1c0 .9.7 1.7 1.7 1.7h25.2c.9 0 1.7-.7 1.7-1.7v-1.1z"/>
</svg>)
}

export const MonitorIcon = (props) => {
  return (<svg
    className='tabIcon'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    aria-labelledby="title">
    <title id="title">Monitors</title>
    <linearGradient id="monitorActiveGradient" gradientUnits="userSpaceOnUse" y1="14.95" x2="30" y2="14.95">
    <stop offset="0" stop-color="#F69366"/>
    <stop offset="1" stop-color="#6D3C92"/>
  </linearGradient>
  <path class='monitorIconSvg' d="M24.5 21.6H1V4.4h2v15.7c0 .3.1.5.4.6s.6-.2.6-.5V3.9c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5v18.2c0 .3.2.5.5.5h24c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM18.6 8.1c-.2.2-.2.5 0 .7l3 3c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-3-3c-.2-.2-.5-.2-.7 0zm.9 17.5h-4v-1.5c0-.3-.1-.5-.4-.6-.3 0-.5.1-.6.4v1.6h-4c-.3 0-.5.2-.5.5s.2.5.5.5h9c.3 0 .5-.2.5-.5 0-.1-.2-.4-.5-.4zM17 9.9c.1 0 .3-.1.4-.1.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.5.5c0 .1.2.1.3.1zm5.5-.5c.1 0 .3-.1.4-.1.2-.2.2-.5 0-.7l-1-1c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l1 1c0 .1.2.1.3.1zm7-6h-24c-.3 0-.5.2-.5.5s.2.5.5.5H29v17.2h-2V5.9c0-.3-.1-.5-.4-.6-.3 0-.5.1-.6.4V22c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5V3.9c0-.3-.2-.5-.5-.5zm-11.4 7.9l2.5 2.5c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-2.5-2.5c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7z"/>
</svg>)
}

export const GamingConsoleIcon = (props) => {
  return (<svg
    className='tabIcon'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    aria-labelledby="title">
    <title id="title">Gaming Consoles</title>
    <linearGradient id="gamingConsoleActiveGradient" gradientUnits="userSpaceOnUse" x1=".06" y1="15.048" x2="30.014" y2="15.048">
    <stop offset="0" stop-color="#F69366"/>
    <stop offset="1" stop-color="#6D3C92"/>
  </linearGradient>
  <path class='gamingConsoleIconSvg' d="M29.3 15.9c-.8-2.8-1.9-5.5-3.2-8.1 0 0-.1-.2-.1-.4-.2-.8-.3-1.3-.7-1.4l-3.9-1.4c-.5-.2-1-.1-1.4.2-.3.2-.7.4-1.1.6h-7.4c-.5-.2-.9-.4-1.3-.6-.4-.3-1-.3-1.5-.2L4.9 6c-.4.1-.5.6-.7 1.4 0 .1-.1.4-.1.4C2.7 10.4 1.6 13.2.8 16c-1.3 4.8-.9 7.9 1.3 9.3.5.3 1.2.3 1.7-.1l4.6-3.9c.6-.5 1.3-.7 2-.7h9.4c.7 0 1.4.3 2 .7l4.6 3.9c.3.2.6.4.9.4s.5-.1.7-.2c2.1-1.6 2.6-4.7 1.3-9.5zM14.7 6.4h1.2c0 .3-.1.6-.4.8-.4.3-1.1.2-1.4-.2-.1-.2-.2-.4-.2-.6h.8zm12.8 18c-.2.1-.4.1-.5-.1l-4.6-3.9c-.7-.6-1.7-1-2.6-1h-9.4c-1 0-1.9.3-2.6 1l-4.6 3.9c-.2.1-.4.1-.5 0-2.2-1.4-1.7-5.2-.9-8.2.8-2.8 1.9-5.4 3.2-8 0-.1.1-.3.1-.5.1-.2.2-.5.3-.7l3.7-1.3c.2-.1.4 0 .6.1 1.3.7 1.6.7 1.7.7h1.5c0 1 .7 1.8 1.6 2h.3c.5 0 .9-.2 1.3-.5.4-.4.7-.9.7-1.5h2c.1 0 .4 0 1.6-.8.2-.1.4-.1.6-.1l3.7 1.3c.1.2.2.5.2.7s.1.4.2.6c.7 1.5 6.6 13.5 2.4 16.3zm-8.6-11.3c-1.4 0-2.4 1.2-2.4 2.5S17.7 18 19 18s2.4-1.1 2.4-2.5c0-1.3-1.1-2.4-2.5-2.4zm0 4c-.8 0-1.5-.6-1.5-1.5 0-.8.6-1.5 1.5-1.5s1.5.6 1.5 1.5c0 .8-.7 1.4-1.5 1.5zm-9-6.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-2.5 1.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm15-2.5c.5 0 1-.4 1-1 0-.5-.4-1-1-1-.5 0-1 .4-1 1s.4 1 1 1zm-2 2c.5 0 1-.5 1-1s-.5-1-1-1-1 .4-1 1 .4 1 1 1zm4-2c-.5 0-1 .5-1 1s.5 1 1 1 1-.4 1-1c0-.5-.5-1-1-1zm-2 2c-.5 0-1 .5-1 1s.5 1 1 1 1-.4 1-1-.5-1-1-1zm-8.3 2.3H13v-1.1c0-.5-.4-.8-.9-.8h-1.3c-.5 0-.9.4-.9.8v1.1h-1c-.5 0-.9.4-.9.8V16c0 .5.4.8.9.8H10V18c0 .5.4.8.9.8h1.3c.5 0 .9-.4.9-.8v-1.2h1.1c.5 0 .8-.4.9-.8v-1.3c-.1-.4-.5-.8-1-.8zm-.1 2h-2v2h-1v-2H9v-1h2v-2h1v2h2v1z"/>
</svg>)
}

export const HardDriveIcon = (props) => {
  return (<svg
    className='tabIcon'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    aria-labelledby="title">
    <title id="title">Hard Drives</title>
    <linearGradient id="hardDriveActiveGradient" gradientUnits="userSpaceOnUse" x1="6.1" y1="15" x2="23.9" y2="15">
    <stop offset="0" stop-color="#F69366"/>
    <stop offset="1" stop-color="#6D3C92"/>
  </linearGradient>
  <path class='hardDriveIconSvg' d="M23.4 4.4H6.6c-.3 0-.5.2-.5.5v20.2c0 .3.2.5.5.5h16.8c.3 0 .5-.2.5-.5V4.9c0-.3-.2-.5-.5-.5zm-.5 20.2H7.1V5.4h15.8v19.2zm-3-5c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7 1.7-.8 1.7-1.8c0-.9-.8-1.7-1.8-1.7zm0 2.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm-6.7-9c0 .9.8 1.7 1.7 1.7s1.7-.8 1.7-1.7-.7-1.7-1.7-1.7c-.8 0-1.6.8-1.7 1.7zm2.5 0c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7c.3 0 .7.3.7.7zm1.3 9H9.1c-.3.1-.4.4-.3.6 0 .2.2.3.3.3H17c.3-.1.4-.4.3-.6 0-.1-.1-.2-.3-.3zm-5.5-8.5c.3 0 .5-.2.5-.5 0-1.6 1.3-2.9 2.9-2.9.3-.1.4-.4.3-.6 0-.2-.2-.3-.3-.3-2.1 0-3.9 1.7-3.9 3.8.1.3.3.5.5.5.1 0 .1 0 0 0zm-3 6.7c.5.1 1.1 0 1.6-.1.2-.1.4-.1.6-.2.2-.1.4-.3.6-.4l.6-.9c1 .6 2.1.9 3.2.9 3.5 0 6.3-2.8 6.3-6.2 0-3.5-2.8-6.3-6.2-6.3-3.5 0-6.3 2.8-6.3 6.2 0 1.1.3 2.3.9 3.2-.3.2-.6.3-.9.6-.2.2-.3.4-.4.6-.1.2-.2.4-.2.6-.1.5-.2 1.1-.1 1.6-.2 0 0 .3.3.4zM15 7.9c2.9.2 5.1 2.8 4.8 5.7-.2 2.6-2.3 4.6-4.8 4.8-.9 0-1.8-.2-2.6-.7.1-.1 1.4-2.4 1.4-2.5.2-.3 0-.7-.3-.8-.2-.1-.4-.1-.5 0 0 0-2.3 1.3-2.5 1.4-1.5-2.6-.6-5.8 1.9-7.2.8-.5 1.7-.7 2.6-.7zM9.2 18c.1-.1.1-.2.2-.3.9-.7 1.9-1.2 2.9-1.8-.1.1-1.3 2.2-1.8 2.9-.1.1-.2.2-.3.2-.1.1-1.1.5-1.3.3-.3-.3.2-1.2.3-1.3z"/>
</svg>)
}

export const ActiveStyleElement = (props) => {
  return (<div className='activeStyleElement'><svg
    className='activeStyleElementIcon'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    aria-labelledby="title">
    <title id="title">Hard Drives</title>
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1" y1="14.985" x2="29.156" y2="15.016">
      <stop offset="0" stop-color="#F69466"/>
      <stop offset="1" stop-color="#6D3D93"/>
    </linearGradient>
    <path fill="url(#a)" d="M15 29.3L.7 15 15 .7 29.3 15l-.1.1L15 29.3zM1 15l14 14 14-14L15 1 1 15z"/>
</svg></div>)
}

export const HeaderGradientSvg = ({position}) => {
  return (<div className={`headerGradientSvgContainer ${position}`}>
    <div className='headerGradientSvgResponsiveWrapper'>
      <svg class="headerGradientSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 877 27">
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="877" y1="13.5" x2="0" y2="13.5">
              <stop offset="0" stop-color="#F79467">
              </stop><stop offset="1" stop-color="#6E3E93"></stop>
            </linearGradient>
            <path class="headerGradientSvg" fill="url(#a)" d="M836.2 27L803.1 1H0V0h803.6l33.3 26 40.1.1v.9"></path>
          </svg>
  </div>
  </div>)
}
