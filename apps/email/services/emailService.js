import storageService from '../../../services/storageService.js'
import utilService from '../../../services/utilService.js'

const _KEY = 'emails'

const gDefaultEmails = [
    _createEmail( 'baby@gmail.coo' , 'daddy', 'daddy shark ttotoototot dododo', false),
    _createEmail( 'shark@gmail.coo' , 'grandma', 'grandma shark ttotoototot dododo ododo ododod', false),
    _createEmail( 'aadd1@gmail.coo' , 'grandpa', 'grandpa shark ttotoototot oododod oodododoo ', true),
    _createEmail( '11s@gmail.coo' , 'mommy', 'mommy shark ttotootototo dododo ododo ododod', false),
    _createEmail( 'bb2@gmail.coo' , 'baby', 'baby shark ttotoototot dododo ododo ododod', true)
]

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
