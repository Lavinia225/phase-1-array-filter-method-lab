// Code your solution here
function findMatching(nameBase, specificName){
    let tempName = specificName.toLowerCase();
    let results = nameBase.filter(item => item.toLowerCase() === tempName)
    return results
}

function fuzzyMatch(nameBase, fuzzyName){
    return nameBase.filter(item => item.startsWith(fuzzyName))
}

function matchName(array, name){
    return array.filter(item => item.name === name)
}