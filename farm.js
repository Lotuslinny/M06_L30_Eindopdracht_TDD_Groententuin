const getYieldForPlant = (object) => {
  console.log("sun: " + object.sun);
  console.log("wind: " + object.wind);
  console.log("soilClay: " + object.soilClay);

  let o = object.crop.factors;
  let sunFactor = 0;
  for (var prop in o.sun) {
    if (prop == object.sun) {
      sunFactor = o.sun[prop];
      break;
    }
  }
  let windFactor = 0;
  for (var prop in o.wind) {
    if (prop == object.wind) {
      windFactor = o.wind[prop];
      break;
    }
  }
  let soilClayFactor = 0;
  for (var prop in o.soilClay) {
    if (prop == object.soilClay) {
      soilClayFactor = o.soilClay[prop];
      break;
    }
  }
  /*   console.log("sunFactor: " + sunFactor);
    console.log("windFactor: " + windFactor);
    console.log("soilClayFactor: " + soilClayFactor); */
  return soilClayFactor * windFactor * sunFactor * object.crop.yield;

};

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