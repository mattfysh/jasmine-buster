var config = module.exports;

require('buster').stackFilter.filters.push('jasmine.js');

config['jasmine-buster'] = {
	env: 'browser',
	autoRun: false,
	testHelpers: [
		'jasmine.js',
		'jasmine-buster.js',
		'run.js'
	],
	specs: [
		'test.spec.js'
	]
}