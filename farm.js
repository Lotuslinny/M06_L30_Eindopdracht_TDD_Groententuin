const getYieldForPlant = (object) => (object.name, object.yield);

const getYieldForCrop = (object) => (object.crop.yield * object.numCrops);

const getTotalYield = (object) => {
  let totalYield = 0;
  for (i = 0; i < object.crops.length; i++) {
    totalYield = totalYield + (object.crops[i].crop.yield * object.crops[i].numCrops);
  }
  return totalYield;
};

const getCostsForCrop = (object) => (object.crop.costs * object.numCrops);

const getRevenueForCrop = (object) => (object.crop.revenue * object.numCrops);

const getProfitForCrop = (object) => (object.crop.profit * object.numCrops);

const getTotalProfit = (object) => {

  let totalProfit = 0;
  for (i = 0; i < object.crops.length; i++) {
    totalProfit = totalProfit + (object.crops[i].crop.profit * object.crops[i].numCrops);
  }
  return totalProfit;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
};