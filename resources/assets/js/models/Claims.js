import {Model, Collection} from 'vue-mc'
import { pt_br } from 'vue-mc/validation/locale'

import {
    boolean,
    equal,
    integer,
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
            municipality: '',
            subject: '',
            description: '',
            files: '',
            location: '',
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            claimerName: String,
            claimerPhone: String,
            municipality: String,
            subject: String,
            description: String,
            files: String,
            location: String
        }
    }

    validation() {
        return {
            id:   integer.and(min(1)).or(equal(null)),
            claimerName: required.and(string),
            claimerPhone: required.and(string),
            municipality: required.and(string),
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