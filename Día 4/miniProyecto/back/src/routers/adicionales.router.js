const {Router} = require("express");
const router = Router();
const adicionalesCtrl = require("../controllers/adicionales.controller");

router.get("/media", adicionalesCtrl.getMedia);
router.get("/apuntadas", adicionalesCtrl.getApuntadas);
router.get("/impartidas", adicionalesCtrl.getImpartidas)
module.exports = router;