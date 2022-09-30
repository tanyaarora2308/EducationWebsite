import AssignmentModel from "../Models/assignmentModel.js";

// Create new Assignment
export const postAssignment = async (req, res) => {
  const { title, videoUrl, assignmentUrl } = req.body;
  const newAssignment = new AssignmentModel(req.body);
  if (!title) return res.status(400).json("Title not entered.");
  if (!videoUrl && !assignmentUrl)
    return res.status(400).json("Video or Assignment Link Empty");
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
