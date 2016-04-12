'use strict';

import templates from './UsersRating.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class UsersRating extends Component {
	constructor(opt_config) {
		var comments = {
			comments: JSON.parse(opt_config)
		};

		super(comments);
	}
}
Soy.register(UsersRating, templates);

export default UsersRating;
