import test from 'ava';
import m from './irregular-plurals.json';

test(t => {
	t.true(typeof m === 'object');
	t.true('calf' in m);
});
