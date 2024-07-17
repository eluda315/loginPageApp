require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongDB 6이상에서는 use옵션을 사용하지 않아 삭제 
    // await mongoose.connect(process.env.MongoDB_URL, {
    //   useFindAndModify: false,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};

module.exports = {
  connectDB,
};
