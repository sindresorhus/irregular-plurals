import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m.has('calf'));
});
