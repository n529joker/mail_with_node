const mongoose = require('mongoose')

module.exports = async function connection(){
  try{
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    await mongoose.connect(process.env.DB, connectionParams)
    console.log('Connected to database');
  }catch(err){
    console.error(`Error connecting to the database. \n${err}`);
  }
}