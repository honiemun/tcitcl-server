# TCIT.cl Take-home Project API

Simple RESTful API that allows for the listing, creation and deletion of Post elements. Using Node.js, Express, PostgreSQL, Zod and Docker. Created for TCIT.cl. Best used with its front-end sister project.

## Endpoints

- GET /api/post
    - Returns HTTP code `200` with a list of existing Post elements.
- POST /api/post
    - Admits a name (string, <128 characters, required) and a description (string, nullable).
    - Returns HTTP code `200` with the created post, or a `400` with a ZodError if the input is invalid.
- DELETE /api/post:id
    - Returns HTTP code `204` on a successful deletion, or `404` if the post ID does not exist.

## Usage

This project uses Docker. To run the API and the Postgres database, run `docker compose build && docker compose up -d` on your terminal.