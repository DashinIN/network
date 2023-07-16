import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };
    return (
        <div>
            <h1>{counterValue}</h1>
            <Button theme={ButtonTheme.OUTLINE} onClick={decrement}>decremet</Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={increment}>increment</Button>
        </div>
    );
};
