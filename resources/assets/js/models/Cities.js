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

class City extends Model {

    defaults() {
        return {
            id: null,
            name: ''
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name: String
        }
    }

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: required.and(string)
        }
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'cities/{id}',
            save:  apiConfig().apiUrl + 'cities',
        }
    }

}

class Cities extends Collection {

    model() {
        return City;
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'cities',
        }
    }
}

export {City, Cities}
