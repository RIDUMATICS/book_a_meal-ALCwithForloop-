/* eslint-disable no-console */
import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fecthAllMeals();
    allMeals.then(meals => res.status(200).json({ status: 'success', data: meals }));
  },
  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    createdMeal.then(meal => res.status(201).json({ status: 'success', data: meal }));
  },
  getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealService.getMeal(id);
    if (foundMeal.status) { return res.status(404).json({ status: foundMeal.status }); }
    return res.status(200).json({ status: 'success', data: foundMeal });
  },
  updateMeal(req, res) {
    const { id } = req.params;
    const value = req.body;
    const updatedMeal = MealService.updateMeal(id, value);
    return res.status(updatedMeal.status).json(updatedMeal);
  },
  dropMeal(req, res) {
    const { id } = req.params;
    const newMeals = MealService.dropMeal(id);
    return res.status(newMeals.status).json(newMeals);
  },
};

export default MealController;
