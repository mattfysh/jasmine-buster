var config = module.exports;

require('buster').stackFilter.filters.push('jasmine.js');

config['jasmine-buster'] = {
	env: 'browser',
	autoRun: false,
	rootPath: '../',
	testHelpers: [
		'jasmine/jasmine.js',
		'jasmine-buster.js',
		'spec/run.js'
	],
	specs: [
		'spec/test.spec.js'
	]
}