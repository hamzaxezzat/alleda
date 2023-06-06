import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
      minlength: [2, 'must be atleast 2 Characters '],
      maxlength: [32, 'must be maximum 32 Characters '],
    },
    slug: {
      type: String,
      unique: true,
      loswercase: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category || moongoose.model('Category', categorySchema);
export default Category;
