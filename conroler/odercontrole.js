import Order from "../model/ordr.js"
import { customer } from "../conroler/usercontroler.js";
import product from "../model/product.js"

export async function createoder(req, res) {
    if (customer(req)) {
        res.json({
            masage: "frist you have to log in"
        })
        return
    }
    try {
        const newoder = await Order.find().sort({ date: -1 }).limit(1)


        let odernumber
        if (newoder.length === 0) {
            odernumber = "CBC001"
        }
        else {
            const newoder1 = newoder[0].orderId;
            const tostring = newoder1.replace("CBC ","");
            const number = parseInt(tostring);
            const newnumber = (number + 1).toString().padStart(4, "0")

            odernumber = "CBC"+newnumber

        }
        const newusedata = req.body;
        let dataarray = [];
        const chechlength = newusedata.orderedItems.length
        for (let i = 0; i < chechlength; i++) {
            const newproduct = await product.findOne({ productid: newusedata.orderedItems[i].productid })
            if (newproduct === null) {
                res.json({
                    masseg: "no such kind of product"
                })
                return
            }
            dataarray[i] = {
                name: newproduct.productname,
                price: newproduct.price,
                quantity: newusedata.orderedItems[i].quantity,
                image: newproduct.image[0]


            }

        }
        newusedata.orderedItems = dataarray;
        newusedata.orderId = odernumber;
        newusedata.email = req.user.email;
        
        const cotectnew = new Order(newusedata)
        console.log(cotectnew);


        cotectnew.save().then(() => {
            res.json({
                masage: "order saved"
            })
        }).catch((err) => {
            res.json({
                error: err
            })
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            masseg: error.masseg
        })

    }

}