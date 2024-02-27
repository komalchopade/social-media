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
## Technologies Used
Node.js
Express.js
Body-parser



