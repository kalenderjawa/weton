/**
 * -----------------
 * 🔥Weton🔥
 * -----------------
 * Tabel bobot weton
 */

import { PASARAN_ARR, PASARAN } from "@kalenderjawa/pancawara";
import { DINTEN_ARR, DINTEN } from "@kalenderjawa/saptawara";

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
      dp.push({ d: y.urutan, p: x.urutan, b: hitungBobotWeton(y, x) });
    }
  }
  return dp;
}

export { generatorTabelBobotWeton as tabelBobotWeton, hitungBobotWeton };
