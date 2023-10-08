import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();
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
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={decrement}
                data-testid="decrement-button"
            >
                {t('decrement')}
            </Button>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={increment}
                data-testid="increment-button"
            >
                {t('increment')}
            </Button>
        </div>
    );
};
