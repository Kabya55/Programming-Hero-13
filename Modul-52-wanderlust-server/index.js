const express = require("express");
const dontenv = require("dotenv");
dontenv.config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");

const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/.well-known/jwks.json`),
);
const veryfyToken = async (req, res, next) => {
  const authHeader = req?.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    // console.log(payload);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const db = client.db("wanderlust");
    const destinationsCollection = db.collection("destinations");
    const bookingsCollection = db.collection("bookings");

    app.get("/destinations", async (req, res) => {
      const result = await destinationsCollection.find().toArray();
      res.json(result);
    });

    app.get("/destinations/:id", veryfyToken, async (req, res) => {
      const { id } = req.params;

      const result = await destinationsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.json(result);
    });

    app.patch("/destinations/:id", veryfyToken, async (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;

      const result = await destinationsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData },
      );
      res.json(result);
    });

    app.post("/destinations", veryfyToken, async (req, res) => {
      const newDestination = req.body;
      const result = await destinationsCollection.insertOne(newDestination);
      res.json(result);
    });

    app.delete("/destinations/:id", veryfyToken, async (req, res) => {
      const { id } = req.params;
      const result = await destinationsCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.json(result);
    });

    app.get("/bookings/:userId", veryfyToken, async (req, res) => {
      const { userId } = req.params;
      const result = await bookingsCollection
        .find({ userId: userId })
        .toArray();
      res.json(result);
    });

    app.post("/bookings", veryfyToken, async (req, res) => {
      const newBooking = req.body;
      const result = await bookingsCollection.insertOne(newBooking);
      res.json(result);
    });

    app.delete("/bookings/:id", veryfyToken, async (req, res) => {
      const { id } = req.params;
      const result = await bookingsCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.json(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
