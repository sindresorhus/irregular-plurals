import irregularPlurals_ from './irregular-plurals.json' with {type: 'json'};

const irregularPlurals = new Map(Object.entries(irregularPlurals_));

export default irregularPlurals;
