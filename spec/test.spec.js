var notAnon = function() {
	willThrowForFood();
}

function willThrowForFood() {
	return notdefined;
}

describe('top level suite', function() {

	it('has a test case', function() {
		expect(true).toBe(true);
	});

	it('has an error', function() {
		throw Error('catch me');
	});

	it('fails over and', function() {
		expect(true).toBe(false);
		expect(false).toBe(true);
	});

	it('shows good stack', function() {
		notAnon();
	});

	throw Error('oops');

});

describe('top level two', function() {
	decExp;
});