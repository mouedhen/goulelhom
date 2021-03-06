// ['claimer', 'claimer_mail', 'municipality', 'theme', 'observation'];

import {Model, Collection} from 'vue-mc'

import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'
import {apiConfig} from "../api-config";

class Petition extends Model {

    defaults() {
        return {
            id: null,
            claimer: '',
            claimer_mail: '',
            municipality: '',
            theme: '',
            observation: '',
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            claimer: String,
            claimer_mail: String,
            municipality: String,
            theme: String,
            observation: String,
        }
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'petitions/{id}',
            save:  apiConfig().apiUrl + 'petitions',
        }
    }

}

class Petitions extends Collection {

    model() {
        return Petition;
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'petitions',
        }
    }
}

export {Petition, Petitions}

