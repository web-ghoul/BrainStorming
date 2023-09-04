/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         Email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *           example: user@example.com
 *         Password:
 *           type: string
 *           description: The password for the user.
 *           minLength: 5
 *           example: mysecretpassword
 *         Name:
 *           type: string
 *           description: The name of the user.
 *           example: JohnDoe
 *         Verified:
 *           type: boolean
 *           description: Indicates whether the user is verified.
 *           example: false
 *         Teams:
 *           type: array
 *           items:
 *             type: string
 *             description: The IDs of teams the user belongs to.
 *             format: ObjectId
 *           description: An array of team IDs the user belongs to.
 *           example: [6155f7cfcf971234567890ab, 6155f7cfcf971234567890cd]
 *         Image:
 *           type: string
 *           description: The URL to the user's profile image.
 *           example: https://example.com/profile-image.jpg
 *         About:
 *           type: string
 *           description: A brief description about the user.
 *           example: Software Developer and Music Enthusiast
 *         Bio:
 *           type: string
 *           description: The user's bio or additional information.
 *           example: Exploring the world of code and music.
 *       required:
 *         - Email
 *         - Password
 *         - Name
 *       example:
 *         Email: user@example.com
 *         Password: mysecretpassword
 *         Name: JohnDoe
 *         Verified: false
 *         Teams: [6155f7cfcf971234567890ab]
 *         Image: https://example.com/profile-image.jpg
 *         About: Software Developer and Music Enthusiast
 *         Bio: Exploring the world of code and music.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     VerifyAccount:
 *       type: object
 *       required:
 *         - userId
 *         - uniqueString
 *         - createdAt
 *         - expireAt
 *       properties:
 *         userId:
 *           type: string
 *           description: The ID of the user associated with the verification account.
 *         uniqueString:
 *           type: string
 *           description: A unique string for account verification.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the verification account was created.
 *         expireAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the verification account will expire.
 *       example:
 *         userId: 123456789
 *         uniqueString: abcdef123456
 *         createdAt: "2023-08-22T12:00:00Z"
 *         expireAt: "2023-08-30T12:00:00Z"
 */

