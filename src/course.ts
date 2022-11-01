// Tsconfig.json is used for root/ and out/ directories, then command "tsc -w" is used automatically.

// This constant cannot be chaged later, better to specify type (string):
const hola: string = "sample";

// It can be changed easily using "let" later:
let hello: string = "world";

// Function example:
const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("Moster", "Lessons"));

// Object example:
const editor: { name: string; age: number } = {
  name: "Michael",
  age: 30,
};

// If it is neccessary to use "{name: string, age: number}" everytime without wirting it, it is task for "interface" (starts with Capital letter!):
interface UserA {
  name: string;
  age: number;
}
const userA: UserA = {
  name: "Monster",
  age: 30,
};

// Interface parameter is not mandatory using "?":
interface UserB {
  name: string;
  age?: number;
}

// Functions inside interface example:
interface UserC {
  name: string;
  age?: number;
  getMessage(): string;
}
const userC: UserC = {
  name: "Monster",
  age: 30,
  getMessage() {
    return "Hello" + name;
  },
};

// Class (separated by suffix) example:
class UserClass {}
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

// Union "|" operator (combine datatypes) example:
let pageNumber: string | number = "1";

// Type (with Capital!) aliases used in entities
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ["gun", "skull"];

const smileTag: MaybePopularTag = "smile";

// Void = when you do not return anything ("null" or "undefined"):
const doSomething = (): void => {
  console.log("doSomething");
};

// Type "any" turns off TypeScript checks -> do not rather use that:
let foo: any = "foo";
console.log(foo.bar());

// "never" - function with never cannot be executed to the end:
const doSomethingMore = (): never => {
  throw "never";
};

// "unknown" = cannot be assigned directly to type:
let vUnknown: unknown = 10;

// "as" operator makes type assertion:
let pageNumero: string = "1";
let numericPageNumero: number = pageNumero as unknown as number;

// DOM = The Document Object Model:
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);

// Working with classes example:
class Blogger {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const blogger = new Blogger("Michael", "Shramek");
console.log(blogger.firstName);

// "public" (by default, code is available to all components), "private" (variable can be used only inside of "class"):
class UserD {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const userD = new UserD("Manuel", "Esperanto");
console.log(userD.getFullName);

// and "protected" (in the "class" and it's children):
class UserE {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const userE = new UserE("World", "Champion");
console.log(userE.getFullName);

// "readonly" = usefull for word, which will not be changed it later:
class UserF {
  firstName: string;
  lastName: string;
  readonly unchanchableName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchanchableName = firstName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// Implement "interface" inside "class" example:
interface UserInterfaceExample {
  getFullName(): string;
}

class UserG implements UserInterfaceExample {
  getFullName(): string {
    throw new Error("Method not implemented.");
  }
  firstName: string;
  lastName: string;
  readonly unchanchableName: string;
  static maxAge = 50;
}

// "inheritance" example:
class UserH {
  firstName: string;
  lastName: string;
  readonly unchanchableName: string;
  static maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchanchableName = firstName;
  }
}

class Admin extends UserH {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

// All generic data tyes are written in "<>" = they allow to provide different data types
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterfaceAnotherExample {
  name: string;
}

const userI: UserInterfaceAnotherExample = {
  name: "Jack",
};

const result = addId<UserInterfaceAnotherExample>(userI);
console.log("result", result);

// "enum" = reserved word to create enumerables (names with Capital letters!), starting from zero:
enum Status {
  NotStarted,
  InProgress,
  Done,
}

console.log(Status.InProgress);

// "enum" values are with "=" sign
const run = {
  notRunning: 0,
  running: 1,
  finished: 2,
};

enum Run {
  NotRunning = "notRunning",
  Running = "running",
  Finished = "finished",
}

let notStartedStatus: Run = Run.NotRunning;

const notRunningStatus = Run.Finished;

console.log(Run.NotRunning);

// Separate "enum" with suffix:
const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

enum StatusEnum {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}

console.log(StatusEnum.InProgress);
