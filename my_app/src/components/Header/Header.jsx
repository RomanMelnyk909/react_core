import './header.css';
import NavigationItem from "../navigationItem/NavigationItem";

const Header = () => {
   return (
      <div className='header'>
         <NavigationItem text='1fff' isUppercasetext={true} />
         <NavigationItem text='2fff' isUppercasetext={false} />
         <NavigationItem text='3fff' isUppercasetext={true} />
      </div>);
}

export default Header