/**
 * @swagger
 * /register:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user
 *     description: Register a new user with the provided email, password, and username.
 *     parameters:
 *       - in: body
 *         name: registrationData
 *         description: The registration data for the new user.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *               description: The email address of the user for registration.
 *             password:
 *               type: string
 *               description: The password of the user for registration.
 *             username:
 *               type: string
 *               description: The username of the user for registration.
 *         example:
 *           email: user@example.com
 *           password: mysecurepassword
 *           username: john_doe
 *     responses:
 *       200:
 *         description: User successfully registered.
 *         content:
 *           application/json:
 *             example:
 *               message: Registration successful. Verification email sent.
 *       400:
 *         description: Bad request or validation error.
 *         content:
 *           application/json:
 *             example:
 *               error: Validation failed. Please check your input.
 *       403:
 *         description: Email already used.
 *         content:
 *           application/json:
 *             example:
 *               message: Email Already Used!
 *       404:
 *         description: Error while registering user.
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred while registering the user.
 *       402:
 *         description: Verification email already sent for forgot password.
 *         content:
 *           application/json:
 *             example:
 *               message: You have already sent a verification email.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

/**
 * @swagger
 * /verify/{userId}/{uniqueString}:
 *   get:
 *     tags: [Authentication]
 *     summary: Verify user email
 *     description: Verify user email using the provided userId and uniqueString.
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The ID of the user to be verified.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: uniqueString
 *         description: The unique string for email verification.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email successfully verified.
 *         content:
 *           application/json:
 *             example:
 *               message: Email verified successfully.
 *       403:
 *         description: Verification failed.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification failed.
 *       404:
 *         description: Verification link expired or user not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification link expired or user not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Authentication]
 *     summary: User login
 *     description: Authenticate user credentials and generate a JWT token for authorized access.
 *     parameters:
 *       - in: body
 *         name: loginData
 *         description: The login credentials for the user.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *               description: The email address of the user for login.
 *             password:
 *               type: string
 *               description: The password of the user for login.
 *         example:
 *           email: user@example.com
 *           password: mysecurepassword
 *     responses:
 *       200:
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful.
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (JWT token)
 *               role: User
 *               csrfToken: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *       403:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             example:
 *               message: Email is not verified or Username or Password is incorrect.
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Username or Password is incorrect.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

/**
 * @swagger
 * /ForgotPassword:
 *   post:
 *     tags: [Authentication]
 *     summary: Request password reset
 *     description: Send a verification email to initiate the password reset process.
 *     parameters:
 *       - in: body
 *         name: resetData
 *         description: The username of the user requesting password reset.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: The username of the user for password reset.
 *         example:
 *           email: john_doe
 *     responses:
 *       200:
 *         description: Password reset email sent.
 *         content:
 *           application/json:
 *             example:
 *               message: Password reset email sent. Check your inbox.
 *       402:
 *         description: Password reset email already sent.
 *         content:
 *           application/json:
 *             example:
 *               message: You have already sent a password reset email.
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               message: User isn't Exist!
 *       403:
 *         description: Error occurred.
 *         content:
 *           application/json:
 *             example:
 *               message: Error!
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

// Your controller code...

/**
 * @swagger
 * /reset_password/{userId}/{uniqueString}:
 *   get:
 *     tags: [Authentication]
 *     summary: Respond to password reset request
 *     description: Respond to a password reset request using the provided userId and uniqueString.
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The ID of the user requesting password reset.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: uniqueString
 *         description: The unique string for password reset.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Password reset response received.
 *         content:
 *           application/json:
 *             example:
 *               hashedUniqueString: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *       403:
 *         description: Verification failed.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification failed.
 *       404:
 *         description: Verification link expired or user not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification link expired or user not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

/**
 * @swagger
 * /ResetPassword:
 *   put:
 *     tags: [Authentication]
 *     summary: Reset user password
 *     description: Reset user password using the provided hashed unique string and new password.
 *     parameters:
 *       - in: body
 *         name: resetPasswordData
 *         description: The hashed unique string and new password for password reset.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             hashedUniqueString:
 *               type: string
 *               description: The hashed unique string for password reset.
 *             password:
 *               type: string
 *               description: The new password for the user.
 *         example:
 *           hashedUniqueString: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *           password: mynewsecurepassword
 *     responses:
 *       200:
 *         description: Password successfully reset.
 *         content:
 *           application/json:
 *             example:
 *               status: success
 *               message: Password changed successfully.
 *       400:
 *         description: Error occurred while resetting password.
 *         content:
 *           application/json:
 *             example:
 *               message: Error while resetting the password.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Team management endpoints
 */

