// Middleware to assign role based on email containing a year
function roleAuth(req, res, next) {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    // Check for a 4-digit year (e.g., 2023) in the email (fix: removed word boundaries)
    const yearMatch = email.match(/(19|20)\d{2}/);
    req.role = yearMatch ? 'student' : 'mentor';
    next();
};
module.exports = {roleAuth};
