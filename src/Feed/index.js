import { computed, observable } from 'mobx';
import { v4 } from 'uuid';

class FeedItem {
	@observable id;
	@observable email;
	@observable message;

	constructor(email, message) {
		this.id = v4();
		this.email = email;
		this.message = message;
	}
}

export class Feed {
	@observable items = [];

	@observable filter = '';

	@computed get filteredItems() {
		const matchesFilter = new RegExp(this.filter, 'i');
		return !this.filter ? this.items : this.items.filter(({ email, message }) => matchesFilter.test(email) || matchesFilter.test(message));
	}

	addItem = ({ email, message }) => this.items.push(new FeedItem(email, message));
}

export default new Feed();