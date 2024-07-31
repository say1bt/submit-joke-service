const express = require("express");
const router = express.Router();
const { submitJoke, getAllJokes, getJokeById, updateJokeById, deleteJokeById } = require("../controllers/joke_controller");
const { submitJokeType, getAllJokeTypes, getJokeTypeById, updateJokeTypeById, deleteJokeTypeById } = require("../controllers/joke_type_controller");

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: API to manage jokes
 */

/**
 * @swagger
 * /api/joke:
 *   post:
 *     summary: Create a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Why did the scarecrow win an award? Because he was outstanding in his field."
 *               type:
 *                 type: string
 *                 example: "Comedy"
 *     responses:
 *       201:
 *         description: Joke created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 joke:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     content:
 *                       type: string
 *                     type:
 *                       type: string
 *       500:
 *         description: Failed to create joke
 */
router.post("/joke", submitJoke);

/**
 * @swagger
 * /api/jokes:
 *   get:
 *     summary: Retrieve all jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: List of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   content:
 *                     type: string
 *                   type:
 *                     type: string
 *       500:
 *         description: Failed to retrieve jokes
 */
router.get("/jokes", getAllJokes);

/**
 * @swagger
 * /api/joke/{id}:
 *   get:
 *     summary: Retrieve a joke by ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Joke details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 content:
 *                   type: string
 *                 type:
 *                   type: string
 *       404:
 *         description: Joke not found
 *       500:
 *         description: Failed to retrieve joke
 */
router.get("/joke/:id", getJokeById);

/**
 * @swagger
 * /api/joke/{id}:
 *   put:
 *     summary: Update a joke by ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Updated joke content"
 *               type:
 *                 type: string
 *                 example: "Humor"
 *     responses:
 *       200:
 *         description: Joke updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 joke:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     content:
 *                       type: string
 *                     type:
 *                       type: string
 *       404:
 *         description: Joke not found
 *       500:
 *         description: Failed to update joke
 */
router.put("/joke/:id", updateJokeById);

/**
 * @swagger
 * /api/joke/{id}:
 *   delete:
 *     summary: Delete a joke by ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Joke deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Joke not found
 *       500:
 *         description: Failed to delete joke
 */
router.delete("/joke/:id", deleteJokeById);

/**
 * @swagger
 * tags:
 *   name: Joke Types
 *   description: API to manage joke types
 */

/**
 * @swagger
 * /api/joke-type:
 *   post:
 *     summary: Create a new joke type
 *     tags: [Joke Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 example: "Comedy"
 *     responses:
 *       201:
 *         description: Joke Type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 jokeType:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     type:
 *                       type: string
 *       500:
 *         description: Failed to create joke type
 */
router.post("/joke-type", submitJokeType);

/**
 * @swagger
 * /api/joke-types:
 *   get:
 *     summary: Retrieve all joke types
 *     tags: [Joke Types]
 *     responses:
 *       200:
 *         description: List of joke types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   type:
 *                     type: string
 *       500:
 *         description: Failed to retrieve joke types
 */
router.get("/joke-types", getAllJokeTypes);

/**
 * @swagger
 * /api/joke-type/{id}:
 *   get:
 *     summary: Retrieve a joke type by ID
 *     tags: [Joke Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Joke Type details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 type:
 *                   type: string
 *       404:
 *         description: Joke Type not found
 *       500:
 *         description: Failed to retrieve joke type
 */
router.get("/joke-type/:id", getJokeTypeById);

/**
 * @swagger
 * /api/joke-type/{id}:
 *   put:
 *     summary: Update a joke type by ID
 *     tags: [Joke Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 example: "Humor"
 *     responses:
 *       200:
 *         description: Joke Type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 jokeType:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     type:
 *                       type: string
 *       404:
 *         description: Joke Type not found
 *       500:
 *         description: Failed to update joke type
 */
router.put("/joke-type/:id", updateJokeTypeById);

/**
 * @swagger
 * /api/joke-type/{id}:
 *   delete:
 *     summary: Delete a joke type by ID
 *     tags: [Joke Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Joke Type deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Joke Type not found
 *       500:
 *         description: Failed to delete joke type
 */
router.delete("/joke-type/:id", deleteJokeTypeById);

module.exports = router;
