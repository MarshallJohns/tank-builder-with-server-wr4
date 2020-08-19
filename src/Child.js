import React from 'react'

export default class Child extends React.Component {
    constructor() {
        super()

        this.state = {
            tanks: [
                { name: 'M4 Sherman', gun: 76, img: 'https://images-na.ssl-images-amazon.com/images/I/41-lCw5GioL._AC_SX425_.jpg' },
                { name: 'T 34', gun: 76, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Char_T-34.jpg/1200px-Char_T-34.jpg' },
            ]
        }
    }


    render() {

        let tanksDisplay = this.state.tanks.map(tank => {
            console.log(tank)
            return (
                <div>
                    <p>{tank.name}</p>
                    <p>{tank.gun}</p>
                    <img src={tank.img} />
                </div>
            )
        })
        
        console.log(tanksDisplay)

        return (
            <div>
                {tanksDisplay}
            </div>
        )
    }
}
