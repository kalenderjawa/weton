import { tabelBobotWeton } from "../index.js";
import assert from "assert";

describe("tabelBobotWeton", () => {
  it("mengembalikan jumlah total weton", () => {
    assert.equal(tabelBobotWeton().length, 35);
  });
});
