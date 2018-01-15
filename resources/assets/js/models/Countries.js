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
            name: '',
            name_ar: ''
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name: String,
            name_ar: String,
        }
    }

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: required.and(string),
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
