# Admin Panel Documentation

## Overview
The admin panel provides a complete administrative interface for managing the e-commerce platform. It includes authentication, dashboard, product management, order management, customer management, and analytics.

## Admin Credentials
- **Mobile**: 9455055675
- **Password**: Admin@123

## Features

### 1. Authentication
- Secure admin login with static credentials
- Protected routes that redirect to login if not authenticated
- Automatic logout functionality

### 2. Dashboard
- Overview statistics (sales, orders, products, customers)
- Recent orders table
- Quick access to key metrics

### 3. Product Management
- View all products with filtering and search
- Add new products with modal form
- Edit and delete product functionality
- Product status management (Active/Inactive)

### 4. Order Management
- View all orders with status tracking
- Order statistics (total, delivered, processing, cancelled)
- Filter orders by status, date range, and search
- Update order status functionality

### 5. Customer Management
- View customer database with contact information
- Customer statistics and analytics
- Filter customers by status and join date
- Customer order history and spending

### 6. Category Management
- Manage product categories
- Add, edit, and delete categories
- Category status management
- Product count per category

### 7. Analytics
- Sales overview with charts
- Top products analysis
- Traffic sources breakdown
- Customer demographics
- Recent activity feed

### 8. Settings
- General site settings (name, description, contact info)
- Notification preferences
- Security settings (maintenance mode, password change)
- Appearance settings (theme, colors)

## File Structure

```
src/
├── features/auth/
│   ├── AdminAuthSlice.js      # Admin authentication state management
│   └── AdminLoginForm.jsx     # Admin login form component
├── layouts/
│   └── AdminLayout.jsx        # Admin layout with sidebar navigation
├── pages/admin/
│   ├── AdminRedirect.jsx      # Redirect component for admin root
│   ├── Dashboard.jsx          # Admin dashboard
│   ├── Products.jsx           # Product management
│   ├── Orders.jsx             # Order management
│   ├── Customers.jsx          # Customer management
│   ├── Categories.jsx         # Category management
│   ├── Analytics.jsx          # Analytics and reports
│   └── Settings.jsx           # System settings
├── components/
│   └── ProtectedAdminRoute.jsx # Route protection component
└── router/
    └── AppRoutes.jsx          # Updated with admin routes
```

## Routes

### Admin Routes
- `/admin/login` - Admin login page
- `/admin/dashboard` - Main dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/customers` - Customer management
- `/admin/categories` - Category management
- `/admin/analytics` - Analytics and reports
- `/admin/settings` - System settings

## Usage

1. **Access Admin Panel**: Click on the user icon in the header and select "ADMIN PANEL"
2. **Login**: Use the provided credentials (9455055675 / Admin@123)
3. **Navigate**: Use the sidebar navigation to access different sections
4. **Logout**: Click the logout button in the top-right corner

## Security Features

- Protected routes that require authentication
- Automatic redirect to login for unauthenticated users
- Secure logout functionality
- Password change capability in settings

## Responsive Design

The admin panel is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## Customization

The admin panel can be easily customized by:
- Modifying the color scheme in the CSS
- Adding new sections to the sidebar navigation
- Extending the analytics with additional charts
- Adding more settings options

## Future Enhancements

Potential improvements include:
- Real-time notifications
- Advanced analytics with charts
- Bulk operations for products and orders
- Email templates for notifications
- User role management
- API integration for real data 