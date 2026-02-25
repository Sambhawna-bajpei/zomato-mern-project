import React from 'react';
import '../styles/theme.css';

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">🍕 Zomato</div>
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join us as a Food Lover</p>
            <span className="auth-badge">User</span>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Create a strong password"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>

            <div className="form-checkbox-group">
              <input type="checkbox" id="terms" className="form-checkbox" />
              <label htmlFor="terms">
                I agree to the{' '}
                <a href="#" className="form-link">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <div className="auth-footer">
            <p className="auth-footer-text">Already have an account?</p>
            <div className="auth-footer-links">
              <a href="/user/login" className="footer-link">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
