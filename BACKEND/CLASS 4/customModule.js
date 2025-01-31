const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

// const data = require("./data.json")
// import data from "../class-4/data.json"

// CRUD

// Read
const readFile = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Write
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

// Create
const createStudent = (student) => {
  const data = readFile();
  data.students.push(student);
  writeFile(data);
  return student;
};

// Update by ID
const updateStudent = (id, updateData) => {
  const data = readFile();
  const studentIndex = data.students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    data.students[studentIndex] = {
      ...data.students[studentIndex],
      ...updateData,
    };
    writeFile(data);
    return data.students[studentIndex];
  } else {
    return null;
  }
};

// Delete by ID
const deleteStudent = () => {
  const data = readFile();
  const filteredStudents = data.students.filter((student) => student.id !== 1);
  if (filteredStudents.length !== data.students.length) {
    writeFile({ students: filteredStudents });
    return true;
  } else {
    false;
  }
};

module.exports = {
  readFile,
  writeFile,
  createStudent,
  updateStudent,
  deleteStudent,
};