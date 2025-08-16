 – Asset Listing API

 # Asset Listing API

A simple Node.js + Express API to store and retrieve a list of assets in memory.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.

## Running the App
- Start the server with `node app.js`.
- The API runs on `http://localhost:4000`.

## Endpoints
- `POST /assets`: Add a new asset (body: `{ "name": "string", "location": "string", "value": number }`).
- `GET /assets`: List all assets (optional query: `?location=string` to filter).

## Example Usage
- Add asset: `POST /assets` with `{ "name": "Jishnu", "location": "Perinthalmanna", "value": 750000 }`.
- Get All: `GET /assets` 
- Get Filtered by location: `GET /assets?location=perinthalmanna`.


