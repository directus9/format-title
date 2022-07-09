import { handleSpecialWords } from '../../src/utils/handle-special-words';

test('Returns special formatting when matches', () => {
	expect(handleSpecialWords('mysql', 0, ['mysql'])).toBe('MySQL');
});

test(`Returns string uppercased when it's an acronym`, () => {
	expect(handleSpecialWords('json', 0, ['json'])).toBe('JSON');
});

test(`If string is first, and not special or an acronym, return as is`, () => {
	expect(handleSpecialWords('Hello', 0, ['Hello'])).toBe('Hello');
});

test(`If string is last, and not special or an acronym, return as is`, () => {
	expect(handleSpecialWords('World', 1, ['Hello', 'World'])).toBe('World');
});

test(`Return lowercased if preposition`, () => {
	expect(handleSpecialWords('About', 1, ['a', 'About', 'c'])).toBe('about');
});

test(`Return lowercased if conjunction`, () => {
	expect(handleSpecialWords('Whether', 1, ['a', 'Whether', 'c'])).toBe('whether');
});

test(`Return lowercased if article`, () => {
	expect(handleSpecialWords('The', 1, ['a', 'The', 'c'])).toBe('the');
});

test(`Return string as is otherwise`, () => {
	expect(handleSpecialWords('Testing', 1, ['a', 'Testing', 'c'])).toBe('Testing');
});
