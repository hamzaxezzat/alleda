import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: ObjectId,
    required: true,
    ref: 'Category',
  },
  subCategories: [
    {
      type: [ObjectId],
      ref: 'SubCategory',
    },
  ],
  details: [{}],
});

// const Product = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   price: {
//     type: Number,
//   },
//   equipped: Boolean,
//   owner_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true,
//   },
//   room_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true,
//   },
//   brand:{
//       type:String
//   },
//   color:{}
//   rating:[
//       {
//             reviwer
//       }
//   ]
// });

// const Item = mongoose.model('Item', Product);

// module.exports = {
//   Item: Item,
// };
