// Write your solution in this file!
const employee = {
    name: "Bashaar",
    street: "carnasie",
}; 

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const updatedEmployee={...employee};
    updatedEmployee[key]=value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const NewEmployee ={...employee};
    delete NewEmployee[key];
    return NewEmployee;
    
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}