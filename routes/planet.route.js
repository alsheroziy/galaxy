const { Router } = require('express')
const { 
  getAllPlanets,
  createPlanet,
  getPlanetById,
  updatePlanet,
  deletePlanet
} = require('../controllers/planet.controller')
const upload = require('../utils/fileUpload')
const router = Router()
const { protected, adminAccess, apiKeyAccess } = require('../middlewares/auth')

router.get('/', apiKeyAccess, getAllPlanets)
router.post('/', protected, adminAccess, upload.single('image'), createPlanet)
router.get('/:id', apiKeyAccess, getPlanetById)
router.put('/:id', protected, adminAccess, updatePlanet)
router.delete('/:id', protected, adminAccess, deletePlanet)

module.exports = router