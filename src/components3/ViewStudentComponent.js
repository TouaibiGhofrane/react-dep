import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            etudiant: {}
        }
    }

    componentDidMount(){
        StudentService.getEtudiantById(this.state.id).then( res => {
            this.setState({etudiant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student's Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Student's Cin : </label>
                            <div> { this.state.etudiant.cin }</div>
                        </div>
                        <div className = "row">
                            <label>Student First Name: </label>
                            <div> { this.state.etudiant.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label>
                            <div> { this.state.etudiant.lastName }</div>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent
