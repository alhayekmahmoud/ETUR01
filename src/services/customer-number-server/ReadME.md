# ETUR API Documentation

## Reports

### Create a Report
**POST** `/reports`
- Body: `{ category, customerId, description, labels, owner, priority }`

### Get All Reports
**GET** `/reports`

### Get a Specific Report
**GET** `/reports/:id`

### Update a Report
**PUT** `/reports/:id`
- Body: `{ updates }`

### Delete a Report
**DELETE** `/reports/:id`

### Add a Comment to a Report
**POST** `/reports/:id/comments`
- Body: `{ author, message, type }`

### Close a Report
**POST** `/reports/:id/close`
- Body: `{ reason }`