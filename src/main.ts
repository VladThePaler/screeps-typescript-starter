/*
  Kung Fu Klan's Screeps Code
  Written and maintained by -
    Jakesboy2
    UhmBrock

  Starting Jan 2019
*/

// ------ end imports
// @ts-ignore
import ConsoleCommands from "Helpers/ConsoleCommands";
// @ts-ignore
import EmpireManager from "Managers/EmpireManager";
// @ts-ignore
import MemoryManager from "Managers/MemoryManagement";
// @ts-ignore
import RoomManager from "Managers/RoomManager";
// @ts-ignore
import SpawnManager from "Managers/SpawnManager";
// @ts-ignore
import { ErrorMapper } from "utils/ErrorMapper";
// @ts-ignore
import UtilHelper from "Helpers/UtilHelper";

import { ERROR_FATAL, ERROR_ERROR, ERROR_INFO, ERROR_WARN } from "utils/Constants";

export const loop = ErrorMapper.wrapLoop(() => {

  UtilHelper.throwError("This is a test title", "This is where the body message would be", ERROR_WARN);
  // clean up memory first
  try { MemoryManager.runMemoryManager(); } catch (e) { console.log("<font color=\"#efdc0e\">Error running MEMORY manager:\n</font>","<font color=\"#e04e4e\">", e.stack, "</font>") }

  // run the empire and get all relevant info from that into memory
  try { EmpireManager.runEmpireManager(); } catch (e) { console.log("<font color=\"#efdc0e\">Error running EMPIRE manager:\n</font>","<font color=\"#e04e4e\">", e.stack, "</font>") }

  // run rooms
  try { RoomManager.runRoomManager(); } catch (e) { console.log("<font color=\"#efdc0e\">Error running ROOM manager:\n</font>","<font color=\"#e04e4e\">", e.stack, "</font>") }

  // run spawning
  try { SpawnManager.runSpawnManager(); } catch (e) { console.log("<font color=\"#efdc0e\">Error running SPAWN manager:\n</font>","<font color=\"#e04e4e\">", e.stack, "</font>") }
/*  */
  // -------- end managers --------
});
