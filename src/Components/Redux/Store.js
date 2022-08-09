import   {createStore} from 'redux';
import carReducer from './carsRecuders';





export default function (){
    return createStore(carReducer);
}

