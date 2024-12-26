```javascript
//Incorrect usage of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      field: { $in: [1, 2, '3'] } // Incorrect: Mixing number and string types
    }
  }
])
```