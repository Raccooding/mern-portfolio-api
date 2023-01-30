import express from "express";
import Person from "../models/person.js";


const router = express.Router();

export const getPersonData = async (req, res) => {
  try {
    const person = await Person.find().sort({ $natural: -1 }).limit(1);

    res.status(200).json(person);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
