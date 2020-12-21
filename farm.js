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
  let totalYield = 0;
  for (i = 0; i < object.crops.length; i++) {
    totalYield = totalYield + (object.crops[i].crop.yield * object.crops[i].numCrops);
  }
  return totalYield;
};



module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};