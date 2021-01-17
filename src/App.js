import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListStudentComponent from './components3/ListStudentComponent';
import CreateStudentComponent from './components3/CreateStudentComponent';
import UpdateStudentComponent from './components3/UpdateStudentComponent';
import ViewStudentComponent from './components3/ViewStudentComponent';

import ListEnseignantComponent from './components2/ListEnseignantComponent';
import CreateEnseignantComponent from './components2/CreateEnseignantComponent';
import UpdateEnseignantComponent from './components2/UpdateEnseignantComponent';
import ViewEnseignantComponent from './components2/ViewEnseignantComponent';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import FooterComponent from './components/FooterComponent';

import Sidebar from './components/Sidebar';
import {  stat } from './pages/enseignant';
import administration from './pages/administration';
import HeroSection from './assets/HeroSection';
function App() {
  return (

    <Router>

    <Sidebar />

    <div className="container">
    <Switch>
    <Route path='/' exact component={HeroSection} />
    <Route path='/desc' exact component={HeroSection} />
     
     
      <Route path="/etudiant/gestion/" exact component={ListStudentComponent}></Route>
            <Route path="/etudiant/gestion/etudiants" exact component={ListStudentComponent}></Route>
            <Route path="/etudiant/gestion/add-etudiant/:id" exact component={CreateStudentComponent}></Route>
            <Route path="/etudiant/gestion/view-etudiant/:id" component={ViewStudentComponent}></Route>
            <Route path = "/etudiant/gestion/update-etudiant/:id" component = {UpdateStudentComponent}></Route>


    
     
            <Route path="/enseignant/gestion" exact component={ListEnseignantComponent}></Route>
            <Route path="/enseignant/gestion/enseignants" exact component={ListEnseignantComponent}></Route>
            <Route path="/enseignant/gestion/add-enseignant/:id" exact component={CreateEnseignantComponent}></Route>
            <Route path="/enseignant/gestion/view-enseignant/:id" component={ViewEnseignantComponent}></Route>
            <Route path = "/update-enseignant/:id" component = {UpdateEnseignantComponent}></Route> 

      <Route path='/enseignant/stat'  component={stat} />
  



  <Route path="/admin" exact component={administration}></Route>

            <Route path="/admin/gestion/" exact component={ListEmployeeComponent}></Route>
            <Route path="/admin/gestion/employees" exact component={ListEmployeeComponent}></Route>
            <Route path="/admin/gestion/add-employee/:id" exact component={CreateEmployeeComponent}></Route>
            <Route path="/admin/gestion/view-employee/:id" component={ViewEmployeeComponent}></Route>
            <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> 

      <Route path='/admin/stat' exact component={administration} />

    </Switch>
    </div>
    <FooterComponent />

  </Router>
  );
}

export default App;
