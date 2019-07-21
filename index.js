var recipes = {food : 'pizza'};

function updateObjectWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj,{[key]: value})
}

function updateObjectWithKeyAndValue2(obj, key, value){
    return Object.assign({}, obj,{key: value})
}

console.log(updateObjectWithKeyAndValue(recipes, 'prop2', '2'));
console.log(function updateObjectWithKeyAndValue2(rec, 'prop2', '2'));
