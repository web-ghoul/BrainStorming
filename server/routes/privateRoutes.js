const teamController = require("../controllers/teamControllers")
const ideaController = require("../controllers/ideasControllers")
const express = require('express')
const router = express.Router();
const protect = require('../middleware/authMiddleware')


/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Team operations
 * 
 * components:
 *   schemas:
 *     Team:
 *       type: object
 *       required:
 *         - Name
 *         - Password
 *       properties:
 *         Name:
 *           type: string
 *           description: The name of the team.
 *         Password:
 *           type: string
 *           description: The password for the team.
 */

/**
 * @swagger
 * /Teams:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       200:
 *         description: Team created successfully
 *       404:
 *         description: Team creation failed
 */
router.post("/Teams" , protect ,teamController.createTeam);
/**
 * @swagger
 * tags:
 *   name: Ideas
 *   description: Idea operations
 * 
 * components:
 *   schemas:
 *     Idea:
 *       type: object
 *       properties:
 *         Idea:
 *           type: string
 *           description: The idea itself.
 *         Description:
 *           type: string
 *           description: Description of the idea.
 *         Image:
 *           type: string
 *           description: URL of an image related to the idea.
 *         Points:
 *           type: integer
 *           description: Points associated with the idea.
 *         Team:
 *           type: string
 *           description: The team ID associated with the idea.
 *         WrittenBy:
 *           type: string
 *           description: The author of the idea.
 */

router.get("/Ideas/:id", protect ,ideaController.displayIdeas);

/**
 * @swagger
 * /Ideas/{id}:
 *   get:
 *     summary: Get a list of ideas for a specific team
 *     tags:
 *       - Ideas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the team
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Idea'
 * 
 * /Ideas:
 *   post:
 *     summary: Create a new idea
 *     tags:
 *       - Ideas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Idea'
 *           example:
 *             Idea: "New Idea"
 *             Description: "Description of the new idea"
 *             Image: "image-url.jpg"
 *             Points: 10
 *             Team: "team-id"
 *             WrittenBy: "Author Name"
 *     responses:
 *       200:
 *         description: Idea Added Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Error message
 */
router.post("/Ideas", protect ,ideaController.postIdeas);




module.exports = router;