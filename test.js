import test from 'ava';
import m from './irregular-plurals';

test(t => {
	t.is(typeof m, 'object');
	t.true('calf' in m);
});