/**
 * @swagger
 * /Teams:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the team.
 *               password:
 *                 type: string
 *                 description: The password for the team.
 *             required:
 *               - name
 *               - password
 *     responses:
 *       200:
 *         description: Team created successfully.
 *       401:
 *         description: Unauthorized, token failed or no token provided.
 *       402:
 *         description: This Name Already Used.
 *       404:
 *         description: Error while creating the team.
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/protect:
 *   x-swagger-router-controller: protectMiddleware
 *   post:
 *     summary: Middleware for protecting routes
 *     description: Middleware that verifies the provided JWT token to protect routes.
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Bearer token obtained after successful login.
 *         example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Token is valid, user is authorized.
 *       401:
 *         description: Token is invalid or missing, user is unauthorized.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Team:
 *       type: object
 *       properties:
 *         Name:
 *           type: string
 *           description: The name of the team.
 *           example: MyTeam
 *         Password:
 *           type: string
 *           description: The password for the team.
 *           example: mysecretpassword
 *         Members:
 *           type: array
 *           items:
 *             type: string
 *             description: The names or IDs of team members.
 *           description: An array of team members' names or IDs.
 *           example: [JohnDoe, JaneSmith]
 *         Image:
 *           type: string
 *           description: The URL to the team's image.
 *           example: https://example.com/team-image.jpg
 *       required:
 *         - Name
 *         - Password
 *       example:
 *         Name: MyTeam
 *         Password: mysecretpassword
 *         Members: [JohnDoe, JaneSmith]
 *         Image: https://example.com/team-image.jpg
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Idea:
 *       type: object
 *       properties:
 *         Idea:
 *           type: string
 *           description: The main idea or title of the idea.
 *           example: New App Feature
 *         Description:
 *           type: string
 *           description: A description of the idea.
 *           example: Implement a user-friendly interface for the new app feature.
 *         Images:
 *           type: array
 *           items:
 *             type: string
 *             description: URLs to images related to the idea.
 *           description: An array of image URLs related to the idea.
 *           example: [https://example.com/image1.jpg, https://example.com/image2.jpg]
 *         Files:
 *           type: array
 *           items:
 *             type: string
 *             description: URLs to files related to the idea.
 *           description: An array of file URLs related to the idea.
 *           example: [https://example.com/file1.pdf, https://example.com/file2.doc]
 *         Team:
 *           type: string
 *           description: The ID of the team associated with the idea.
 *           format: ObjectId
 *           example: 6155f7cfcf971234567890ab
 *         Record:
 *           type: string
 *           description: A record or reference related to the idea.
 *           example: Meeting notes from brainstorming session.
 *         WrittenBy:
 *           type: string
 *           description: The name of the person who wrote the idea.
 *           example: JohnDoe
 *       required:
 *         - Idea
 *         - Team
 *       example:
 *         Idea: New App Feature
 *         Description: Implement a user-friendly interface for the new app feature.
 *         Images: [https://example.com/image1.jpg, https://example.com/image2.jpg]
 *         Files: [https://example.com/file1.pdf, https://example.com/file2.doc]
 *         Team: 6155f7cfcf971234567890ab
 *         Record: Meeting notes from brainstorming session.
 *         WrittenBy: JohnDoe
 */

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Team management endpoints
 */

/**
 * @swagger
 * /EnterTeam/{id}:
 *   get:
 *     summary: Check if user is part of a team
 *     tags: [Teams]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the team.
 *     responses:
 *       200:
 *         description: Successfully entered the team.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Entered team successfully.
 *       403:
 *         description: User is not part of the team or access denied.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: FLAG{THE_EAZY_FLAG}
 */

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Team management endpoints
 */

/**
 * @swagger
 * /JoinTeam:
 *   patch:
 *     summary: Join a team
 *     tags: [Teams]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: The password of the team.
 *                 example: mysecretpassword
 *               teamId:
 *                 type: string
 *                 description: The ID of the team.
 *                 example: 6155f7cfcf971234567890ab
 *     responses:
 *       200:
 *         description: Successfully joined the team.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Joined team successfully!
 *       403:
 *         description: User is already part of the team or password is incorrect.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Already joined the team or Password is incorrect.
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User profile endpoints
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /Profile/{id}:
 *   get:
 *     summary: Get user profile by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *         description: The ID of the user profile to retrieve.
 *     responses:
 *       200:
 *         description: User profile retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   description: User profile data.
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: User's ID.
 *                         example: 6155f7cfcf971234567890ab
 *                       Email:
 *                         type: string
 *                         description: User's email.
 *                         example: user@example.com
 *                       Name:
 *                         type: string
 *                         description: User's name.
 *                         example: John Doe
 *                       Verified:
 *                         type: boolean
 *                         description: User's verification status.
 *                         example: true
 *                       Teams:
 *                         type: array
 *                         description: List of team IDs the user is a member of.
 *                         items:
 *                           type: string
 *                           example: 6155f7cfcf971234567890cd
 *                       Image:
 *                         type: string
 *                         description: URL of the user's profile image.
 *                         example: http://example.com/profile.jpg
 *                       About:
 *                         type: string
 *                         description: User's profile about text.
 *                         example: Software Engineer
 *                       Bio:
 *                         type: string
 *                         description: User's bio text.
 *                         example: Coding enthusiast
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: User not found !
 */

