import axios from 'axios';

const Etudiant_API_BASE_URL = "http://localhost:8080/api/v1/etudiants";

class StudentService {

    getEtudiants(){
        return axios.get(Etudiant_API_BASE_URL );
    }

    createEtudiant(etd){
        return axios.post(Etudiant_API_BASE_URL , etd);
    }

    getEtudiantById(etdId){
        return axios.get(Etudiant_API_BASE_URL  + '/' + etdId);
    }

    updateEtudiant(etd, etdId){
        return axios.put(Etudiant_API_BASE_URL + '/' + etdId, etd);
    }

    deleteEtudiant(etdId){
        return axios.delete(Etudiant_API_BASE_URL  + '/' + etdId);
    }
}

export default new StudentService()