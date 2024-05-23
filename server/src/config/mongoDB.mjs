import mongoose from "mongoose"

export default async () => {

  try {
    await mongoose.connect(process.env.DATABASE_URL,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("db is connected")
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
 }