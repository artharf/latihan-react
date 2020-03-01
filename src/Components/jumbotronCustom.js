import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
class jumbotronCustom extends Component{
    render() {
        // console.log(this.props)
        const { mainHeader, desc, slogan, isiButton, onClickBtn} = this.props
        return (
            <div>
            <Jumbotron>
                <h1 className="display-3">{mainHeader}</h1>
                <p className="lead">{desc}</p>
                <hr className="my-2" />
                <p>{slogan}</p>
                <p className="lead">
                    <Link to='/login'>
                        <Button color="primary" onClick={this.props.onClickBtn}>{isiButton}</Button>
                    </Link>
                </p>
            </Jumbotron>
            </div>
        );
    };
    
}
export default jumbotronCustom;