import { _LEGI, PASARAN } from "@kalenderjawa/pancawara";
import { _AKAD, DINTEN } from "@kalenderjawa/saptawara";
import { tabelBobotWeton, hitungBobotWeton } from "../index.js";
import assert from "assert";

describe("tabelBobotWeton", () => {
  it("mengembalikan jumlah total weton", () => {
    assert.equal(tabelBobotWeton().length, 35);
  });
});

describe("hitungBobotWeton", () => {
  it("mengembalikan bobot angka suatu weton", () => {
    assert.equal(hitungBobotWeton(DINTEN.get(_AKAD), PASARAN.get(_LEGI)), 10);
  });
});
