import UserModel from "../Models/userModel.js"

// Create new Teacher
export const postTeacher = async (req, res) => {
  try {
    const newTeacher = new UserModel(req.body);
    await newTeacher.save();
    res.status(200).json(newTeacher);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Get a Teacher
export const getTeacher = async (req, res) => {
  const id = req.params.id;

  try {
    const Teacher = await UserModel.findById(id);
    res.status(200).json(Teacher);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Teacher
// export const updateTeacher = async (req, res) => {
//   const TeacherID = req.params.id;
//   const { userId } = req.body;

//   try {
//     const Teacher = await TeacherModel.findById(TeacherID);
//     if (Teacher.userId === userId) {
//       await Teacher.updateOne({ $set: req.body });
//       res.status(200).json("Teacher Updated");
//     } else {
//       res.status(403).json("Action forbidden");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Delete a Teacher
export const deleteTeacher = async (req, res) => {
  const TeacherID = req.params.TeacherID;
  console.log(req.params);

  try {
    const Teacher = await UserModel.findById(TeacherID);
      await Teacher.deleteOne();
      res.status(200).json("Teacher deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Teachers
export const showAllTeachers = async (req, res) => {
  UserModel.find({ userType: { $eq: "teacher" } })
    .then((Teachers) => {
      res.status(200).json(Teachers);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

