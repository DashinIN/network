import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass ');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2 ';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with modes class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with modes class', () => {
        const expected = 'someClass class1 class2 ';
        expect(classNames(
            'someClass',
            { hovered: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with modes class', () => {
        const expected = 'someClass class1 class2 ';
        expect(classNames(
            'someClass',
            { hovered: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
