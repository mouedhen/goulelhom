import {Model, Collection} from 'vue-mc'

import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'

import {City} from "./Cities";
import {apiConfig} from "../api-config";

class Municipality extends Model {

    defaults() {
        return {
            id: null,
            name_en: '',
            name_fr: '',
            name_ar: '',
            is_active: false,
            city_id: null,
            city: null,
            cover: null,
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name_en: String,
            name_fr: String,
            name_ar: String,
            city_id: (id) => Number(id) || null,
            is_active: Boolean,
        }
    }

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name_en: required.and(string),
            name_fr: required.and(string),
            name_ar: required.and(string),
            city_id: integer.and(min(1)).or(equal(null)),
            is_active: boolean,
        }
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'municipalities/{id}',
            save:  apiConfig().apiUrl + 'municipalities',
        }
    }

}

class Municipalities extends Collection {

    model() {
        return Municipality;
    }

    routes() {
        return {
            fetch: apiConfig().apiUrl + 'municipalities',
        }
    }
}

export {Municipality, Municipalities}