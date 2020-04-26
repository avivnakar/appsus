import storageService from '../../../services/storageService.js'
import utilService from '../../../services/utilService.js'

const _KEY = 'emails'

const gDefaultEmails = [
    _createEmail( 'baby@gmail.coo' , 'Wassap?', 'Pick up!', false),
    _createEmail( 'baby@gmail.coo' , 'cats', 'grandma shark ttotoototot dododo ododo ododod', false),
    _createEmail( 'baby@gmail.coo' , 'dogs', 'grandpa shark ttotoototot oododod oodododoo ', true),
    _createEmail( 'baby@gmail.coo' , 'flowers', 'mommy shark ttotootototo dododo ododo ododod', false),
    _createEmail( 'baby@gmail.coo' , 'bye', 'baby shark ttotoototot dododo ododo ododod', true)]

var gEmails = null
_createEmails();

export default {
    query
}

function _createEmails() {
    gEmails = storageService.load(_KEY, gDefaultEmails)
    storageService.store(_KEY, gEmails)
}

function _createEmail(sender, subject, body, isRead) {
    return {
        sender,
        subject,
        body,
        isRead,
        id: utilService.makeId(5),
        sentAt: Date.now()
    }
}

function query() {
    var emails = gEmails;
    return Promise.resolve(emails);
}
