const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  const url = "mongodb://127.0.0.1:27017/ecommerce";
  try {
    const connectDB = mongoose.connect(
      "mongodb+srv://guest:fochyJ5JJL8JYjSK@devcluster.r34ul.mongodb.net/devmernstack?retryWrites=true&w=majority&appName=devCluster"
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