/**
 * @swagger
 * tags:
 *   name: Ideas
 *   description: Idea management endpoints
 */

/**
 * @swagger
 * /Ideas:
 *   post:
 *     summary: Create a new idea
 *     tags: [Ideas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               idea:
 *                 type: string
 *                 description: The idea description.
 *                 example: An innovative idea.
 *               description:
 *                 type: string
 *                 description: Additional description for the idea.
 *                 example: A detailed explanation of the idea.
 *               team:
 *                 type: string
 *                 description: The ID of the team associated with the idea.
 *                 example: 6155f7cfcf971234567890ab
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: An array of files related to the idea.
 *                 example: ["file1.pdf", "file2.docx"]
 *     responses:
 *       200:
 *         description: Idea added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Idea added successfully.
 *       400:
 *         description: Missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Please fill Brainwave.
 *       500:
 *         description: Error while uploading files and images.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Error while uploading files and images!
 */

/**
 * @swagger
 * tags:
 *   name: Ideas
 *   description: Idea management endpoints
 */

/**
 * @swagger
 * /Ideas/{id}:
 *   get:
 *     summary: Display ideas by team ID
 *     tags: [Ideas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the team.
 *         example: 6155f7cfcf971234567890ab
 *     responses:
 *       200:
 *         description: Successfully retrieved ideas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   description: List of ideas for the specified team.
 *                   items:
 *                     $ref: '#/components/schemas/Idea'
 *       404:
 *         description: Ideas not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Ideas not found.
 */

/**
 * @swagger
 * tags:
 *   name: Ideas
 *   description: Idea management endpoints
 */

/**
 * @swagger
 * /DeleteIdeas/{id}:
 *   delete:
 *     summary: Delete an idea by ID
 *     tags: [Ideas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the idea to be deleted.
 *         example: 6155f7cfcf971234567890ab
 *     responses:
 *       200:
 *         description: Idea deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Data deleted successfully.
 *       403:
 *         description: Access denied or data not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Access denied or data not found.
 */

/**
 * @swagger
 * tags:
 *   name: Ideas
 *   description: Idea management endpoints
 */

/**
 * @swagger
 * /updateIdea/{id}:
 *   put:
 *     summary: Update an idea by ID
 *     tags: [Ideas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the idea to be updated.
 *         example: 6155f7cfcf971234567890ab
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             idea:
 *               type: string
 *               description: Updated idea content.
 *               example: New idea content.
 *             description:
 *               type: string
 *               description: Updated idea description.
 *               example: New idea description.
 *     responses:
 *       200:
 *         description: Idea updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Data updated successfully.
 *       403:
 *         description: Access denied or data not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Access denied or data not found.
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /uploadProfileImage:
 *   patch:
 *     summary: Upload profile image
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         required: true
 *         description: The image file to be uploaded for the profile picture.
 *     responses:
 *       200:
 *         description: Image updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Image updated successfully !
 *                 data:
 *                   type: object
 *                   description: Updated user data with new profile image URL.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: User's ID.
 *                       example: 6155f7cfcf971234567890ab
 *                     Email:
 *                       type: string
 *                       description: User's email.
 *                       example: user@example.com
 *                     Name:
 *                       type: string
 *                       description: User's name.
 *                       example: John Doe
 *                     Image:
 *                       type: string
 *                       description: URL of the updated profile image.
 *                       example: http://example.com/profile.jpg
 *       404:
 *         description: Image not provided or user not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: You have to set an image.
 *       500:
 *         description: Error while uploading files and images.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Error while uploading files and images !
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /google:
 *   get:
 *     summary: Authenticate with Google using OAuth 2.0
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Redirects the user to the Google OAuth consent page.
 *         headers:
 *           Location:
 *             schema:
 *               type: string
 *               description: URL to the Google OAuth consent page.
 *               example: https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=profile%20email&state=YOUR_STATE
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /facebook:
 *   get:
 *     summary: Authenticate with Facebook using OAuth 2.0
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Redirects the user to the Facebook OAuth consent page.
 *         headers:
 *           Location:
 *             schema:
 *               type: string
 *               description: URL to the Facebook OAuth consent page.
 *               example: https://www.facebook.com/v12.0/dialog/oauth?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email
 */



