import * as express from "express";
import * as stripeLoader from "stripe";

const router = express.Router();

const stripe = new stripeLoader("TESTKEYGOESHERE");

const charge = (token: string, amt: number) => {
        return stripe.charges.create({
            amount: amt * 100,
            currency: 'USD',
            source: token,
            description: 'Statement Description'
        })
};

router.post("/", async (req, res, next) => {
    console.log(charge);
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    
    
    alert("Thank you for your payment");
    res.send("Charged!");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default router;
