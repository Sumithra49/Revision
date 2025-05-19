// You are tasked with solving a complex data manipulation problem using multilevel destructuring in JavaScript. Your goal is to extract specific information from a deeply nested data structure and perform various operations on the extracted data.

// ### **Data Structure**

// You are provided with a nested object representing a company's organizational structure. Each department contains employees, and each employee has multiple properties including name, age, position, and salary. The structure resembles the following:

// const company = {
//   name: "Tech Solutions Inc.",
//   departments: {
//     engineering: {
//       manager: {
//         name: "John Doe",
//         age: 35,
//         position: "Engineering Manager",
//         salary: 100000,
//       },
//       employees: [
//         {
//           name: "Alice",
//           age: 28,
//           position: "Software Engineer",
//           salary: 80000,
//         },
//         {
//           name: "Bob",
//           age: 30,
//           position: "Senior Software Engineer",
//           salary: 90000,
//         },
//       ],
//     },
//     sales: {
//       manager: {
//         name: "Jane Smith",
//         age: 40,
//         position: "Sales Manager",
//         salary: 95000,
//       },
//       employees: [
//         {
//           name: "Charlie",
//           age: 32,
//           position: "Sales Representative",
//           salary: 60000,
//         },
//         { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
//       ],
//     },
//     marketing: {
//       manager: {
//         name: "Emily Johnson",
//         age: 37,
//         position: "Marketing Manager",
//         salary: 90000,
//       },
//       employees: [
//         {
//           name: "Eva",
//           age: 31,
//           position: "Marketing Specialist",
//           salary: 70000,
//         },
//         {
//           name: "Frank",
//           age: 33,
//           position: "Marketing Coordinator",
//           salary: 65000,
//         },
//       ],
//     },
//   },
// };
// ### **Challenge Tasks**

// 1. **Extract Manager Details:**
// Write a function **`extractManagerDetails`** that takes the **`company`** object as input and destructures
// the nested object to extract details of all department managers. Return an array containing objects with
// the manager's name, age, position, and salary.
// 2. **Calculate Average Salary:**
// Write a function **`calculateAverageSalary`** that takes the **`company`** object as input and
// calculates the average salary across all departments and employees including managers.
// Use multilevel destructuring to access the salary information.(rounded to two decimal places ).
//  Hint: [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
// 3. **Find Highest-Paid Employee:**
// Write a function **`findHighestPaidEmployee`** that takes the **`company`** object as input and
// extracts the name and salary of the highest-paid employee across all departments.

// ### **Constraints**

// - Implement each task using multilevel destructuring where applicable.
// - Assume the provided **`company`** object structure remains consistent.

// console.log(extractManagerDetails(company));
// // Output:
// // [
// //   { name: "John Doe", age: 35, position: "Engineering Manager", salary: 100000 },
// //   { name: "Jane Smith", age: 40, position: "Sales Manager", salary: 95000 },
// //   { name: "Emily Johnson", age: 37, position: "Marketing Manager", salary: 90000 }
// // ]

// console.log(calculateAverageSalary(company));
// // Output: 77777.78 (rounded to two decimal places)

// console.log(findHighestPaidEmployee(company));
// // Output: { name: "John Doe", salary: 100000 }
const company = {
  name: "Tech Solutions Inc.",
  departments: {
    engineering: {
      manager: {
        name: "John Doe",
        age: 35,
        position: "Engineering Manager",
        salary: 100000,
      },
      employees: [
        {
          name: "Alice",
          age: 28,
          position: "Software Engineer",
          salary: 80000,
        },
        {
          name: "Bob",
          age: 30,
          position: "Senior Software Engineer",
          salary: 90000,
        },
      ],
    },
    sales: {
      manager: {
        name: "Jane Smith",
        age: 40,
        position: "Sales Manager",
        salary: 95000,
      },
      employees: [
        {
          name: "Charlie",
          age: 32,
          position: "Sales Representative",
          salary: 60000,
        },
        { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
      ],
    },
    marketing: {
      manager: {
        name: "Emily Johnson",
        age: 37,
        position: "Marketing Manager",
        salary: 90000,
      },
      employees: [
        {
          name: "Eva",
          age: 31,
          position: "Marketing Specialist",
          salary: 70000,
        },
        {
          name: "Frank",
          age: 33,
          position: "Marketing Coordinator",
          salary: 65000,
        },
      ],
    },
  },
};

// 1. Extract Manager Details
function extractManagerDetails({ departments }) {
  return Object.values(departments).map(({ manager }) => {
    const { name, age, position, salary } = manager;
    return { name, age, position, salary };
  });
}

// 2. Calculate Average Salary (including managers and employees)
function calculateAverageSalary({ departments }) {
  let totalSalary = 0;
  let count = 0;

  for (const { manager, employees } of Object.values(departments)) {
    totalSalary += manager.salary;
    count++;

    for (const { salary } of employees) {
      totalSalary += salary;
      count++;
    }
  }

  return parseFloat((totalSalary / count).toFixed(2));
}

// 3. Find Highest-Paid Employee
function findHighestPaidEmployee({ departments }) {
  let highest = { name: "", salary: 0 };

  for (const { manager, employees } of Object.values(departments)) {
    if (manager.salary > highest.salary) {
      highest = { name: manager.name, salary: manager.salary };
    }

    for (const { name, salary } of employees) {
      if (salary > highest.salary) {
        highest = { name, salary };
      }
    }
  }

  return highest;
}

// ✅ Output Results
console.log("Manager Details:", extractManagerDetails(company));
console.log("Average Salary:", calculateAverageSalary(company));
console.log("Highest Paid Employee:", findHighestPaidEmployee(company));
