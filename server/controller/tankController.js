const tanks = require('../tanks')
const { filter } = require('../tanks')

module.exports = {
    getAllTanks: (req,res) => {
        console.log('hit get all tanks')
        res.status(200).send(tanks)
    },
    filterTanks: (req,res) => {
        const {input} = req.query

        const filteredTanks = tanks.filter(tank => {
            console.log(tank.name)
            return tank.name.toLowerCase().includes(input.toLowerCase())
        })
        console.log(filteredTanks)
        res.status(200).send(filteredTanks)
    }
}

// req = {
//     body: {},
//     query: {
//         input: "sherman"
//     },
//     params: {}
// }