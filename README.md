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

// Custom instance method
userSchema.methods.getGreeting = function() {
  return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

const User = model<IUser>('User', userSchema);

// Creating a document/instance
const user = new User({ name: 'John', age: 25 });

// Invoking the custom instance method
console.log(user.getGreeting()); // Output: Hello, my name is John and I'm 25 years old.

The <b>getGreeting <b> method is defined as a custom instance method on the <b>userSchema <b> It is accessible on individual document instances created from the User model

The <b>getGreeting<b> method retrieves the name and age fields from the dcument instance using <b> this.name and this.age <b> and reutrns a formatted greeting string.

## What is the "as" keyword used for in TypeScript?
 as keyword used for Type Assertin. Type assertion is a TypeScript technique that tells the compiler the variable type

 Example
 function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === "string"){
        const value= parseFloat(param) *100;
        return `the convertd result is ${value} gram`
    }

    if(typeof param === 'number'){
        const value=param * 100;
        return value
    }

}

const resultToBeNumber= kgToGram(500) as number //as number eita holo type 




## Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
 
 The typeof type guard

 typeof type guard is used to determine the type of variable. The typeof type guardis said tyo be very limited and shallow. It;s use for boolean, string, bigint,symbol, undefiend, fucnction, number

 Example of typeof Type Gurad
 type Alphaneumeric= string | number;
function add(param1: Alphaneumeric, param2:Alphaneumeric):Alphaneumeric{
    if(typeof param1 == "number" && typeof param2== "number"){
        return param1+ param2
    }
    else{
        return param1.toString() +param2.toString()
    }
}

const number= add(1,2)
const string=add("1","2")
console.log(string)//output12
console.log(number)//output3


The in type Guard
The in type guard checks if an object has a particular property, using that to differentiate between different types. It usually returns a boolean, which indicates if the property exists in that object

Example in type guard
type NormarUserType={
    name:string
}

type adminUserType={
    name:string;
    role:"admin"
}

function getUser(user:NormarUserType | adminUserType):string{
    if("role" in user){
        return `I am an adin and my role is ${user.role}`
    }
    else{
        return `I am a normal user`
    }
