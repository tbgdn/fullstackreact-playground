export default class PeopleService {
    constructor() {
        this.count = 1;
    }

    load = () => ({
        then: (cb) => {
            setTimeout(() => {
                cb(JSON.parse(localStorage.people || "[]"));
            }, 1000);
        }
    });

    save = (people) => {
        const success = !!(this.count++ % 2);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) return reject({success});
                localStorage.people = JSON.stringify(people);
                return resolve({success});
            }, 1000);
        });
    };
}
