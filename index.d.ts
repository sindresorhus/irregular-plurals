/**
A map of nouns to their irregular plural form.

@example
```
import irregularPlurals from 'irregular-plurals';

console.log(irregularPlurals.get('cactus'));
//=> 'cacti'

console.log(irregularPlurals);
// Map {
// 	[addendum, 'addenda'],
// 	[alga, 'algae'],
// 	…
// }
```
*/
declare const irregularPlurals: ReadonlyMap<string, string>;

export default irregularPlurals;
