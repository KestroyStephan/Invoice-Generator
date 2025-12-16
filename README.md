
---

#🧾 React Invoice Generator**Invoice Generator** is a lightweight, real-time billing component designed to streamline the invoicing process. It features automatic calculations, dynamic line-item management, and a clean, responsive UI built with Tailwind CSS.

---

##🚀 Features* **➕ Dynamic Line Items:** Easily add or remove product rows with a single click.
* **🧮 Real-Time Math:** Automatically calculates Line Totals (Qty × Price), Subtotal, Tax, and Grand Total instantly as you type.
* **🎨 Modern UI:** A clean, professional layout styled with Tailwind CSS, featuring focus states and clear typography.
* **📱 Fully Responsive:** The table and input fields adapt seamlessly to desktops, tablets, and mobile screens.
* **⚛️ State Management:** Built using React `useState` hooks for robust data handling without external libraries.

---

##🛠️ Tech Stack###**Frontend*** React.js (Functional Components & Hooks)
* Tailwind CSS (Utility-first Styling)
* Heroicons (SVG Icons for actions)

###**Backend*** *N/A (Client-side logic only)*

---

##⚙️ PrerequisitesBefore running the project, ensure you have the following installed:

1. **Node.js** (v14 or higher)
2. **npm** or **yarn** package manager

---

##📥 Installation & Setup###1. Clone the Repository```bash
git clone https://github.com/stephankestroy/Invoice-Generator.git
cd Invoice-Generator

```

###2. Setup the ProjectNavigate to the project directory.

1. **Install Dependencies:**
```bash
npm install

```


*Ensure `tailwindcss` is configured in your project.*
2. **Start the Server:**
```bash
npm start

```


*You should see: 🚀 App running at http://localhost:3000*

---

##📂 Project Structure```text
Invoice-Generator/
│
├── src/
│   ├── components/
│   │   └── InvoiceGenerator.jsx    # Main Invoice Logic & UI
│   ├── App.js                      # Entry point
│   └── index.css                   # Tailwind directives
│
├── package.json                    # Dependencies
└── README.md                       # Project Documentation

```

---

##🔮 Future Improvements* [ ] Add "Download as PDF" functionality (using `jspdf`).
* [ ] Implement local storage to save invoice progress.
* [ ] Add currency selector (USD, EUR, GBP).
* [ ] Create a "Print Mode" CSS style.