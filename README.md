# buster-jasmine

A new Jasmine reporter.

Execute your Jasmine specs from the command-line, using Buster.

!['Running Jasmine specs from Buster'](https://raw.github.com/mattfysh/jasmine-buster/master/console.png)

### The Magic

In your buster.js configuration file, be sure to set the following:

```javascript
var config = module.exports;
require('buster').stackFilter.filters.push('jasmine.js');

config['your project'] = {
	env: 'browser',
    autoRun: 'false',
    src: ['your source files'],
    testHelpers: ['/path/to/jasmine-buster.js'],
    specs: ['your spec files']
}
```

You will also need to set the following somewhere in your test-only code base:

```javascript
var env = jasmine.getEnv(),
	jasmineBuster = new jasmine.BusterReporter();
    
env.addReporter(jasmineBuster);
```

Don't forget to ```env.execute()``` once ready.

### In The Wild

See the basic examples included in this repository, otherwise see how [testr.js](/mattfysh/testr.js) bends the rules.

### Cleaner Error Reporting

Remove the stack trace noise and see exactly where an error began. The `filters` code above removes any jasmine-related entries from an error, leaving it immediately clear where an error has occurred. Compare the screenshot above with this, from the standard Jasmine HTML Reporter:

!['Error Reporting Noise'](https://raw.github.com/mattfysh/jasmine-buster/master/noise.png)

### It's Not All Good News

* Deferred cases are not reported to Buster
* Only the first failure of an expectation will be reported per spec
