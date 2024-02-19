                                                                                                E-Commerce-API
    About
            This is a Node.js and MongoDB-based E-commerce API designed to facilitate the management of products in an online store.
    Steps to Use the API:
            1.	Run the command npm init in the terminal within this project's directory.
            2.	Start the server using node app.js.
            3.	Open Postman.
            4.	Make a GET request to localhost:3000/products.
            5.	View the list of products.
    Steps to Create a New Product:
            1.	Start the server using node app.js.
            2.	Open Postman.
            3.	Set the URL to localhost:3000/products/create.
            4.	Select the Body tab below the URL textarea and choose x-www-form-urlencoded.
            5.	Add name and quantity as keys, and set the desired values for these keys.
            6.	Make a POST request.
            7.	If you receive the message "New product added successfully," the product creation was successful.
            8.	Verify the product by making a GET request to localhost:3000/products.
    Steps to Delete a Product:
            1.	Copy the object ID of the product you want to delete.
            2.	Append the ID after localhost:3000/products/.
            3.	Make a DELETE request.
            4.	You will receive a message confirming the successful deletion.
    Steps to Update the Quantity of a Product:
            1.	Copy the object ID of the product whose quantity you want to update.
            2.	Append the ID after localhost:3000/products/.
            3.	Add /update_quantity/?number={x} to the URL, where x is the number by which you want to increase or decrease the quantity.
            •	The URL should look like localhost:3000/products/{id}/update_quantity/?number={x}.
            4.	Make a POST request.
            5.	You should receive a message containing the updated product information.
    Tech Stack
        •	Node.js
        •	MongoDB

