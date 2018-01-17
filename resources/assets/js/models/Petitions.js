// ['claimer', 'claimer_mail', 'municipality', 'theme', 'observation'];

import {Model, Collection} from 'vue-mc'

import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
} from 'vue-mc/validation'

class Petition extends Model {

    defaults() {
        return {
            id: null,
            claimer: '',
            claimer_mail: '',
            municipality: '',
            theme: '',
            observation: '',
        }
    }

    mutations() {
        return {
            id:   (id) => Number(id) || null,
            claimer: String,
            claimer_mail: String,
            municipality: String,
            theme: String,
            observation: String,
        }
    }

    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            claimer: required.and(string),
            claimer_mail: required.and(string),
            municipality: required.and(string),
            theme: required.and(string),
            observation: required.and(string)
        }
    }

    routes() {
        return {
            fetch: 'api/v1/petitions/{id}',
            save:  'api/v1/petitions',
        }
    }

}

class Petitions extends Collection {

    model() {
        return Petition;
    }

    routes() {
        return {
            fetch: 'api/v1/petitions',
        }
    }
}

export {Petition, Petitions}

