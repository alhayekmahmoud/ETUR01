
ETUR Documentation

Project Outcome

1. View All Clients Section: Displays cards containing client data.
2. Add New Client Section: Includes a form to enter the client's name and client number.
3. Verify Client Number Section: Contains a form to enter and validate the client number.
4. Responsive Design: The website is accessible on both desktop and mobile screens.
5. You can open the index.html file in a browser to preview the project.

### Final Outcome**  
- You can create new clients directly from the website.  
- You can dynamically view a list of all clients.  
- You can easily verify client numbers.  

- Node.js Server** managing client numbers using Fastify.  
 


This system serves as a simple yet powerful example of the client-server architecture, 
providing a solid foundation for developing full-stack web applications.



- Fully Integrated Frontend with the server.  
 

- Supports Basic CRUD Operations:  
 
  - Adding clients.  
 
  - Viewing all clients.  
 
  - Deleting clients.  
 
  - Verifying client numbers.
 


Etur Platforms
customer portal
In the customer portal, customers can log in using a customer number. The login process should work in such a way that the first page has an input field for the customer number and a button to log in. When the user enters a customer number, the customer number system should verify whether the entered customer number exists. If it does, the user should be redirected to the main page of the customer portal. If not, an error message should be displayed.

 
 





Product Management Portal

The Product Management Portal is the central hub for all reports. Here, product managers can view and edit all reports. The reports should be displayed as a list, and the product manager should be able to filter and search by various attributes. The list of reports should provide the product manager with a quick overview without displaying all the details. For example, a list entry should display the status, labels, customer number, and the assigned handler. Clicking on a list entry will open the detailed view of the report.
   











ETUR API Documentation

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




