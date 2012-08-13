buster-jasmine
==============

Execute Jasmine Specs using the BusterJS Runner

https://github.com/mattfysh/buster-jasmine


Jasmine side
============

    var jasmineEnv = jasmine.getEnv(),
        jasmineApi = new jasmine.JsApiReporter();
    
    jasmineEnv.addReporter(jasmineApi);
    jasmineApi.reportSpecResults = function(spec) {
      spec.getFullName();
      spec.failedCount > 0 ? 'fail' : 'pass';
    }