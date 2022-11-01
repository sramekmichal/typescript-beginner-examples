/*
# tsconfig.json is used for root/and out directories
# then tsc -w is used automatically 

# I cannot chage it later (better to specify type)
const foo: string = "sample"

# Easily can be changed later
let hello: string = "world";

# Function
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Moster", "Lessons"));

# Objects
const user: {name: string, age: number}  = {
    name: "Monster",
    age: 30
}

# If I want use {name: string, age: number} everytime 
# without wirting it, I need interface (starts
# withCapital letter!)
interface User {
    name: string;
    age: number;
}
const user: User  = {
    name: "Monster",
    age: 30
}

# Interface has not mandatory parameter using "?"
interface User {
    name: string;
    age?: number;
}

# Functions inside interface
interface User {
    name: string;
    age?: number;
    getMessage(): string
}
const user: User  = {
    name: "Monster",
    age: 30,
    getMessage() {
        return "Hello" + name;
    },
};

# Class (separated by suffix)
class UserClass {
    
}
interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string
}

# Union operator (combine datatypes)
let pageNumber: string | number = "1";

# Type (with capital!) aliases used in entities
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null

interface UserInterface {
    id: ID;
    name: string
    surname: string
}

const popularTags: PopularTag[] = ['dragon', 'cofee'];

const dragonTag: MaybePopularTag = "dragon";

# Void = when you do not return anything (null
# or undefined)
const doSomething = (): void => {
  console.log("doSomething");
};

# Type "any" turns off typescript checks
# do not rather used that
let foo: any = "foo"
console.log(foo.bar())

# Never - function with never cannot be 
# executed to the end
const doSomething = (): never => {
    throw "never";
};

# Unknown = cannot be assigned directly to type
let vUnknown: unknown = 10;

# "as" operator makes type assertion
let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number;
*/
