User Management Dashboard

A React-based user management dashboard that allows administrators to manage users efficiently with features like adding, editing, deleting, sorting, searching, and paginating user data. The dashboard is styled with pastel colors for a clean and modern user experience.

🌟 Project Overview

The User Management Dashboard is a single-page application built with React, designed to manage user data dynamically. It provides an intuitive interface for admins to perform essential CRUD operations on user data.

Key Features:

Add New Users: Add user details with a modal form.
Edit Existing Users: Update user details in a modal form.

Delete Users: Remove user entries with a single click.

Search Functionality: Search users by name, email, or role.

Sorting: Sort users alphabetically by name, email, or role.

Pagination: Browse user data through pages, improving navigation in larger datasets.

Responsive Design: Fully responsive layout for desktop, tablet, and mobile devices.

Clean Pastel-Themed UI: Improved styling with hover effects and pastel colors for better user experience.

🛠️ Technologies Used
React: Core framework for building the application.
Bootstrap: For responsive and pre-designed components.
CSS: Custom styles to enhance the UI.

🚀 Getting Started
Follow these instructions to set up the project on your local machine.

Prerequisites:
Ensure you have the following installed:

Node.js (v14 or later)
npm or yarn (package manager)
Installation:
Clone the Repository:

git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard

Install Dependencies:
npm install

Start the Development Server:
npm start

This will start the app on http://localhost:3000.

Build for Production (optional):
npm run build

📋 Folder Structure

/src
 ├── components
 │    ├── AddUserModal.js       # Component for adding new users
 │    ├── EditUserModal.js      # Component for editing users
 │    └── UsersTable.js         # Main table component for listing users
 ├── App.js                     # Entry point of the app
 ├── index.js                   # Renders the React app
 ├── UsersTable.css             # Custom CSS for styling
 └── data.js                    # Sample user data (optional)

⚙️ Features Explained
CRUD Operations:

Add User: Click on the "Add User" button to open a modal. Enter user details and click "Save."

Edit User: Click the "Edit" button next to a user to open a modal and update details.

Delete User: Remove a user by clicking the "Delete" button.

Sorting:
Click on the column headers (Name, Email, Role) to sort the users alphabetically.
Toggle between ascending (↑) and descending (↓) order.

Search:
Use the search bar at the top of the table to filter users dynamically by name, email, or role.

Pagination:
Data is displayed in chunks of 5 users per page.
Navigate through pages using the pagination control below the table.

Styling:
Aesthetic improvements with pastel colors and hover effects.
Fully responsive for optimal usability on various devices.

🎨 Custom Styles
The application uses a pastel theme to improve the user experience. Custom CSS in UsersTable.css includes:

Pastel colors for table headers and buttons.
Hover effects for better interactivity.
Enhanced pagination styling.

🔧 Customizing the Project
Adding More Features:

You can extend the search functionality to include advanced filters.
Add bulk actions (e.g., delete multiple users).

Styling Enhancements:
Replace Bootstrap with a custom CSS framework like TailwindCSS for more customization.

Integrating APIs:
Replace the static users array with an API for real-time data management.

🐛 Troubleshooting
Issue: App fails to start after installation.
Solution: Ensure Node.js is installed and try running npm install again.

Issue: Table not displaying user data.
Solution: Check if the users prop is passed correctly in the parent component.
