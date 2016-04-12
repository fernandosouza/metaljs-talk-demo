'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'UsersRating.css',
	bundleFileName: 'UsersRating.js',
	moduleName: 'MetalUsersRating',
	buildDest: '../../public/javascripts/metal-users-rating',
	soyGeneratedDest: '../../public/javascripts/metal-users-rating'
});
