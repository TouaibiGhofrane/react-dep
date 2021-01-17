import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                etudiants: []
        }
        this.addEtd= this.addEtd.bind(this);
        this.editEtd = this.editEtd.bind(this);
        this.deleteEtd = this.deleteEtd.bind(this);
    }

    deleteEtd(id){
        StudentService.deleteEtd(id).then( res => {
            this.setState({etudiants: this.state.etudiants.filter(etudiant => etudiant.id !== id)});
        });
    }
    viewEtd(id){
        this.props.history.push(`/etudiant/gestion/view-etudiant/${id}`);
    }
    editEtd(id){
        this.props.history.push(`/etudiant/gestion/add-etudiant/${id}`);
    }

    componentDidMount(){
        StudentService.getEtudiants().then((res) => {
            this.setState({ etudiants: res.data});
        });
    }

    addEtd(){
        this.props.history.push('/etudiant/gestion/add-etudiant/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student's List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEtd}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Cin </th>
                                    <th> Student First Name</th>
                                    <th> Student Last Name</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.etudiants.map(
                                        etudiant=> 
                                        <tr key = {etudiant.id}>
                                              <td> {etudiant.cin}</td>
                                             <td> { etudiant.firstName} </td>   
                                             <td> {etudiant.lastName}</td>
                                            
                                             <td>
                                                 <button onClick={ () => this.editEtd(etudiant.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEtd(etudiant.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEtd(etudiant.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStudentComponent;
