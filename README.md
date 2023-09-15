# Crud

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Configure your database connection in `app.js`.
4. Start the server: `npm start`.

## API Endpoints

### Create a new person

**POST** `/api`
Request Body:
```json
{
  "name": "Mark Essien"
}
Fetch details of a person
GET /api/:user_id

Modify the details of an existing person
PUT /api/:user_id
Request Body:

json
{
  "name": "Updated Name"
}
Remove a person
DELETE /api/:user_id

Sample Usage
Example request and response for each endpoint.

Create a new person
Fetch details of a person
Modify the details of an existing person
Remove a person