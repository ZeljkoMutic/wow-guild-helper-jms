export class Collections {
  static Users = 'users';
  static Roles = 'roles';
	static UserInvites = 'user-invites';

	static AutomaticEmails = 'automatic-emails';
	static SentEmails = 'sent-emails';

	/**
	 * Subcollections
	 */
	static History = 'history';
	static Notes = 'notes';

	/**
	 * WoW
	 */
	static Items = 'items';
	static Professions = 'professions';
	static Zones = 'zones';
	static Classes = 'classes';
	static Guild = 'guild';
	static Members = 'members';


	static HistorySub(collection: string, docId?: string) {
		return `${collection}/${docId || '{docId}'}/${Collections.History}`;
	}

	static get UserHistory() {
		return Collections.HistorySub('users');
	}

	static UserHistorySub(docId: string) {
		return Collections.HistorySub('users', docId);
	}
}