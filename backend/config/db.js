import mongose from "mongoose";
import colors from "colors";
import { toast } from "react-toastify";

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
  try {
    const conn = await mongose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    toast(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    toast.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
