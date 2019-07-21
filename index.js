var recipes = {food : 'pizza'};

function updateObjectWithKeyAndValue(obj, key, value){
    return recipes, Object.assign({}, obj,{key: value})
    
}

console.log(updateObjectWithKeyAndValue(recipes, 'prop2', '2'));