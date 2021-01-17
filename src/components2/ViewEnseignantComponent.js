import React, { Component } from 'react'
import EnseignantService from '../services/EnseignantService'

class ViewEnseignantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            enseignant: {}
        }
    }

    componentDidMount(){
        EnseignantService.getEnseignantById(this.state.id).then( res => {
            this.setState({enseignant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Teacher's Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Teacher's Cin : </label>
                            <div> { this.state.enseignant.cin }</div>
                        </div>
                        <div className = "row">
                            <label>Teacher First Name: </label>
                            <div> { this.state.enseignant.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Teacher Last Name: </label>
                            <div> { this.state.enseignant.lastName }</div>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEnseignantComponent
