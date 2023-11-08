import NavigationItem from'../NavigationItem'
import './header.css';


const Header = () => {
   return (
      <header>
      <div className='header'>
         <NavigationItem text='main' isUppercasetext={true} />
         <NavigationItem text='navigation' isUppercasetext={true} />
         <NavigationItem text='menu' isUppercasetext={true} />
         <NavigationItem text='etc' isUppercasetext={true} />
      </div>
      <NavigationItem text='header' isUppercasetext={false} />
      </header>);

}

export default Header