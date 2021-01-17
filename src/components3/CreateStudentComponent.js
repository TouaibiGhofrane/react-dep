import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            cin: '',
            firstName: '',
            lastName: ''
            
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEtudiant = this.saveOrUpdateEtudiant.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getEtudiantById(this.state.id).then( (res) =>{
                let etudiant = res.data;
                this.setState({  cin: etudiant.cin,
                    firstName:  etudiant.firstName,
                    lastName: etudiant.lastName
                 
                });
            });
        }        
    }
    saveOrUpdateEtudiant = (e) => {
        e.preventDefault();
        let  etudiant = { cin: this.state.cin,firstName: this.state.firstName, lastName: this.state.lastName};
        console.log('etudiant => ' + JSON.stringify(etudiant));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createEtudiant(etudiant).then(res =>{
                this.props.history.push('/etudiant/gestion/etudiants');
            });
        }else{
            StudentService.updateStudent(etudiant, this.state.id).then( res => {
                this.props.history.push('/etudiant/gestion/etudiants');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeCinHandler= (event) => {
        this.setState({cin: event.target.value});
    }

    cancel(){
        this.props.history.push('/etudiant/gestion/etudiants');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Cin: </label>
                                            <input placeholder="Cin" name="cin" className="form-control" 
                                                value={this.state.cin} onChange={this.changeCinHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                       <center>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEtudiant}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent
