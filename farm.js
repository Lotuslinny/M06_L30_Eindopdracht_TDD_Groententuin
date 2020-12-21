const getYieldForPlant = (object) => {
  return object.name,
    object.yield
};

const getYieldForCrop = (object) => {
  return object.crop.yield * object.numCrops;
};

const getTotalYield = (object) => {
  let totalYield = 0;
  for (i = 0; i < object.crops.length; i++) {
    totalYield = totalYield + (object.crops[i].crop.yield * object.crops[i].numCrops);
  }
  return totalYield;
};

const getCostsForCrop = (object) => {
  return object.crop.costs * object.numCrops;
};



module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop
};