import {Model, Collection} from 'vue-mc'
import { pt_br } from 'vue-mc/validation/locale'

import {
    boolean,
    equal,
    integer,
    numeric,
    min,
    required,
    string,
} from 'vue-mc/validation'
import {Municipality} from "./Municipalities";

class Claim extends Model {

    defaults() {
        return {
            id: null,
            claimer_id: null,
            municipality_id: null,
            subject: '',
            subject_id: null,
            description: '',
            latitude: null,
            longitude: null,
        }
    }

    mutations() {
        return {
            id: (id) => Number(id) || null,
            claimer_id: (claimer_id) => Number(claimer_id) || null,
            municipality_id: (municipality_id) => Number(municipality_id) || null,
            subject_id: (subject_id) => Number(subject_id) || null,
            subject: String,
            description: String,
            latitude: (latitude) => Number(latitude) || null,
            longitude: (longitude) => Number(longitude) || null
        }
    }

    validation() {
        return {
            id:   integer.and(min(1)).or(equal(null)),
            claimer_id:   integer.and(min(1)),
            municipality_id: required.and(integer),
            subject: required.and(string),
            description: required.and(string)
        }
    }

    routes() {
        return {
            fetch: 'api/v1/claims/{id}',
            save:  'api/v1/claims',
        }
    }

}

class Claims extends Collection {

    model() {
        return Claim;
    }

    routes() {
        return {
            fetch: 'api/v1/claims',
        }
    }
}

export {Claim, Claims}