

export {
    isEmpty,
    isEmptyObj
 };
 
 function isEmpty(val) {
    const result = (val === undefined || val == null || val.length <= 0) ? true : false;
    return result
 }
 
 function isEmptyObj(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}