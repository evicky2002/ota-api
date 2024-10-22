# File Upload & Download API

This Node.js API allows you to upload a file (overwriting any previous one) and retrieve the most recently uploaded file. The uploaded files are stored in the `files/` directory.

## Features

- **POST /upload**: Upload a file. The new file will overwrite the previously uploaded file.
- **GET /download**: Retrieve the most recently uploaded file.

## Requirements

- Node.js
- Express
- Multer

## Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Create a `files/` directory in the root of the project. This is where uploaded files will be stored:

   ```bash
   mkdir files
   ```

4. Start the server:
   ```bash
   node server.js
   ```

## API Endpoints

### POST `/upload`

Uploads a file and saves it in the `files/` folder as `uploadedFile` with the same extension as the original file.

- **URL**: `/upload`
- **Method**: `POST`
- **Request**:
  - Form-data with a `file` field that contains the file to upload.
- **Example (using curl)**:

  ```bash
  curl -X POST http://localhost:3000/upload -F "file=@/path/to/your/file"
  ```

- **Response**:
  - `200 OK`: File uploaded and overwritten successfully.
  - `400 Bad Request`: No file uploaded.

### GET `/download`

Downloads the most recently uploaded file from the `files/` directory.

- **URL**: `/download`
- **Method**: `GET`

- **Response**:

  - `200 OK`: Sends the latest uploaded file.
  - `404 Not Found`: No file found.

- **Example (using curl)**:
  ```bash
  curl -X GET http://localhost:3000/download -O
  ```
