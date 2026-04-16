# 💻 Real-Time Todo Management System

## 📌 Project Overview
The **Real-Time Todo Management System** is a web-based application developed using **Node.js, Express.js, and EJS**.  
It allows users to efficiently manage their daily tasks through a clean, responsive, and professional dashboard interface.

This project simulates a real-world productivity system where users can:
- Add tasks
- Track task progress
- Edit task details
- Delete tasks

---

## 🎯 Objective
The main objective of this project is to:
- Understand backend development using Express.js
- Implement CRUD operations (Create, Read, Update, Delete)
- Use EJS templating for dynamic UI rendering
- Manage application data using local array/object storage

---

## 🧩 Core Features

### ✅ Task Management
- Create new tasks with title, description, and priority
- Edit existing tasks
- Delete tasks from the system

### 📊 Dashboard
- Displays total number of tasks
- Shows count of pending and completed tasks
- Provides a quick overview of all activities

### 🔄 Task Status Flow
Each task follows a structured workflow:
```
Pending → In Progress → Completed
```

### 🎨 UI Features
- Responsive design using Bootstrap
- Clean dashboard cards
- Status badges for better visibility
- Smooth hover effects and modern UI styling

---

## 🖥️ Tech Stack

| Technology | Purpose |
|-----------|--------|
| Node.js | Backend runtime environment |
| Express.js | Web framework |
| EJS | Templating engine |
| Bootstrap | Responsive UI design |
| CSS | Custom styling |

---

## 📁 Project Structure

```
TodoApp
│── views
│   ├── partials
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │
│   ├── dashboard.ejs
│   ├── add-task.ejs
│   ├── edit-task.ejs
│
│── public
│   ├── css
│   │   └── style.css
│
│── app.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 🔹 Step 1: Open Project Folder
```bash
cd TodoApp
```

### 🔹 Step 2: Install Dependencies
```bash
npm install
```

### 🔹 Step 3: Run the Application
```bash
node app.js
```

### 🔹 Step 4: Open in Browser
```
http://localhost:3000
```

---

## 🧠 How It Works

### 🔸 Data Storage
- Tasks are stored in a local array
- Each task has a unique ID

### 🔸 Task Object Example
```json
{
  "id": 1,
  "title": "Prepare Report",
  "description": "Complete weekly report",
  "priority": "High",
  "status": "Pending"
}
```

### 🔸 Backend Flow
- Express handles routing and server logic
- EJS renders dynamic UI pages
- Form data is processed using middleware

---

## 🧪 Modules Implemented

| Module | Description |
|--------|------------|
| Dashboard | Displays task summary |
| Add Task | Create new tasks |
| Edit Task | Update task details |
| Delete Task | Remove tasks |
| Status System | Manage task progress |

---

## 🎯 Marking Criteria Covered

| Component | Status |
|----------|--------|
| Dashboard UI | ✅ |
| Add Task | ✅ |
| Edit & Update | ✅ |
| Delete | ✅ |
| Status System | ✅ |
| Project Structure | ✅ |
| UI Design | ✅ |

---

## 🚀 Future Enhancements
- Database integration (MongoDB)
- User authentication system
- Task search and filtering
- Real-time updates using WebSockets

---

## 👨‍💻 Author
- DHruv Surti

---

## 📄 License
This project is open-source and available under the MIT License.
