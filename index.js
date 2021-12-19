const employee = {
    name: "karen",
    streetAddress: "broadway", //might need to add nested address
};
employee;
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newEmployee = {
        ...employeeObj,
        [key]: value,
    };
    return newEmployee;
};
updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employee
};
destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam",
);
destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "address",
    "11 Broadway",
);

for (const key in employee) {
    delete employee[key];
};
employee.name = "Sam";
function deleteFromEmployeeByKey(employeeObj, key) {
    const copyEmployee = {
        ...employeeObj,
    };
    delete copyEmployee[key];
    return copyEmployee
};
deleteFromEmployeeByKey(
    employee,
    "name",
);

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employee
};
destructivelyDeleteFromEmployeeByKey(
    employee,
    "name",
);

