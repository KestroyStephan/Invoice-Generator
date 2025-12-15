
-----

# 🧾 Invoicify - Smart Invoice Generator

**Invoicify** is a sleek, professional web-based invoice generation tool designed for freelancers and small businesses. It simplifies billing by allowing users to create, manage, and export beautiful invoices instantly, wrapped in a clean "Professional Glass" interface.

-----

## 🚀 Features

  * **⚡ Instant Invoice Creation:** Add line items, quantities, and prices with automatic subtotal, tax, and grand total calculations.
  * **📄 PDF Export:** One-click download to generate professional PDF invoices ready to send to clients.
  * **👥 Client Management:** Store client details (Name, Email, Address) for quick reuse in future invoices.
  * **🎨 Dynamic UI:** A responsive, user-friendly interface featuring subtle shadows, rounded corners, and a clean color palette.
  * **💾 History & Persistence:** Sign in to save your generated invoices and track payment statuses in the database.
  * **📱 Fully Responsive:** Optimized for editing invoices on desktops, tablets, and mobile phones.

-----

## 🛠️ Tech Stack

### **Frontend**

  * React.js (Create React App)
  * Tailwind CSS (Styling)
  * Boxicons (Icons)
  * Google Fonts (Inter)

### **Backend**

  * Node.js & Express.js
  * MongoDB & Mongoose (Data Persistence)
  * JWT (JSON Web Tokens for Auth)

### **Libraries Used**

  * **jspdf:** For converting the DOM elements into downloadable PDF files.
  * **html2canvas:** To render the invoice layout as an image for the PDF.
  * **Axios:** For handling HTTP requests between client and server.

-----

## ⚙️ Prerequisites

Before running the project, ensure you have the following installed:

1.  **Node.js** (v14 or higher)
2.  **MongoDB** (Running locally or using a MongoDB Atlas connection string)

-----

## 📥 Installation & Setup

### 1\. Clone the Repository

```bash
git clone https://github.com/stephankestroy/Invoice-Generator.git
cd Invoice-Generator
```

### 2\. Setup the Backend

Navigate to the root directory (where `server.js` is located).

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Create a .env file:**
    Create a file named `.env` in the root folder and add the following keys:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://127.0.0.1:27017/invoicify_db
    JWT_SECRET=your_jwt_secret_key
    ```

3.  **Start the Server:**

    ```bash
    npm start
    ```

    *You should see: 🚀 Server running at http://localhost:5000*

### 3\. Setup the Frontend

Navigate to the client folder.

1.  **Go to Client Directory:**

    ```bash
    cd client
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Start React App:**

    ```bash
    npm start
    ```

4.  **Open in Browser:**
    Go to `http://localhost:3000`

-----

## 📂 Project Structure

```text
Invoice-Generator/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # InvoiceForm, Preview, Dashboard
│   │   ├── pages/          # Home, History, Login
│   │   ├── App.js          # Main Component
│   │   └── index.css       # Tailwind Imports
│   └── package.json        # Frontend Dependencies
│
├── models/                 # Mongoose Models
│   ├── Invoice.js          # Schema for saved invoices
│   └── User.js             # Schema for user auth
│
├── routes/                 # API Routes
│   ├── invoiceRoutes.js    # CRUD for invoices
│   └── authRoutes.js       # Login/Register logic
│
├── server.js               # Main Backend Server
├── package.json            # Backend Dependencies
└── README.md               # Project Documentation
```

-----

## 🔮 Future Improvements

  - [ ] Add support for multiple currencies.
  - [ ] Implement "Send via Email" feature directly from the dashboard.
  - [ ] Add recurring invoice templates.
  - [ ] Integration with payment gateways (Stripe/PayPal).