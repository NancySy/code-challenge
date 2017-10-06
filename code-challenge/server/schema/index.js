const Schema = [
  `
type Employee {
    id: Int!
    firstName:  String
    lastName:   String
    prefix: String
    department: String
    title: String
    jobType: String
    jobDescription : String
    jobArea: String
    phone: String
    email: String
    picture: String
	country: String
    state: String
    city: String
    street: String
	
}

type Query {
    
   Employee(id: Int): Employee  
   Employees:[Employee]
    
}

type Mutation {
updateEmployee(id: Int!, firstName: String, lastName: String,
  prefix: String, title: String, department: String, jobType: String, jobArea: String,
  jobDescription: String, country: String, phone: String, email: String,
  city: String, state: String, street: String): Employee
 
addEmployee(firstName: String, lastName:String, picture: String,
  prefix: String, title: String,department: String,  jobType: String, jobArea: String,
  jobDescription: String, country: String, phone: String, email: String,
  city: String, state: String, street: String): Employee
  
  }
  
schema {
query: Query
mutation: Mutation
}


`
];

export default Schema;
