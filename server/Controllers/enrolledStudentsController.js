import enrolledStudentModel from "../Models/enrolledStudentModel.js"

// Create new Student
export const postStudent = async (req, res) => {
  try {
    const newStudent = new enrolledStudentModel(req.body);
    await newStudent.save();
    res.status(200).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Get a Student
export const getStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const Student = await enrolledStudentModel.findById(id);
    res.status(200).json(Student);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a Student
export const deleteStudent = async (req, res) => {
  const StudentID = req.params.StudentID;
  console.log(req.params);

  try {
    const Student = await enrolledStudentModel.findById(StudentID);
      await Student.deleteOne();
      res.status(200).json("Student deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Students
export const showAllStudents = async (req, res) => {
  enrolledStudentModel.find({})
    .then((Students) => {
      res.status(200).json(Students);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

