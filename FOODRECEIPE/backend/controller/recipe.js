const Recipes = require("../models/recipe");
const multer = require("multer");

// Image storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    cb('null, ${Date.now()}-${file.fieldname}.${ext}');
  },
});

const upload = multer({ storage: storage });

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    return res.json(recipes);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    return res.json(recipe);
  } catch (err) {
    return res.status(404).json({ error: "Recipe not found" });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ message: "Required fields can't be empty" });
    }

    const newRecipe = await Recipes.create({
      title,
      ingredients,
      instructions,
      time,
      coverImage: req.file.filename,
      createdBy: req.user.id,
    });

    return res.status(201).json(newRecipe);
  } catch (err) {
    return res.status(500).json({ error: "Failed to create recipe" });
  }
};

const editRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    const coverImage = req.file?.filename || recipe.coverImage;
    const updatedRecipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      { ...req.body, coverImage },
      { new: true }
    );

    return res.json(updatedRecipe);
  } catch (err) {
    return res.status(500).json({ message: "Update failed" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Recipes.deleteOne({ _id: req.params.id });
    return res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Delete failed" });
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  upload,
};