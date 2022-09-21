import FeedbackModel from "../Models/feedbackModel.js";
import mongoose from "mongoose";

// Create new Feedback
export const postFeedback = async (req, res) => {
  const newFeedback = new FeedbackModel(req.body);

  try {
    await newFeedback.save();
    res.status(200).json(newFeedback);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a Feedback

export const getFeedback = async (req, res) => {
  const id = req.params.id;

  try {
    const Feedback = await FeedbackModel.findById(id)
    res.status(200).json(Feedback);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Feedbacks
export const showAllFeedback = async (req, res) => {
    FeedbackModel.find({}).then((feedbacks) => {
    res.status(200).json(feedbacks);
  }).catch((error) => {
    res.status(500).json(error);
  })
};
