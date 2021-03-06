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

class Claimer extends Model {

    defaults() {
        return {
            id: null,
            name: '',
            phone_number: ''
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name: String,
            phone_number: String,
        }
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'claimers/{id}',
            save:  apiConfig().apiUrl + 'claimers',
        }
    }

}

class Claimers extends Collection {

    model() {
        return Claimer;
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'claimers',
        }
    }
}

export {Claimer, Claimers}
