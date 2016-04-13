'use strict';

import templates from './UsersRating.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class UsersRating extends Component {
	constructor(opt_config) {
		opt_config.comments = JSON.parse(opt_config.comments);

		super(opt_config);
	}

	hey() {
		console.log('Hey danado');
	}
}
Soy.register(UsersRating, templates);

export default UsersRating;
