const {Router} = require("express");
const router = Router();
const notasCtrl = require("../controllers/notas.controller");

router.get("/notas", notasCtrl.getNotas);
router.post("/notas", notasCtrl.postNotas);
router.put("/notas", notasCtrl.putNotas)
router.delete("/notas", notasCtrl.delNotas)
module.exports = router;