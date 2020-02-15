var getMappedValuesFromArray = function getMappedValuesFromArray(objs, key) {
    let results = [];
    for (let i = 0; i < objs.length; i++) {
        let p = getMappedValue(objs[i], key);
        results.push(p);
    }
    return results;
};
var getMappedValue = function getMappedValue(obj, key) {
    for (let prop in obj) {
        if (prop == key)
            return obj[prop];
    }
};
var getMappedKeysFromObject = function getMappedKeysFromObject(obj) {
    let results = [];
    for (let prop in obj) {
        results.push(prop);
    }
    return results;
};
var getDiffirenceBetweenTwoArrays = function getDiffirenceBetweenTwoArrays(arrBase, arrComparer) {
    let result = [];
    for (let i = 0; i < arrBase.length; i++) {
        let p = arrComparer.findIndex(x => x === arrBase[i]);
        if (p === -1)
            result.push(arrBase[i]);
    }
    return result;
};
module.exports = {
    getMappedValuesFromArray,
    getMappedValue,
    getMappedKeysFromObject,
    getDiffirenceBetweenTwoArrays
};
