//1  //You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
//   1.Access the author property and print it.
//   2.Modify the yearPublished property to 2022.
//   3.Add a new property genre to the book object with the value “Fiction”.
//   4.Delete the title property from the book object.
book={ 
"title":"harry potter",
"author":"J.K.Rowling",
"yearPublished":1920
}
console.log(`Author : ${book["author"]}`);
book["yearPublished"]=2022;
console.log(book);
book["genre"]="action";
console.log(book);
delete book.title;
console.log(book);
console.log("------------------------------------------------------------------------------------------------------");

// 2.You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
//   1.Access the position property and print it.
//   2.Modify the salary property to 50000.
//   3.Add a new property department to the employee object with the value “HR”.
//   4.Delete the age property from the employee object.
employee={
    "empName":"Varun",
    "age":27,
    "position":"manager",
    "salary":4000
}
console.log(`Position:${employee.position}`);
employee["salary"]=5000;
console.log(employee);
employee["department"]="HR";
console.log(employee);
delete employee.age;
console.log(employee);
console.log("-----------------------------------------------------------------------------------------------------")
// 3.You are given an object product with the properties id, name, price, and category. Perform the following operations:
//   1.Access the price property and print it.
//   2.Modify the category property to “Electronics”.
//   3.Add a new property inStock to the product object with the value true.
//   4.Delete the id property from the product object.
product={
    "id":123,
    "name":"fastrack",
    "price":2000,
    "category":"watches"
}
console.log(product);
console.log(`Price : ${product.price}`);
product["category"]="Electronics";
console.log(product);
product["inStock"]=true;
console.log(product);
delete product.id;
console.log(product);
console.log("------------------------------------------------------------------------------------------------------")
// 4.You are given an object car with the properties make, model, year, and color. Perform the following operations:
//      1.Access the make property and print it.
//      2.Modify the color property to “Black”.
//      3.Add a new property engineType to the car object with the value “V6”.
//      4.Delete the year property from the car object.
car={
    "make":"Tesla Model Y",
    "model":"Telsa",
    "year":2000,
    "color":"white"
}
console.log(car);
console.log(`make : ${car.make}`);
car["color"]="Black";
console.log(car);
car["engineType"]="V6";
console.log(car);
delete car.year;
console.log(car);
console.log("-----------------------------------------------------------------------------------------------------")
// 5.You are given an object student with the properties name, age, grade, and school. Perform the following operations:
//   1.Access the school property and print it.
//   2.Modify the grade property to 95.
//   3.Add a new property hobbies to the student object with the value ["reading", "sports"].
//   4.Delete the age property from the student object.
student={
    "name":"priya",
    "age":22,
    "grade":"83",
    "school":"Oxford High School"
}
console.log(student);
console.log(`school : ${student.school}`)
student["grade"]="95";
console.log(student);
Hobbies={
    "reading":"books",
    "sports":"cricket"
}
student["Hobbies"]=Hobbies;
console.log(student);
delete student.age;
console.log(student);
console.log("-------------------------------------------------------------------------------------------------------")

// 6 .You are given an object user with the following structure:
const user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};
// Perform the following operations:
// 1.Access the city property from the address object and print it.
// 2.Modify the theme property in the preferences object to “light”.
// 3.Add a new property phone to the profile object with the value “555-9876”.
// 4.Delete the zip property from the address object.
console.log(`city : ${user["profile"]["address"]["city"]}`)
console.log(user["preferences"]["theme"]="light");
console.log(user);
user["profile"]["phone"]="555-9876";
console.log(user["profile"]);
delete user["profile"]["address"].zip;
console.log(user);
console.log("--------------------------------------------------------------------------------------")
// 7.You are given an object company with the following structure:
const company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
// Perform the following operations:
// 1.Access the email of the second employee (Bob) and print it.
// 2.Modify the phone number of Alice to “555-1111”.
// 3.Add a new property department with the value “Engineering” to the first employee (Alice).
// 4.Delete the location property from the company object.
console.log(company.employees[1]["contact"]["email"]);
console.log(company.employees[0]["contact"]["phone"]="555-1111");
company.employees[0]["department"]="enginering";
console.log(company.employees[0]);
delete company.location;
console.log(company["employees"]);

