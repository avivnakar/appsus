import storageService from '../../../services/storageService.js'
import utilService from '../../../services/utilService.js'

const _KEY = 'emails'

const gDefaultEmails = [
    _createEmail( 'baby@gmail.coo' , 'daddy', 'daddy shark ttotoototot dododo', false),
    _createEmail( 'shark@gmail.coo' , 'grandma', 'grandma shark ttotoototot dododo ododo ododod', false),
    _createEmail( 'aadd1@gmail.coo' , 'grandpa', 'grandpa shark ttotoototot oododod oodododoo ', true),
    _createEmail( '11s@gmail.coo' , 'mommy', 'mommy shark ttotootototo dododo ododo ododod', false),
    _createEmail( 'bb2@gmail.coo' , 'baby', 
    'baby shark ttotoototot dododo ododo ododod baby shark ttotoototot dododo ododo ododod baby shark ttotoototot dododo',
     true)
   
]

var gEmails = null
_createEmails();

export default {
    query,
    getById,
    removeById,
    countUnReadEmails,
    toggleIsRead
}

function _createEmails() {
    gEmails = storageService.load(_KEY, gDefaultEmails)
    save()
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
    //if no emails?todo
    return Promise.resolve(emails);
}

function getById(emailId){
    console.log('get by id: got id:',emailId)
    var email= gEmails.find(email=>email.id===emailId)
    return Promise.resolve(email)
}

function getIdxById(id){
    return gEmails.findIndex(email=>email.id===id)//todo retur promise if other cmps use this func
}

function removeById(emailId){
    const idx= getIdxById(emailId)
    gEmails.splice(idx,1)
    save()
}

function save(){
    storageService.store(_KEY, gEmails)
}

function countUnReadEmails(){
    var unreadCount=0;
    gEmails.forEach(email => {
        if(!email.isRead) ++unreadCount});
    console.log('unreadCount',unreadCount)
    return unreadCount
}

function toggleIsRead(id){
    const idx= getIdxById(id)
    gEmails[idx].isRead=!gEmails[idx].isRead
    save()
}