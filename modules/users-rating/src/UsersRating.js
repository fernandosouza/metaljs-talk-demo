'use strict';

import templates from './UsersRating.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class UsersRating extends Component {
	hey() {
		console.log('hey');
	}
}
Soy.register(UsersRating, templates);

export default UsersRating;
