# URL Shortener Project

## 🚀 Overview

This is a **URL Shortener** web application that allows users to shorten long URLs into short, unique URLs. It is built using **Node.js, Express, MongoDB, and Mongoose** for the backend and **HTML, CSS, and JavaScript** for the frontend.

## 🌟 Features

- Shorten any long URL to a unique short URL.
- Redirect users to the original URL when they access the short link.
- Track the number of clicks for each shortened URL.
- Fully responsive frontend using HTML5, CSS3, and JavaScript.
- Integrated with **MongoDB Atlas** for database storage.

---

## 🛠️ Technologies Used

### **Backend:**

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **Nanoid** - To generate short unique IDs
- **Dotenv** - For environment variables
- **Cors** - To handle cross-origin requests

### **Frontend:**

- **HTML5, CSS3, JavaScript**
- **Fully responsive UI**

---

## 📂 Project Structure

```
url_shortener/
│── backend/
│   ├── index.js         # Main backend server file
│   ├── .env             # Environment variables
│   ├── package.json     # Dependencies and scripts
│   ├── node_modules/    # Installed dependencies
│
│── frontend/
│   ├── index.html       # Main frontend file
│   ├── styles.css       # Styling file
│   ├── script.js        # Frontend logic
│
│── README.md            # Project documentation
```

---

## 🛠️ Installation & Setup

### **Prerequisites:**

- Install **Node.js** and **npm**.
- Create a **MongoDB Atlas** account and get your **MongoDB URI**.
- Install **Git** for version control.

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/yourusername/new-portfolio.git
cd url-shortener
```

### **2️⃣ Setup Backend**

```sh
cd backend
npm install  # Install backend dependencies
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file inside the `backend/` folder and add:

```
DATABASE_URL=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/
PORT=3000
```

### **4️⃣ Start the Backend Server**

```sh
npm start  # OR use 'npm run dev' for development mode
```

### **5️⃣ Setup Frontend**

Simply open `frontend/index.html` in a browser or use **Live Server** in VS Code.

---

## 📌 API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| POST   | `/api/short` | Shortens a given URL          |
| GET    | `/:shortUrl` | Redirects to the original URL |

---

## 🎯 How It Works

1. User enters a **long URL** in the input field.
2. The **backend API** generates a **unique short URL** using `nanoid`.
3. The short URL is stored in **MongoDB Atlas**.
4. When a user visits the short URL, they are **redirected** to the original URL.

---

## 🚀 Deployment

The backend can be deployed on:

- **Render** (Free hosting for Node.js backend)
- **Railway** (Easy MongoDB + Node.js hosting)
- **Vercel** or **Netlify** for frontend deployment

---

## 💡 Future Enhancements

- User authentication (Login/Signup)
- Custom short URLs
- QR Code generation for shortened URLs
- Analytics dashboard for tracking clicks

---

## 🤝 Contributing

Feel free to submit **issues** or **pull requests** to improve the project.

---

## 📜 License

This project is **open-source** under the **MIT License**.

---

## 🌟 Contact

If you have any questions, feel free to reach out via GitHub Issues.

Happy Coding! 🚀

