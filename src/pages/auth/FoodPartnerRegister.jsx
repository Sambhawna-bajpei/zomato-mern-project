import React, { useState } from 'react'

function FoodPartnerRegister() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    city: '',
    restaurantType: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          {/* Header */}
          <div className="auth-header">
            <div className="auth-title">Partner With Us</div>
            <div className="auth-subtitle">Register your restaurant</div>
          </div>

          {/* Form */}
          <form className="auth-form">
            {/* Business Details */}
            <div className="form-group">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your Restaurant"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
              />
            </div>

            {/* Contact Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@restaurant.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Location */}
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-input"
                placeholder="Select City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            {/* Restaurant Type */}
            <div className="form-group">
              <label className="form-label">Restaurant Type</label>
              <select
                className="form-input"
                value={formData.restaurantType}
                onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
              >
                <option value="">Select a type</option>
                <option value="casual">Casual Dining</option>
                <option value="fine">Fine Dining</option>
                <option value="fast">Fast Food</option>
                <option value="cafe">Café</option>
                <option value="bakery">Bakery</option>
                <option value="other">Other</option>
              </select>
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

            {/* Confirm Password */}
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            {/* Terms Checkbox */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="agreeTerms"
                className="form-checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              />
              <label htmlFor="agreeTerms" className="checkbox-label">
                I agree to the <a href="#" className="form-link">partner terms</a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{ marginTop: '24px' }}>
              Register Restaurant
            </button>
          </form>

          {/* Footer */}
          <div className="auth-footer">
            Already a partner?{' '}
            <a href="/food-partner/login" className="form-link">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
