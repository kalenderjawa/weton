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

export { generatorTabelBobotWeton as tabelBobotWeton, hitungBobotWeton };
