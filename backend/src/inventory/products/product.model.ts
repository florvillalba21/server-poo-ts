import { Schema, model } from 'mongoose'
import { Product } from './product.entity'

// Schema de una tarea en MongoDB con Mongoose
const ProductSchemaMongo = new Schema<Product>({
  nameProduct: {
    type: String,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  bagPrice: {
    type: Number,
    required: true
  },
  quantityPrice: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  id: true
})

// Modelo de una tarea en MongoDB con Mongoose
const ProductModelMongo = model<Product>('Product', ProductSchemaMongo)

// Exportar los modelos
export { ProductModelMongo }
