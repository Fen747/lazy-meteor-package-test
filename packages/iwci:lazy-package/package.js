Package.describe({
	summary: 'Just a simple package lazy-load test',
	version: '0.0.1',
	name: 'iwci:lazy-package',
	git: 'https://github.com/Fen747/lazy-meteor-package-test',
})

Package.onUse(function(api) {
	api.use('ecmascript')
	api.mainModule('lazy-package.js', 'client', { lazy: true })
	api.mainModule('lazy-package.js', 'server', { lazy: true })
})
