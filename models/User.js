import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Please Enter Your Fullname',
    },
    email: {
      type: String,
      required: 'Please Enter Your Email',
    },
    password: {
      type: String,
      required: 'Please Enter Your Password',
    },
    role: {
      type: String,
      default: 'user',
    },
    image: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/256/1946/1946429.png',
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: '',
    },
    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        state: {
          type: String,
        },
        country: {
          type: String,
        },
        active: {
          type: String,
          default: false,
        },
      },
    ],
    // wishlist: [
    //   {
    //     product: {
    //       type: ObjectId,
    //       ref: 'Product',
    //     },
    //     style: {
    //       type: String,
    //     },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
