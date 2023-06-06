import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;

const subSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      name: String,
      unique: true,
      index: true,
      lowercase: true,
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
  mongoose.models.subCategory || mongoose.model('SubCategory', subSchema);

export default SubCategory;
