import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;

const subSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: ObjectId,
      required: true,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
);

const SubCategory =
  mongoose.models.SubCategory || mongoose.model('SubCategory', subSchema);

export default SubCategory;
