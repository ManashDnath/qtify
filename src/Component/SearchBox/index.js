import {ReactComponent} from './Search_icon.svg';
import './index.css'
export default function index(){
    return (
        <form class="form">
            <input placeholder='Search an albhum of your choice' id='input'/>
            <button id='search-button'><ReactComponent/></button>
        </form>
    )
}