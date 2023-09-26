import {Schema, model} from 'mongoose'
import { Sale } from './sale.entity'

const SaleSchemaMongo = new Schema <Sale>({
  products: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  saleType: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  id: true
})

const SaleModelMongo = model <Sale>('Sale', SaleSchemaMongo)

export { SaleModelMongo }
