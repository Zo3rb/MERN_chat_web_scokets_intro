/**
 * @swagger
 * /health-check:
 *   get:
 *     summary: Check the health of the server.
 *     description: Returns a status message indicating that the server is running.
 *     responses:
 *       200:
 *         description: Successful health check.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "ok"
 */
