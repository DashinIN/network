import { CounterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(
                state,
                CounterActions.decrement(),
            ),
        ).toEqual({
            value: 9,
        });
    });
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(
                state,
                CounterActions.increment(),
            ),
        ).toEqual({
            value: 11,
        });
    });
    test('empty state', () => {
        expect(
            counterReducer(
                undefined,
                CounterActions.increment(),
            ),
        ).toEqual({
            value: 1,
        });
    });
});
