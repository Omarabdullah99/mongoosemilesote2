## Question answer

## 1.What is the purpose of creating a model with an interface and schema in mongoDB?How dose it help in defining the structure of a collection
creating a model with an interface and schema MongoDB serves several purpose. Here are some of key resone. <br /><br />
1.Interface schema define the structure of the data sotred in a MongoDB collection. By creating a schema you can enforce  <b>data validation<b>  rules. <br />
2.Defind Interface and Schema makes it easier for developer to understand the data model and interact withe the databasee <br />
3. It provides a clear difinition of the fields, therir type and constraints, making code more readable and maintainable <br />
4. MongoDB can utilize the schema informaiton to optimize query execution

Overall creating a model with an interface and schema in MongoDB helps define the sturecture of a collection by data validation, imporving code readability, maintainability and Query optimize


## 2.Explain the concept of field filtering in MongoDB. How can you specify fields to include or exclude in the returned documents
In mongoDB, fields filtering allows you to spcify which fields to include or exclude int the return documents when querying a collection. <br/> <br/>

To include specific fields in the returned documents, I can use the projection parameter with <b> find() , findeOne() or findeAndModify() ,<b> <br/>
Example:

db.inventory.find( { status: "A" }, {  status: 1 } )



## 3.What are instance methods in MongoDB models? Povide an example of custo instance method and explain it s purpose
 
 In MongoDB models, instance methods are custom methods that can be defined on individual documents or instances of a model. These methods specific to each document and can be invoked on an instance of the model. <br /> <br />

 Here is example of instance method in a MongoDB model
import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  age: number;
  getGreeting(): string;
}

const userSchema = new Schema<IUser>({
  name: String,
  age: Number
});

// Custom instance method <br />
userSchema.methods.getGreeting = function() {
  return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

const User = model<IUser>('User', userSchema);

// Creating a document/instance <br />
const user = new User({ name: 'John', age: 25 });

// Invoking the custom instance method <br />
console.log(user.getGreeting()); // Output: Hello, my name is John and I'm 25 years old.

The <b>getGreeting <b> method is defined as a custom instance method on the <b>userSchema <b> It is accessible on individual document instances created from the User model

The <b>getGreeting<b> method retrieves the name and age fields from the dcument instance using <b> this.name and this.age <b> and reutrns a formatted greeting string.

## 4.How do you use comparision operators like  "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

In MongoDB, comparison operators like "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used to perform comparisons in query conditions. These operators allow you to filter and retrieve documents based on specific comparison criteria. Here are examples to illustrate their usage: 

1. <b>$ne(not equal) <b>
Match values that are not eqal to the specified value
$ne selects the documents where the value of the field is not equal to the specified value. This includes documents that do not contain the field.

Example:
db.orders.find({status:{$ne: "merried"}})
Find all documents where the "status" field is not equal to "merried"

2.<b>$gt(greater than) <b>
$gt selects those documents where the value of the field is greater than (i.e. >) the specified value.
Example
db.person.find({age:{$gt: 18}})
Find all documents where the "age" field is greater than 18.

3.<b>$lt(less than) <b>
$lt selects those documents where the value of the field is Less than (i.e. >) the specified value.

Example
db.person.find({age:{$lt: 30}})
Find all documents where the "age" field is less than 30.

4.<b>$gte(greater than or equal) <b>
$gte selects those documents where the value of the field is greater than or equal (i.e. >) the specified value.

Example
db.products.find({price:{$gte: 1000}})
Find all documents where the "price" field is greater than or equal 1000.

4.<b>$lte(less than or equal) <b>
$lte selects those documents where the value of the field is less than or equal (i.e. >) the specified value.

Example
db.products.find({price:{$lte: 1000}})
Find all documents where the "price" field is less than or equal 1000.


## 5.What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
<b>$in operator: <b>
The $in operator selects the documents where the value of a field equals any value in the specified array. To specify an $in expression, use the following prototype:

example
db.orders.find({status:{$in:["completed","cancelled"]}})
Find all documents where the "status" field is either "completed" or "cancelled"

<b>$nin operator: <b>
The "$nin" operator matches documents where the value of a field does not match any value in the specified array.

example
db.orders.find({status:{$nin:["completed","cancelled"]}})

Find all documents where the "status" field is neither "completed" nor "cancelled"