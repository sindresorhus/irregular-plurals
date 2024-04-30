import test from 'ava';
import irregularPlurals from './index.js';

test('main', t => {
	t.true(irregularPlurals.has('calf'));
	t.is(irregularPlurals.get('calf'), 'calves');
});

test.failing('isolated', async t => {
	const {default: fresh1} = await import('./index.js');
	const {default: fresh2} = await import('./index.js');
	fresh1.delete('calf');
	t.false(fresh1.has('calf'));
	t.true(fresh2.has('calf'));
	t.true(irregularPlurals.has('calf'));
});
