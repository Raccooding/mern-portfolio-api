import express from "express";
import Publication from "../models/publication.js";

const router = express.Router();

export const getPublications = async (req, res) => {
  try {
    const publications = await Publication.find();

    res.status(200).json(publications);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPublication = async (req, res) => {
  const { id } = req.params;

  try {
    const publication = await Publication.findById(id);

    res.status(200).json(publication);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPublication = async (req, res) => {
  const { title, summary, year, technologies, link, medium } = req.body;

  const newPublication = new Publication({
    title,
    summary,
    year,
    technologies,
    link,
    medium,
  });

  try {
    await newPublication.save();

    res.status(201).json(newPublication);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
