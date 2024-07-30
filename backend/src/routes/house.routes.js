import { Router } from "express";
import { getAllHouses, getHouseById, createHouse } from "../controllers/house.controller.js";

export const houseRoutes = Router()

houseRoutes
    .get('/', getAllHouses)
    .get('/:houseId', getHouseById)
    .post('/', createHouse)
    .put('/:houseId')
    .patch('/:houseId')
    .delete('/:houseId')
