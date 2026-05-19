import mongoose from 'mongoose';
import slugify from 'slugify';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
    description: String,
    image: String,
    featured: {
      type: Boolean,
      default: false,
    },
    parentCategory: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
