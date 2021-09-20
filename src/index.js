/**
 * -----------------
 * 🔥Weton🔥
 * -----------------
 * Tabel bobot weton
 */

import { PASARAN_ARR } from "@kalenderjawa/pancawara";
import { DINTEN_ARR } from "@kalenderjawa/saptawara";

/**
 * @param {*} pasaran
 * @param {*} dino
 * @returns
 */
function hitungBobotWeton(pasaran, dino) {
  return pasaran.neptu + dino.bobot;
}

/**
 * @returns {Array}
 */
function generatorTabelBobotWeton() {
  let dp = [];

  for (let x of DINTEN_ARR) {
    for (let y of PASARAN_ARR) {
      dp.push({
        dino: x.dino,
        pasaran: y.pasaran,
        idx: [x.urutan, y.urutan],
        bobot: hitungBobotWeton(y, x),
      });
    }
  }
  return dp;
}

/**
 * Mengambil data langsug dari tabel weton
 * @param {Number} ud
 * @param {Number} up
 * @returns
 */
function cariBobotWeton(ud = 1, up = 1) {
  let data = generatorTabelBobotWeton().filter(
    (weton) => weton.idx[0] === ud && weton.idx[1] === up
  );
  return data[0]?.bobot;
}

export {
  generatorTabelBobotWeton as tabelBobotWeton,
  hitungBobotWeton,
  cariBobotWeton,
};
