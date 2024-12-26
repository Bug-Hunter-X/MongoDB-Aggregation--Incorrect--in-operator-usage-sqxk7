```javascript
//Correct usage of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      field: { $in: [1, 2, 3] } // Correct: Using consistent number type
    }
  }
])

//Alternative solution for mixed types
db.collection.aggregate([
  {
    $match: {
      $expr: {
        $in: [ { $toString: '$field' }, ['1', '2', '3'] ]
      }
    }
  }
])
```