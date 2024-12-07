# Unhandled Error in Express.js POST Route

This repository demonstrates a common error in Express.js applications where a POST request to a route fails silently if the request body is missing expected data.  The specific error shown here is a 'Cannot read properties of undefined (reading 'name')' error, but it can manifest in different ways depending on the data structure accessed.

## Bug Description
The bug occurs in the `bug.js` file.  When a POST request is made to the `/user` endpoint without a `user` object or the `user.name` property in the request body, the server crashes without providing a meaningful error message to the client.

## Solution
The `bugSolution.js` file provides a corrected version.  It adds comprehensive error handling to gracefully manage situations where the request body is missing or malformed.