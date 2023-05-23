## Question answer

## 1.What is the purpose of creating a model with an interface and schema in mongoDB?How dose it help in defining the structure of a collection
creating a model with an interface and schema MongoDB serves several purpose. Here are some of key resone. <br />
1.A schema define the structure of the data sotred in a MongoDB collection. By creating a schema you can enforce  <b>data validation<b>  rules.





## Can you give an example of how to use generics in TypeScript?
Typescript Generics is a tool which provides a way to create reusable components. It creates a component than can work with a variety of data types rather than a single data type.
Example of Object using Generic

interface CrushInterface<T>{
    name:string;
    husband:T
}

const crush1:CrushInterface<boolean>={
    name:"msOmaar1",
    husband:true
}

const crush2:CrushInterface<string>={
    name:"msOmaar2",
    husband:"Omar Abdullah"
}

const crush3:CrushInterface<{name:string; salary:number}>={
    name:"msOmar3",
    husband:{
        name:"omar Abdullah",
        salary:20000
    }
}




## Can you give an example of how to use enums in TypeScript?
 Enums: Enums are one of the few features TypeScript has which is not a type-level extension of javaScript. Enums allow a developer to define a set of named constants.

 Example of Enums in TypeScript
//enum object e property object number set
enum Friends{
    Omar=7,
    Abdullah=9,
    Omar_Abdullah=23
}

console.log(Friends[23])
output: Omar_Abdullah

console.log(Friends.Omar)
output:7



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
