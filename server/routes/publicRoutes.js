const teamController = require("../controllers/teamControllers")
const ideaController = require("../controllers/ideasControllers")
const express = require('express')
const router = express.Router();

/**
 * @swagger
 * /api/Teams:
 *   get:
 *     summary: Get a list of all teams
 *     tags: [Teams]
 *     responses:
 *       200:
 *         description: Successful response with the list of teams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Team'
 *       404:
 *         description: Teams not found
 */
router.get("/Teams",teamController.displayTeams);



module.exports = router;