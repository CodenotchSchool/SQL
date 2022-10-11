const {Router} = require("express");
const router = Router();
const alumnoCtrl = require("../controllers/alumnos.controller");

router.get("/", alumnoCtrl.getStart);
router.get("/alumnos", alumnoCtrl.getAlumnos);
router.post("/alumnos", alumnoCtrl.postAlumnos);
router.put("/alumnos", alumnoCtrl.putAlumnos)
router.delete("/alumnos", alumnoCtrl.delAlumnos)
module.exports = router;