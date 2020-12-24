const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");
//you can not use different files, because the first four functions must be in farm.js, the code that musn't be changed demands it.
describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn", yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });
  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

//Test 1, total tests made: 4.
//calculate the costs for a crop:getCostsForCrop.
describe("getCostsForCrop", () => {
  test("Get costs for crop, simple", () => {
    const corn = {
      name: "corn",
      costs: 1,
    };
    const input = {
      crop: corn,
      numCrops: 30,
    };
    expect(getCostsForCrop(input)).toBe(30);
  });
  test("Get costs for crop, simple", () => {
    const tomatoes = {
      name: "tomatoes",
      costs: 1.5,
    };
    const input = {
      crop: tomatoes,
      numCrops: 30,
    };
    expect(getCostsForCrop(input)).toBe(45);
  });
  test("Get costs for crop, simple", () => {
    const avocados = {
      name: "avocados",
      costs: 2,
    };
    const input = {
      crop: avocados,
      numCrops: 20,
    };
    expect(getCostsForCrop(input)).toBe(40);
  });
});

//Test 2, total tests made: 7.
//calculate revenue of a crop (without environment factors): getRevenueForCrop
describe("getRevenueForCrop", () => {
  test("Get revenue for crop, simple", () => {
    const corn = {
      name: "corn",
      revenue: 2,
    };
    const input = {
      crop: corn,
      numCrops: 24,
    };
    expect(getRevenueForCrop(input)).toBe(48);
  });
  test("Get revenue for crop, simple with not.toBe", () => {
    const apples = {
      name: "apples",
      revenue: 2.5,
    };
    const input = { crop: apples, numCrops: 100 };
    expect(getRevenueForCrop(input)).not.toBe(200);
  });
  test("Get revenue for crop, simple", () => {
    const tomatoes = {
      name: "tomatoes",
      revenue: 2,
    };
    const input = { crop: tomatoes, numCrops: 75 };
    expect(getRevenueForCrop(input)).toBe(150);
  });
});

//Test 3, total tests made: 10.
//caculate the profit of a crop (without environment factors): getProfitForCrop
describe("getProfitForCrop", () => {
  test("Get profit for crop, simple", () => {
    const pumpkin = {
      name: "pumpkin",
      profit: 4,
    };
    const input = {
      crop: pumpkin,
      numCrops: 33,
    };
    expect(getProfitForCrop(input)).toBe(132);
  });
  test("Get profit for crop, simple with not.toBe", () => {
    const apples = {
      name: "apples",
      profit: 1,
    };
    const input = { crop: apples, numCrops: 100 };
    expect(getProfitForCrop(input)).not.toBe(1000);
  });
  test("Get profit for crop, simple", () => {
    const tomatoes = {
      name: "tomatoes",
      profit: 0.25,
    };
    const input = { crop: tomatoes, numCrops: 320 };
    expect(getProfitForCrop(input)).toBe(80);
  });
});

//Test 4, total tests made: 13.
//calculate the profit of multiple crops (without environment factors): getTotalProfit
describe("getTotalProfit", () => {
  test("Calculate total profit with multiple crops", () => {
    const corn = {
      name: "corn",
      profit: 2,
    };
    const apples = {
      name: "apples",
      profit: 0.25,
    };
    const tomatoes = {
      name: "tomatoes",
      profit: 0.33,
    };
    const pumpkin = {
      name: "pumpkin",
      profit: 4,
    };
    const crops = [
      { crop: corn, numCrops: 100 },
      { crop: apples, numCrops: 80 },
      { crop: tomatoes, numCrops: 100 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalProfit({ crops })).toBe(261);
  });
  test("Calculate total profit with 0 amount", () => {
    const corn = {
      name: "corn",
      profit: 1,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalProfit({ crops })).toBe(0);
  });
  test("Calculate total profit with a string", () => {
    const pumpkin = {
      name: "pumpkin",
      profit: "2",
    };
    const crops = [{ crop: pumpkin, numCrops: 10 }];
    expect(getTotalProfit({ crops })).toStrictEqual(20);
  });
});

//Test 5, total tests made: 16.
//choose path: second path: check for (no) environment factors with the existing functions.

//Test 6, total tests made: 16.
// in addition also calculate an environment factor when caculating the yield(in kilo's) of a plant: getYieldForPlant.
describe("getYieldForPlantWithFactors", () => {
  test("Get yield for plant with an environment factor", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 0.5,
        },
      },
    };
    const environmentFactors = {
      crop: corn,
      sun: "low",
    };
    expect(getYieldForPlant(environmentFactors)).toBe(24);
  });
  test("Get yield for plant with an environment factor", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: 0.2,
          medium: 1,
          high: 0.5,
        },
      },
    };
    const environmentFactors = {
      crop: corn,
      sun: "medium",
    };
    expect(getYieldForPlant(environmentFactors)).toBe(30);
  });
  test("Get yield for plant with an environment factor", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: 0.2,
          medium: 1,
          high: 1.5,
        },
      },
    };
    const environmentFactors = {
      crop: corn,
      sun: "high",
    };
    expect(getYieldForPlant(environmentFactors)).toBe(45);
  });
});

