/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - Name
 *       properties:
 *         Email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         Password:
 *           type: string
 *           description: The password of the user.
 *         Name:
 *           type: string
 *           description: The name of the user.
 *         verified:
 *           type: boolean
 *           default: false
 *           description: Indicates whether the user is verified.
 *         role:
 *           type: string
 *           default: User
 *           description: The role of the user.
 *       example:
 *         Email: user@example.com
 *         Password: mysecurepassword
 *         Name: John Doe
 *         verified: false
 *         role: User
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
 *             email_reg:
 *               type: string
 *               format: email
 *               description: The email address of the user for registration.
 *             password_reg:
 *               type: string
 *               description: The password of the user for registration.
 *             username_reg:
 *               type: string
 *               description: The username of the user for registration.
 *         example:
 *           email_reg: user@example.com
 *           password_reg: mysecurepassword
 *           username_reg: john_doe
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
 *             email_log:
 *               type: string
 *               format: email
 *               description: The email address of the user for login.
 *             password_log:
 *               type: string
 *               description: The password of the user for login.
 *         example:
 *           email_log: user@example.com
 *           password_log: mysecurepassword
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
 *             forgot_pass_email:
 *               type: string
 *               description: The username of the user for password reset.
 *         example:
 *           forgot_pass_email: john_doe
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
 *             new_password:
 *               type: string
 *               description: The new password for the user.
 *         example:
 *           hashedUniqueString: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *           new_password: mynewsecurepassword
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