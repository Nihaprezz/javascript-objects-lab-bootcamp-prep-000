var recipes = {food : 'pizza'};

function updateObjectWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var testObject = Object.assign({}, Object);
  delete testObject[key];
  return testObject;
}