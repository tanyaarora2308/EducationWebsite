import QueryModel from "../Models/queryModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

// Create new Query
export const postQuery = async (req, res) => {
  const newQuery = new QueryModel(req.body);

  try {
    await newQuery.save();
    res.status(200).json(newQuery);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a query

export const getQuery = async (req, res) => {
  const id = req.params.id;

  try {
    const query = await QueryModel.findById(id)
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Update a query
export const updateQuery = async (req, res) => {
  const queryID = req.params.id;
  const { userId } = req.body;

  try {
    const query = await QueryModel.findById(queryID)
    if (query.userId === userId) {
      await query.updateOne({ $set: req.body });
      res.status(200).json("Query Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Delete a query
export const deleteQuery = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const query = await QueryModel.findById(id);
    if (query.userId === userId) {
      await query.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


//Show all queries
export const showAllQueries = async (req, res) => {
  QueryModel.find({}).then((queries) => {
    res.status(200).json(queries);
  }).catch((error) => {
    res.status(500).json(error);
  })
};
