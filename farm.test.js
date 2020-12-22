const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

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
      name: "corn",
      yield: 3,
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
//Zie hierboven nieuwe toegevoegde tests.