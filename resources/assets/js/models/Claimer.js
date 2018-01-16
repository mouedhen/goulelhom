import {Model, Collection} from 'vue-mc'

import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'

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

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: required.and(string),
            phone_number: required.and(string),
        }
    }

    routes() {
        return {
            fetch: 'api/v1/claimers/{id}',
            save:  'api/v1/claimers',
        }
    }

}

class Claimers extends Collection {

    model() {
        return Claimer;
    }

    routes() {
        return {
            fetch: 'api/v1/claimers',
        }
    }
}

export {Claimer, Claimers}
