const Product = require('../models/product');

// function to show all the products
module.exports.products = async function(req, res){
    let foundProducts= await Product.find({});

    try{
        res.send(foundProducts);
    }catch(err){
        res.send(err);
    }

}

// function to create a new product

module.exports.create = async function(req, res) {
    try {
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity
        });

        await newProduct.save();

        res.json(200,{
            message: 'New product added successfully.'
        });
    } catch (err) {
        console.log(`Error in creating post: ${err}`);
        return res.json(504, {
            message: "Internal server err"
        })
        
    }
};

// function to delete a product using it's ID

module.exports.delete = async function(req, res) {
    try {
        await Product.deleteOne({ _id: req.params.productID });
        res.json(200,{
            message: 'Product Deleted successfully.'
        });
    } catch (err) {
        console.log(`Error in deleting post: ${err}`);
        return res.json(504, {
            message: "Internal server err"
        })
    }
};

// function to update a product's quantity

module.exports.updateQuantity = async function(req, res) {
    try {
        const ID = req.params.productID;

        // Find the product using id
        const found = await Product.findById(ID);

        if (!found) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }

        // Note - To increment the quantity of the product put number as a positive value in the query 
        //        and to decrement the quantity put the number as a negative value in the query

        const newQty = parseInt(found.quantity) + parseInt(req.query.number);

        // Update the product's quantity
        const updatedProduct = await Product.findByIdAndUpdate(ID, { quantity: newQty }, { new: true });

        if (!updatedProduct) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }

        res.send({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        console.log(`Error in updating post: ${err}`);
        return res.json(504, {
            message: "Internal server err"
        })
    }
};
