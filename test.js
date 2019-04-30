import test from 'ava';
import irregularPlurals from '.';

test('main', t => {
	t.true(irregularPlurals.has('calf'));
	t.is(irregularPlurals.get('calf'), 'calves');
});

test('isolated', t => {
	const fresh1 = require('.');
	const fresh2 = require('.');

	fresh1.delete('calf');
	t.false(fresh1.has('calf'));
	t.true(fresh2.has('calf'));
	t.true(irregularPlurals.has('calf'));
});
