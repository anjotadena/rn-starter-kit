describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test("Should have welcome text", async () => {
    await expect(element(by.text("Welcome to react"))).toBeVisible();
  });
});
