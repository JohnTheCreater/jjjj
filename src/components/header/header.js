import Logo from './logo/Logo'
import Nav from './nav/nav';
import SearchBar from './searchbar/SearchBar';


export default function Header(){
    return(
        <div className='flex border justify-between  items-center'>
            <Logo/>
            <Nav/>
            <SearchBar/>
        </div>
    )
}