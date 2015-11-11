import test from 'ava';
import x from './irregular-plurals.json';

test(t => {
	t.true(typeof x === 'object');
	t.true('calf' in x);
	t.end();
});
