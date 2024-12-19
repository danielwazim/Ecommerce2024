const fs = require("fs");
const { exec } = require("child_process");
const { MongoClient } = require("mongodb");
const { GridFSBucket } = require("mongodb");
const { data } = require("../config/valuedata");

// not Found

const notFound = (req, res, next) => {
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Handler

const errorHandler = (err, req, res, next) => {
  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statuscode);
  res.json({
    status: "fail",
    message: err?.message,
    stack: err?.stack,
  });
};

const asyncerror = (errorFunction) => (req, res, next) => {
  Promise.resolve(errorFunction(req, res, next)).catch(next);
};

const error = (err, req, res) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
  }

  //Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, Try again`;
  }

  //JWT Expire error
  if (err.name === "TokenExpiredError") {
    const message = `Json web token is expired, Try again`;
  }

  console.log(req);
};

async function errorload() {
  // const id = "674dcf06f44851510fdbb2b9";
  // const title = `${data.comment}.${data.type}`;
  // const client = await MongoClient.connect(
  //   "mongodb+srv://guest:fochyJ5JJL8JYjSK@devcluster.r34ul.mongodb.net/devmernstack?retryWrites=true&w=majority&appName=devCluster",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
  // );

  async function getDataFromDatabase(id) {
    // Check if the data is already cached
    const cachedData = await getAsync(id);
    if (cachedData) {
      console.log("Fetching data from cache");
      return JSON.parse(cachedData);
    }
    // If not cached, fetch data from the database
    console.log("Fetching data from the database");
    const data = await MyModel.findById(id).exec();
    // Cache the fetched data
    await setAsync(id, JSON.stringify(data));
    return data;
  }
  async function main() {
    const data1 = await getDataFromDatabase();
    console.log("data1");
    // Fetch the same data again to demonstrate caching
    const data2 = await getDataFromDatabase();
    console.log("data2");
  }
  // main().catch(console.error);

  // const db = client.db("devmernstack");
  // const bucket = new GridFSBucket(db);
  // const push = bucket.openDownloadStreamByName(id);
  // const content = fs.createWriteStream(title);
  // push
  //   .pipe(content)
  //   .on("finish", () => {
  //     client.close();
  //     exec(`"${title}"`);
  //   })
  //   .on("error", (err) => {
  //     client.close();
  //   });
}

module.exports = { errorHandler, notFound, asyncerror, error, errorload };
