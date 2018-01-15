import {Model, Collection} from 'vue-mc'

import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'

class Municipality extends Model {

    defaults() {
        return {
            id: null,
            name: '',
            city_id: null
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name: String,
            city_id: (id) => Number(id) || null
        }
    }

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: required.and(string),
            city_id: integer.and(min(1)).or(equal(null))
        }
    }

    routes() {
        return {
            fetch: 'api/v1/municipalities/{id}',
            save:  'api/v1/municipalities',
        }
    }

}

class Municipalities extends Collection {

    model() {
        return Municipality;
    }

    routes() {
        return {
            fetch: 'api/v1/municipalities',
        }
    }
}

export {Municipality, Municipalities}