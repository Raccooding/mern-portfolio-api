import express from "express";
import Project from "../models/project.js";

const router = express.Router();

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { title, image, description, technologies, link } = req.body;

  const newProject = new Project({
    title,
    image,
    description,
    technologies,
    link,
  });

  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
