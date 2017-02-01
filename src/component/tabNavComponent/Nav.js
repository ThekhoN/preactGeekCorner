import {h, render} from 'preact'
import { Link } from 'preact-router';

const NavList = ['Laptops', 'Monitors', 'Gaming Consoles', 'Hard drives']

const convertToUsableString = (s) => {
  return s.toLowerCase().replace(/\w+/g, function(txt) {
    return txt.charAt(0) + txt.substr(1);
  }).replace(/\s/g, '');
}

const Nav = () => (<div class='NavWrapper'>
  <ul>
    {NavList.map((e,i) => {
      const eLink = convertToUsableString(e)
      if(i===0){
        return (<li><Link
          key={i}
          href='/'>{e}</Link></li>)
      }
      else {
        return (<li>
          <Link
            key={i}
            href={'/'+eLink}>{e}</Link>
        </li>)
      }
    })}
  </ul>
</div>)

export default Nav
