const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop } = require("./farm");

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
  test("Get revenue for crop, simple", () => {
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