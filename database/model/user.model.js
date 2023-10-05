import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the User Schema
const userSchema = mongoose.Schema(
  {
    username: { type: String }, // User's username
    email: { type: String }, // User's email address
    password: { type: String }, // User's hashed password
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Middleware: Hash the user's password before saving
userSchema.pre('save', function (next) {
  let user = this;

  // Check if the user's password has been modified
  if (user.isModified('password')) {
    // Hash the user's password using bcrypt with a salt factor of 12
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        return next(err); // Handle hashing error
      }
      user.password = hash; // Replace the plain text password with the hash
      return next();
    });
  } else {
    return next(); // Continue without hashing if password is not modified
  }
});

// Method: Compare a provided password with the user's stored hashed password
userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      return next(err, false); // Handle comparison error
    }

    return next(null, match); // Return true (match) or false (no match)
  });
};

// Create the Mongoose model for "User"
const User = mongoose.model('User', userSchema);

export default User;
