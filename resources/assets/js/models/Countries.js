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

class Country extends Model {

    defaults() {
        return {
            id: null,
            name_en: '',
            name_fr: '',
            name_ar: ''
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name_en: String,
            name_fr: String,
            name_ar: String,
        }
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'countries/{id}',
            save:  apiConfig().apiUrl +  'countries',
        }
    }

}

class Countries extends Collection {

    model() {
        return Country;
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'countries',
        }
    }
}

export {Country, Countries}
