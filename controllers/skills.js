import express from "express";
import SkillSet from "../models/skillSet.js";

const router = express.Router();

export const getAllSkills = async (req, res) => {
  try {
    const allSkills = await SkillSet.find();

    res.status(200).json(allSkills);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSkillSet = async (req, res) => {
  const { id } = req.params;

  try {
    const skillSet = await SkillSet.findById(id);

    res.status(200).json(skillSet);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSkillSet = async (req, res) => {
  const { title, skills } = req.body;

  const newSkillset = new SkillSet({
    title,
    skills,
  });

  try {
    await newSkillset.save();

    res.status(201).json(newSkillset);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
