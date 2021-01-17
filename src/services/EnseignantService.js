import axios from 'axios';

const Enseignant_API_BASE_URL = "http://localhost:8080/api/v1/enseignants";

class EnseignantService {

    getEnseignants(){
        return axios.get(Enseignant_API_BASE_URL );
    }

    createEnseignant(ens){
        return axios.post(Enseignant_API_BASE_URL , ens);
    }

    getEnseignantById(ensId){
        return axios.get(Enseignant_API_BASE_URL  + '/' + ensId);
    }

    updateEnseignant(ens, ensId){
        return axios.put(Enseignant_API_BASE_URL  + '/' + ensId, ens);
    }

    deleteEnseignant(ensId){
        return axios.delete(Enseignant_API_BASE_URL  + '/' + ensId);
    }
}

export default new EnseignantService()