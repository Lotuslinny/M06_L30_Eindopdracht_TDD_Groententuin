const getYieldForPlant = (object) => {
  let soilClayFactor = 1;
  let sunFactor = 1;
  let windFactor = 1;
  if (typeof object.crop != "undefined") {
    let o = object.crop.factors;
    if (typeof o.sun !== 'undefined') {
      for (var prop in o.sun) {
        if (prop == object.sun) {
          sunFactor = o.sun[prop];
        }
      }
    };
    if (typeof o.wind !== 'undefined') {
      for (var prop in o.wind) {
        if (prop == object.wind) {
          windFactor = o.wind[prop];
        }
      }
    };
    if (typeof o.soilClay !== 'undefined')
      for (var prop in o.soilClay) {
        if (prop == object.soilClay) {
          soilClayFactor = o.soilClay[prop];
        }
      }
    return object.crop.yield * sunFactor * windFactor * soilClayFactor;
  }
  else {
    return object.yield
  }
};

const getYieldForCrop = (object) => {
  let soilClayFactor = 1;
  let sunFactor = 1;
  let windFactor = 1;
  if (typeof object.crop != "undefined") {
    let o = object.crop.factors;
    if (typeof o !== 'undefined') {
      for (var prop in o.sun) {
        if (prop == object.sun) {
          sunFactor = o.sun[prop];
        }
      }
    };
    if (typeof o !== 'undefined') {
      for (var prop in o.wind) {
        if (prop == object.wind) {
          windFactor = o.wind[prop];
        }
      }
    };
    if (typeof o !== 'undefined')
      for (var prop in o.soilClay) {
        if (prop == object.soilClay) {
          soilClayFactor = o.soilClay[prop];
        }
      }
    return (object.crop.yield * object.numCrops) * sunFactor * windFactor * soilClayFactor;
  }
  else {
    return object.crop.yield * object.numCrops;
  }
};


const getTotalYield = (object) => {
  let totalYield = 0;
  for (i = 0; i < object.crops.length; i++) {
    totalYield = totalYield + (object.crops[i].crop.yield * object.crops[i].numCrops);
  }
  return totalYield;
};

const getCostsForCrop = (object) => (object.crop.costs * object.numCrops);

const getRevenueForCrop = (object) => (object.crop.revenue * object.numCrops);

// Here I started to Not use decimals anymore. 
//Read:http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
const getProfitForCrop = (object) => {
  let sunFactor = 100;
  let windFactor = 100;
  let soilClayFactor = 100;
  if (typeof object.crop != "undefined") {
    let o = object.crop.factors;
    if (typeof o !== 'undefined') {
      for (var prop in o.sun) {
        if (prop == object.sun) {
          sunFactor = o.sun[prop];
        }
      }
    };
    if (typeof o !== 'undefined') {
      for (var prop in o.wind) {
        if (prop == object.wind) {
          windFactor = o.wind[prop];
        }
      }
    };
    if (typeof o !== 'undefined')
      for (var prop in o.soilClay) {
        if (prop == object.soilClay) {
          soilClayFactor = o.soilClay[prop];
        }
      }
    return (object.crop.profit * object.numCrops * sunFactor * windFactor * soilClayFactor) / 1000000;
  } else {
    console.log("Happy Newyear");
  }
};








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