/**
 * @swagger
 * /uploadBackgroundPic:
 *   patch:
 *     summary: Upload a background picture for the user's profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: files
 *         type: file
 *         required: true
 *         description: The background image to upload.
 *     responses:
 *       200:
 *         description: Background image updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: Image updated successfully!
 *                 data:
 *                   type: object
 *                   description: Updated user profile data.
 *                   $ref: '#/components/schemas/UserProfile'
 *       404:
 *         description: Image not uploaded or user not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: You have to set an image.
 *       500:
 *         description: Error while uploading files and images.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Error while uploading files and images!
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: The background image to upload.
 *             required:
 *               - files
 */


/**
 * @swagger
 * /updateProfile:
 *   patch:
 *     summary: Update user profile information
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bio:
 *                 type: string
 *                 description: User's bio.
 *               about:
 *                 type: string
 *                 description: User's about information.
 *             required:
 *               - bio
 *               - about
 *     responses:
 *       200:
 *         description: User profile updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: Data updated successfully.
 *                 data:
 *                   type: object
 *                   description: Updated user profile data.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: User's unique identifier.
 *                     Email:
 *                       type: string
 *                       description: User's email address.
 *                     Name:
 *                       type: string
 *                       description: User's name.
 *                     Verified:
 *                       type: boolean
 *                       description: Indicates if the user is verified.
 *                     Bio:
 *                       type: string
 *                       description: User's bio information.
 *                     About:
 *                       type: string
 *                       description: User's about information.
 *       403:
 *         description: Access denied or data not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Access denied or data not found.
 */

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Team information
 */

/**
 * @swagger
 * /getTeamInfo/{id}:
 *   get:
 *     summary: Get team information by ID
 *     tags: [Teams]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the team to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Team information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: Team information.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: Team's unique identifier.
 *                     Name:
 *                       type: string
 *                       description: Team's name.
 *                     Members:
 *                       type: array
 *                       description: List of team members' usernames.
 *                     Image:
 *                       type: string
 *                       description: URL of the team's image.
 *       403:
 *         description: Access denied or team not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Access denied or team not found.
 */

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Team management
 */

/**
 * @swagger
 * /deleteTeam/{id}:
 *   delete:
 *     summary: Delete a team by ID
 *     tags: [Teams]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the team to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Team deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: Team deleted successfully!
 *       403:
 *         description: Access denied or not authorized to delete the team.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: You are not authorized to delete the team.
 *       404:
 *         description: Team not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Team not found.
 */


/**
 * @swagger
 * /uploadTeamImage/{id}:
 *   patch:
 *     summary: Upload a team image by ID
 *     tags: [Teams]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the team to upload an image for.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The image file to upload.
 *     responses:
 *       '200':
 *         description: Image updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: Image updated successfully!
 *                 data:
 *                   type: object
 *                   description: Updated team data.
 *                   example: {} # Example team data
 *       '403':
 *         description: Access denied or not authorized to update the team image.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: You are not authorized to update the team image.
 *       '404':
 *         description: Team not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Team not found.
 */
