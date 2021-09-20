import { _LEGI, PASARAN } from "@kalenderjawa/pancawara";
import { _AKAD, DINTEN } from "@kalenderjawa/saptawara";
import { tabelBobotWeton, hitungBobotWeton, cariBobotWeton } from "../index.js";
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

describe("cariBobotWeton", () => {
  it("mencari bobot weton berdasarkan urutan hari", () => {
    /**
     * Urutan hari dimulai dari hari 1 => Senin,
     * Lihat paket @kalenderjawa/saptawara untuk mengetahui urutan hari.
     */
    assert.equal(cariBobotWeton(1, 1), 9);
  });
});
