import React, { useState } from 'react'

function UserLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          {/* Header */}
          <div className="auth-header">
            <div className="auth-title">Welcome Back</div>
            <div className="auth-subtitle">Sign in to your account</div>
          </div>

          {/* Form */}
          <form className="auth-form">
            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <div className="checkbox-group" style={{ margin: 0 }}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <label htmlFor="rememberMe" className="checkbox-label" style={{ marginBottom: 0 }}>
                  Remember me
                </label>
              </div>
              <a href="#" className="form-link" style={{ fontSize: '13px' }}>
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{ marginTop: '24px' }}>
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="form-divider">or continue with</div>

          {/* Social Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button type="button" className="btn btn-secondary">
              Google
            </button>
            <button type="button" className="btn btn-secondary">
              Apple
            </button>
          </div>

          {/* Footer */}
          <div className="auth-footer">
            Don't have an account?{' '}
            <a href="/user/register" className="form-link">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
