const { default: mongoose } = require("mongoose");

const dbConnect = () => {
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
