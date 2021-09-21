/**
 * Test dengan Jest dan memakai ES Modules.
 */
import { _LEGI, PASARAN } from "@kalenderjawa/pancawara";
import { _AKAD, DINTEN } from "@kalenderjawa/saptawara";
import { tabelBobotWeton, hitungBobotWeton, cariBobotWeton } from "../index.js";

describe("tabelBobotWeton", () => {
  it("mengembalikan jumlah total weton", () => {
    expect(tabelBobotWeton().length).toEqual(35);
  });
});

describe("hitungBobotWeton", () => {
  it("mengembalikan bobot angka suatu weton", () => {
    expect(hitungBobotWeton(DINTEN.get(_AKAD), PASARAN.get(_LEGI))).toEqual(10)
  });
});

describe("cariBobotWeton", () => {
  it("mencari bobot weton berdasarkan urutan hari", () => {
    /**
     * Urutan hari dimulai dari hari 1 => Senin,
     * Lihat paket @kalenderjawa/saptawara untuk mengetahui urutan hari.
     */
    expect(cariBobotWeton(1, 1)).toEqual(9);
  });
});
