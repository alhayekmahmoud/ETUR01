wie starte ich das Projekt? 

Wie kann ich das Projekt installieren?

Technische Hinweise oder Entscheidungen die ihr festhalten möchtet.

how to run this projekt 

Start the Server
Run the following command to start the server: node index.js

Create a New Report
Request: POST http://localhost:3000/reports
Body (JSON):{
  "category": "Feedback",
  "customerId": "ETUR-CN-12341",
  "description": "This is a description",
  "labels": ["label1", "label2"],
  "owner": "Product Manager",
  "priority": 1
}

Get All Reports
Request: GET http://localhost:3000/reports

Get a Specific Report
Request: GET http://localhost:3000/reports/<id>

Update a Report
Request: PUT http://localhost:3000/reports/<id>
Body (JSON):{
  "state": "In Progress"
}


Add a Comment
Request:POST http://localhost:3000/reports/<id>/comments
Body (JSON):{
  "author": "Jens Reiner",
  "message": "This is a comment",
  "type": "developer"
}


Close a Report
Request:POST http://localhost:3000/reports/<id>/close

Body (JSON):{
  "reason": "Resolved"
}








