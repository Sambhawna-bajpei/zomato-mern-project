import React from 'react';
import '../styles/theme.css';

const FoodPartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">🍕 Zomato</div>
            <h1 className="auth-title">Partner Login</h1>
            <p className="auth-subtitle">Manage your restaurant</p>
            <span className="auth-badge">Food Partner</span>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="business@restaurant.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-checkbox-group">
              <input type="checkbox" id="remember-partner" className="form-checkbox" />
              <label htmlFor="remember-partner">Remember me</label>
            </div>

            <a href="#" className="form-link" style={{ textAlign: 'right', fontSize: '13px' }}>
              Forgot Password?
            </a>

            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>

          <div className="auth-divider">or continue with</div>

          <div className="auth-footer">
            <p className="auth-footer-text">New to Zomato for Business?</p>
            <div className="auth-footer-links">
              <a href="/food-partner/register" className="footer-link">
                Register Restaurant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
