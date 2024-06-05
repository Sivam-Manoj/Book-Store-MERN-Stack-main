import mongoose from 'mongoose';

const ConnectMongoDb = async () => {
  const mongo_url = process.env.MONGO_URL;
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error(`Internal server error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default ConnectMongoDb;
