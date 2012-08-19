(function() {
	var env = jasmine.getEnv(),
		busterReporter = new jasmine.BusterReporter();

	env.addReporter(busterReporter);
	window.onload = function() {
		env.execute();
	}	
}());