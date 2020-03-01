import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Table
 from './Table'

class Method extends Component {
    state = { 
        count : 0,
        data : {}
    }

    componentDidMount(){
        Axios.get('https://reactnative.dev/movies.json')
        .then((res) => {
            console.log(res)
            this.setState({
                data : res.data
            })
            console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidUpdate(){
        console.log('Ini Berubah')
    }

    componentWillUnmount(){
        console.log('Ini Keluar')

    }


    tambah = () => {
        this.setState({
        count: this.state.count + 1
        })
    }
    
     kurang = () => {
        this.setState({
        count: this.state.count - 1
        })
    }
    
    
    render() {
        return (
            <div>
                <h1>{this.state.data.title}</h1>
                <h3>{this.state.data.description}</h3>
                {this.state.data.movies ? <Table movies = {this.state.data.movies}/>: null}
                {/* Ini Method
                <input type='button' onClick={this.tambah} value='+'/>
                {this.state.count}
                <input type='button' onClick={this.kurang} value='-'/>
                <Link to='/'>
                    <input type ='button' value='Home'/>
                </Link> */}

            </div>
        )
    }
}

export default Method;