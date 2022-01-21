import sum from "./sum"

it("when a & b is number", () => {
    const result = sum(4,4);

    //result === 3

    expect(result).toBe(8)
});

it("when a & b is string", () => {

    const result = sum("4","4");
    expect(result).toBe(8);

})