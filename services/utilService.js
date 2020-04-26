function makeId(length=3) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i=0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

/**
 * @param {any} id object attribute e.g. obj.id
 * @param {object[]} arr arr = [{},{},...]
 * @returns {number}  index of obj i.e. obj.id===id
 *
 *  */
function getIdxById(id,arr)
{
    return arr.findIndex(obj => obj.id===id)
}
export default {
    makeId,
    getIdxById
}

