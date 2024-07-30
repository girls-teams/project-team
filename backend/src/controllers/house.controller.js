import { readFile } from '../utils/fileFunctions.js'

const allHouses = readFile('./src/models/houses.json')

export const getAllHouses = (_, res) => {
    res.render("index", { houses: allHouses });
}

export const getHouseById = (req, res) => {
    let foundHouse = allHouses.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (foundHouse) {
        res.status(200).json(foundHouse);
    } else {
        res.sendStatus(404);
    }
}

export const createHouse = (req, res) => {

}

export const updateHouse = (req, res) => {

}

export const updateHouseByPatch = (req, res) => {

}

export const deleteHouseById = (req, res) => {

}
