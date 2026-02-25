import React from 'react';
import '../styles/theme.css';

const FoodPartnerRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">🍕 Zomato</div>
            <h1 className="auth-title">Partner With Us</h1>
            <p className="auth-subtitle">Register your restaurant</p>
            <span className="auth-badge">Food Partner</span>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label className="form-label">Restaurant Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your restaurant name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Full name of owner"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="business@restaurant.com"
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
              <label className="form-label">Restaurant Address</label>
              <input
                type="text"
                className="form-input"
                placeholder="Full address of restaurant"
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
              <input type="checkbox" id="terms-partner" className="form-checkbox" />
              <label htmlFor="terms-partner">
                I agree to the{' '}
                <a href="#" className="form-link">
                  Partner Terms
                </a>
              </label>
            </div>

            <button type="submit" className="auth-button">
              Register Restaurant
            </button>
          </form>

          <div className="auth-footer">
            <p className="auth-footer-text">Already a partner?</p>
            <div className="auth-footer-links">
              <a href="/food-partner/login" className="footer-link">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
