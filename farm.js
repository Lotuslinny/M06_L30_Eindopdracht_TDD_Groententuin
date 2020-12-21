const getYieldForPlant = (object) => {
  return object.name,
    object.yield
};

const getYieldForCrop = (object) => {
  /* console.log(object);
  console.log(object.crop);
  console.log(object.crop.name);
  console.log(object.crop.yield)
  console.log(object.numCrops); */
  return object.crop.yield * object.numCrops;
};


/* const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(resultArray.reduce(reducer)); 
 */





const getTotalYield = (object) => {
  //Functie Test 3!
  let crop1 = object.crops[0].crop.yield * object.crops[0].numCrops;
  let crop2 = object.crops[1].crop.yield * object.crops[1].numCrops;
  return crop1 + crop2;
};



module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};