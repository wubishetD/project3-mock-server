// controllers/loginController.js
const users = require('../data/users');

const loginUser = (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: 'Email/Username and Password are required.' });
  }

  // Determine if the identifier is an email or username
  const user = identifier.includes('@')
    ? users.find((u) => u.email === identifier) // Match by email
    : users.find((u) => u.username === identifier); // Match by username

  // Validate user and password
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email/username or password.' });
  }

  // Respond with success
  return res.json({
    message: 'Login successful.',
    data: {
      userType: user.userType,
      username: user.username,
      email: user.email,
    },
  });
};

module.exports = { loginUser };
