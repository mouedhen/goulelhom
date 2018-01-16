import {Model, Collection} from 'vue-mc'

import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'

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

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name_en: required.and(string),
            name_fr: required.and(string),
            name_ar: required.and(string)
        }
    }

    routes() {
        return {
            fetch: 'api/v1/countries/{id}',
            save:  'api/v1/countries',
        }
    }

}

class Countries extends Collection {

    model() {
        return Country;
    }

    routes() {
        return {
            fetch: 'api/v1/countries',
        }
    }
}

export {Country, Countries}
