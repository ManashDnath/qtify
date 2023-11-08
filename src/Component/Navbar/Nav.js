import './Nav.css'
import Button from '../Button/button';
import Searchbox from '../SearchBox/index'
import {ReactComponent} from './logo_Qtify.svg';

export default function Nav(){
    return(
        <div class="navlist">
        
            <div id="logo" ><ReactComponent/></div>
            <Searchbox/>
            <Button>Give Feedback</Button>
            
        </div>
    )
}