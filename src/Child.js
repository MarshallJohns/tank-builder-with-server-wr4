import React from 'react'
import axios from 'axios'


export default class Child extends React.Component {
    constructor() {
        super()

        this.state = {
            tanks: [],
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount(){
        axios.get('/api/tanks')
            .then(res => {
                this.setState({
                    tanks: res.data
                })
            })
            .catch(err => console.log(err))
    }

    handleInput(e){
        this.setState({
            input: e.target.value
        })
    }

    handleSearch(){
        axios.post(`/api/tanks?input=${this.state.input}`)
            .then(res => {
                this.setState({
                    tanks: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state)

        let tanksDisplay = this.state.tanks.map(tank => {
            return (
                <div>
                    <p>{tank.name}</p>
                    <p>{tank.gun.production}</p>
                    <img src={tank.img} />
                </div>
            )
        })
        
        console.log(tanksDisplay)

        return (
            <div>
                {tanksDisplay}
                <input onChange={e => this.handleInput(e)}/>
                <button onClick={() => this.handleSearch()}>Search</button>
            </div>
        )
    }
}
