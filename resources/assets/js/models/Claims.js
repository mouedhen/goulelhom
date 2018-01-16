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

class Claim extends Model {

    defaults() {
        return {
            id: null,
            claimerName: '',
            claimerPhone: '',
            municipality_id: null,
            // municipality: '',
            subject: '',
            description: '',
            files: '',
            latitude: null,
            longitude: null,
        }
    }

    mutations() {
        return {
            id: (id) => Number(id) || null,
            municipality_id: (municipality_id) => Number(municipality_id) || null,
            claimerName: String,
            claimerPhone: String,
            // municipality: String,
            subject: String,
            description: String,
            files: String,
            // latitude: (latitude) => Number(latitude) || null,
            // longitude: (longitude) => Number(longitude) || null
        }
    }

    /*validation() {
        return {
            id:   integer.and(min(1)).or(equal(null)),
            claimerName: required.and(string),
            claimerPhone: required.and(string),
            municipality_id: required.and(integer),
            subject: required.and(string),
            description: required.and(string)
        }
    }*/

    routes() {
        return {
            fetch: 'api/v1/claims/{id}',
            save:  'api/v1/claims',
        }
    }

}

class ClaimsList extends Collection {

    model() {
        return Claim;
    }

    routes() {
        return {
            fetch: 'api/v1/claims',
        }
    }
}

export {Claim, ClaimsList}