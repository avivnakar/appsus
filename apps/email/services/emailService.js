import storageService from '../services/storageService.js'
import utilService from '../services/utilService.js'

const _KEY = 'emails'

gDefaultEmails = [{sender:'baby', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
{ sender:{senderName:'baby',senderEmail:'baby@gmail.coo'},subject: 'cats', body: 'grandma baby shark ttotoototot oododod oodododoo dododo ododo ododod', isRead: false, sentAt: 1551133930595 },
{ sender:{senderName:'baby',senderEmail:'baby@gmail.coo'}, subject: 'dogs', body: 'grandpa shark ttotoototot oododod oodododoo dododo ododo ododod', isRead: true, sentAt: 1551133930596 },
{ sender:{senderName:'baby',senderEmail:'baby@gmail.coo'}, subject: 'flowers', body: 'mommy shark ttotoototot oododod oodododoo dododo ododo ododod', isRead: false, sentAt: 1551133930597 },
{ sender:{senderName:'baby',senderEmail:'baby@gmail.coo'}, subject: 'bye', body: 'baby shark ttotoototot oododod oodododoo dododo ododo ododod', isRead: true, sentAt: 1551133930598 }]

var gEmails = null
_createEmails();

export default {
    query,
    save,
    remove,
    getById,
    getNextPrevEmail
}

function _createEmails() {
    gEmails = storageService.load(_KEY, gDefaultEmails)
    storageService.store(_KEY, gEmails)

}

function _createEmail(sender,subject, body, isRead) {
    return {
        sender,
        subject, 
        body, 
        isRead,
        id: utilService.makeId(),
        sentAt: Date.now()
    }
}

function query() {
    var emails = gEmails;
        return Promise.resolve(emails);
}
