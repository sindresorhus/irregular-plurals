import {expectType} from 'tsd';
import irregularPluralsJson = require('./irregular-plurals.json');
import irregularPlurals = require('.');

expectType<ReadonlyMap<keyof typeof irregularPluralsJson, string>>(
	irregularPlurals
);
