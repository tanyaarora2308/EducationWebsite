import AssignmentModel from "../Models/assignmentModel.js";

// Create new Assignment
export const postAssignment = async (req, res) => {
  const newAssignment = new AssignmentModel(req.body);

  try {
    await newAssignment.save();
    res.status(200).json(newAssignment);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a Assignment

export const getAssignment = async (req, res) => {
  const id = req.params.id;

  try {
    const Assignment = await AssignmentModel.findById(id);
    res.status(200).json(Assignment);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Assignments
export const showAllAssignments = async (req, res) => {
  AssignmentModel.find({})
    .then((Assignment) => {
      res.status(200).json(Assignment);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
