import { EntryModel, CategoryModel, dbClose } from './db.js'

await EntryModel.deleteMany()
console.log('Deleted all entries')
await CategoryModel.deleteMany()
console.log('Deleted all categories')

const categories = [
  { name: 'Food' },
  { name: 'Coding' },
  { name: 'Work' },
  { name: 'Other'}
]

await CategoryModel.insertMany(categories)
console.log('Inserted categories')

const entries = [
  { category: 'Food', content: 'Hello!' },
  { category: 'Coding', content: 'Express is cool!' },
  { category: 'Work', content: 'Another day at the office' }
]

await EntryModel.insertMany(entries)
console.log('Inserted entries')

dbClose()
