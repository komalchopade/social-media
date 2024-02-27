# Instagram Posts Project

This project implements a simple API for managing Instagram-like posts.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Usage

1. Start the server using `npm start`.
2. Access the API endpoints to perform operations like fetching all posts, searching by like count or person's name, adding a new post, updating a post, and deleting a post.

## API Endpoints

- `GET /Instagram`: Get all Instagram posts.
- `GET /Instagram/like/:like`: Get a specific Instagram post by like count.
- `GET /Instagram/search/:PName`: Get all Instagram posts by person's name.
- `POST /Instagram`: Add a new post to Instagram.
- `PUT /Instagram/:id`: Update a post's profile name by ID.
- `DELETE /Instagram/:id`: Delete a post by ID.

## Sample Data

```json
[
  { "id": 1, "like": 1000, "PName": "John Doe" },
  { "id": 2, "like": 2500, "PName": "Jane Smith" }
]

## Technologies used

Node.js
Express.js
Body-parser

# LinkedIn-like Project

This project implements a simple API for managing LinkedIn-like user profiles and interactions.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Usage

1. Start the server using `npm start`.
2. Access the API endpoints to perform operations like fetching all profiles, searching by name, adding comments, creating a login ID, updating profiles, deleting profiles, and creating posts.

## API Endpoints

- `GET /Linkedin`: Get all LinkedIn profiles.
- `GET /linkedin/:Name`: Search for a LinkedIn profile by name.
- `PUT /Linkedin/:comment`: Add a comment to a profile.
- `POST /Linkedin/:loginId`: Create a login ID with a password and username.
- `PUT /Linkedin/:profile`: Update a profile.
- `DELETE /Linkedin/:profile`: Delete a profile.
- `POST /Linkedin/:mypost`: Create a post on LinkedIn.

## Sample Data

```json
[
  { "Name": "John Doe", "Comment": "Nice post" },
  { "Name": "Jane Doe", "Comment": "Great profile" }
]
Technologies Used
Node.js
Express.js
Body-parser

# WhatsApp-like Project

This project implements a simple API for managing WhatsApp-like statuses and chats.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Usage

1. Start the server using `npm start`.
2. Access the API endpoints to perform operations like fetching all statuses, searching by name, creating a new status, updating a status, and deleting a chat.

## API Endpoints

- `GET /whatsApp`: Get all WhatsApp statuses.
- `GET /whatsApp/:Name`: Search for a WhatsApp status by name.
- `POST /whatsApp/status`: Create a new WhatsApp status.
- `PUT /whatsApp/update`: Update a WhatsApp status.
- `DELETE /whatsApp/:chat`: Delete a WhatsApp chat.

## Sample Data

The sample data structure for WhatsApp statuses is as follows:

json
[
  { "Name": "John", "Status": "Hello, world!" },
  { "Name": "Jane", "Status": "Good morning!" }
]
Technologies Used
Node.js
Express.js
Body-parser




