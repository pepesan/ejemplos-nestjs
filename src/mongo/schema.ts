import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
  name: String,
  age: Number,
});
