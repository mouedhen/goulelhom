import {apiConfig} from './../api-config'
import {Model, Collection} from 'vue-mc'

import {
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'

class Theme extends Model {

    defaults() {
        return {
            id: null,
            name_en: null,
            name_fr: null,
            name_ar: null,
        }
    }

    mutations() {
        return {
            id: (id) => Number(id) || null,
            name_en: String,
            name_fr: String,
            name_ar: String,
        }
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'themes/{id}',
            save:  apiConfig().apiUrl + 'themes'
        }
    }

}

class Themes extends Collection {

    model() {
        return Theme;
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'themes',
        }
    }
}

export {Theme, Themes}