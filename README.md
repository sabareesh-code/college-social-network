# College Social Network

## Project Documentation

### Features
- User authentication (sign up, login, logout)
- Profile management (create, update, view profile)
- Friend system (send, accept, and remove friend requests)
- Post creation (text and media posts)
- Commenting on posts
- Liking posts and comments
- Messaging system between users

### Tech Stack
- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Heroku

### Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/sabareesh-code/college-social-network.git
   cd college-social-network
   ```
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```
4. Set up environment variables for the backend in a `.env` file:
   ```bash
   PORT=5000
   MONGODB_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```
5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
6. Start the frontend:
   ```bash
   cd ../frontend
   npm start
   ```

### Project Structure
```
college-social-network/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

### API Endpoints
- **Authentication**
  - `POST /api/auth/signup` - User signup
  - `POST /api/auth/login` - User login
  - `GET /api/auth/logout` - User logout

- **Users**
  - `GET /api/users/:id` - Get user profile
  - `PUT /api/users/:id` - Update user profile

- **Friends**
  - `POST /api/friends/request` - Send friend request
  - `POST /api/friends/accept` - Accept friend request
  - `DELETE /api/friends/remove` - Remove friend

- **Posts**
  - `POST /api/posts` - Create a post
  - `GET /api/posts/:id` - Get post by id
  - `POST /api/posts/:id/comment` - Comment on a post
  - `POST /api/posts/:id/like` - Like a post\n
- **Messages**
  - `POST /api/messages` - Send a message
  - `GET /api/messages/:conversationId` - Get messages of a conversation
  
### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