//Test 7,8 (the first test with description "getYieldForPlant" is written above at the beginning of the page), total tests made: 19.
//also calculate all the environment factors when caculating the yield(in kilo's) of a plant: getYieldForPlant.
describe("getYieldForPlantWithFactors", () => {
  test("Get yield for plant with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 0.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const environmentFactors = {
      crop: corn,
      sun: "low",
      wind: "low",

    };
    expect(getYieldForPlant(environmentFactors)).toBe(24);
  });
  test("Get yield for plant with environment factors", () => {
    const avocados = {
      name: "avocados",
      yield: 50,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 0.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
        soilClay: {
          low: 1.1,
          medium: 0.7,
          high: 0.3,
        },
      },
    };
    const environmentFactors = {
      crop: avocados,
      sun: "low",
      wind: "low",
      soilClay: "low"
    };
    expect(getYieldForPlant(environmentFactors)).toBe(44);
  });
});

//test 9, total tests made 21.
// also calculate all the environment factors when caculating
// the yield(in kilo's) of a crop, getYieldForCrop.
describe("getYieldForCropWithEnvironmentFactors", () => {
  test("Get yield for crop, with environmentfactors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
        soilClay: {
          low: 1.1,
          medium: 0.7,
          high: 0.3,
        }
      }
    }
    const input = {
      crop: corn,
      numCrops: 30,
      sun: "high",
      wind: "medium",
      soilClay: "low"
    }
    expect(getYieldForCrop(input)).toBe(103.95);
  })
  test("Get yield for crop, with environmentfactors", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 5,
      factors: {
        wind: {
          low: 1.1,
          medium: 0.7,
          high: 0.4,
        },
        soilClay: {
          low: 1,
          medium: 0.7,
          high: 0.3,
        }
      }
    }
    const input = {
      crop: pumpkin,
      numCrops: 25,
      wind: "medium",
      soilClay: "high"
    }
    expect(getYieldForCrop(input)).toBe(26.25);
  })
});

//test 10, total tests made 23.
// also calculate all the environment factors when caculating
// the profit of a crop, getProfitForCrop.
describe("getProfitForCropWithEnvironmentFactors", () => {
  test("Get profit for crop, with environmentfactors", () => {
    const pumpkin = {
      name: "pumpkin",
      profit: 4,
      factors: {
        sun: {
          low: 80,
          medium: 110,
          high: 50,
        },
        wind: {
          low: 100,
          medium: 70,
          high: 40,
        },
      }
    };
    const input = {
      crop: pumpkin,
      numCrops: 33,
      sun: "medium",
      wind: "low"
    };
    expect(getProfitForCrop(input)).toBe(145.2);
  });
  test("Get profit for crop, with environmentfactors", () => {
    const apples = {
      name: "apples",
      profit: 2,
      factors: {
        sun: {
          low: 80,
          medium: 10,
          high: 50,
        },
        wind: {
          low: 100,
          medium: 70,
          high: 40,
        },
        soilClay: {
          low: 100,
          medium: 70,
          high: 10,
        }
      }
    };
    const input = {
      crop: apples,
      numCrops: 100,
      sun: "medium",
      wind: "low",
      soilClay: "high"
    };
    expect(getProfitForCrop(input)).toBe(2);
  });
});

//test 11, total tests made 25.
//also calculate all the environment factors when caculating
// the profit of multiple crops, getTotalProfit.