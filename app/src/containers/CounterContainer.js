import {useSelector} from 'react-redux';
import { selectCount } from '../store/dataSlice';
import Counter from '../components/Counter';

function CounterContainer () {
    const responsesCount = useSelector(selectCount);

    return(
        <Counter counter={responsesCount}/>
    );
}

export default CounterContainer;