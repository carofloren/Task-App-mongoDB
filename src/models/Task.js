import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true, //le quita los espacios
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('task', taskSchema);
