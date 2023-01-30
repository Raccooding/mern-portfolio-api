import express from "express";
import Social from "../models/social.js";

const router = express.Router();

export const getSocials = async (req, res) => {
  try {
    const socials = await Social.find();

    res.status(200).json(socials);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSocial = async (req, res) => {
  const { id } = req.params;

  try {
    const social = await Social.findById(id);

    res.status(200).json(social);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSocial = async (req, res) => {
  const { name, link } = req.body;

  const newSocial = new Social({
    name,
    link,
  });

  try {
    await newSocial.save();

    res.status(201).json(newSocial);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
