import storageService from '../../../services/storageService.js'
import utilService from '../../../services/utilService.js'

const _KEY = 'emails'

const gDefaultEmails = [
    _createEmail( 'course@gmail.coo' , 'NEW!', 'New! Finding Purpose and Meaning in Life: Living for What Matters Most‏', false),
    _createEmail( 'avo@gmail.coo' ,'avocodee', 'I wanted to thank you for giving Avocode a try. 🙏Do you mind sharing with us the reason you did not purchase a subscription? Did you have enough time to explore Avocode?Just reply to this email to let us know, maybe we can help.', false),
    _createEmail( 'aadd1@gmail.coo' , 'grandpa', 'grandpa shark ttotoototot oododod oodododoo ', true),
    _createEmail( '11s@gmail.coo' , 'mommy', 'mommy shark ttotootototo dododo ododo ododod', false),
    _createEmail( 'bb2@gmail.coo' , 'baby', 'baby shark ttotoototot dododo ododo ododod baby shark ttotoototot dododo ododo ododod baby shark ttotoototot dododo', true)
]

var gEmails = null
_createEmails();

export default {
    query,
    getById,
    removeById,
    countUnReadEmails,
    toggleIsRead,
    addEmail
}

function _createEmails() {
    gEmails = storageService.load(_KEY, gDefaultEmails)
    save()
}

function _createEmail(sender, subject, body, isRead=false) {
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
    //if no emails?todo
    return Promise.resolve(emails);
}

function getById(emailId){
    var email= gEmails.find(email=>email.id===emailId)
    return Promise.resolve(email)
}

function _getIdxById(id){
    return gEmails.findIndex(email=>email.id===id)
}

function removeById(emailId){
    const idx= _getIdxById(emailId)
    gEmails.splice(idx,1)
    save()
    return Promise.resolve('remove worked')
}

function save(){
    storageService.store(_KEY, gEmails)
}

function countUnReadEmails(){
    var unreadCount=0;
    gEmails.forEach(email => {
        if(!email.isRead) ++unreadCount});
    return unreadCount
}

function toggleIsRead(id){
    const idx= _getIdxById(id)
    gEmails[idx].isRead=!gEmails[idx].isRead
    save()
    return Promise.resolve(' toggle worked')
}

function addEmail(sender,subject,emailBody){
    const newEmail = _createEmail(sender,subject,emailBody)
    gEmails.unshift(newEmail)
    console.log('gemails:',gEmails)
    save()
}