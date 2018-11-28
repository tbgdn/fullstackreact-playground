const uuidv4 = require("uuid/v4");

export default class Helpers {

    constructor(){
        this.pad = function (numberString, size) {
            let padded = numberString;
            while (padded.length < size) padded = `0${padded}`;
            return padded;
        };

        this.millisecondsToHuman = function (ms) {
            const seconds = Math.floor((ms / 1000) % 60);
            const minutes = Math.floor((ms / 1000 / 60) % 60);
            const hours = Math.floor(ms / 1000 / 60 / 60);

            return [
                this.pad(hours.toString(), 2),
                this.pad(minutes.toString(), 2),
                this.pad(seconds.toString(), 2),
            ].join(':');
        };
    }

    newTimer = (attrs = {}) => {
        return {
            title: attrs.title || 'Timer',
            project: attrs.project || 'Project',
            id: uuidv4(), // eslint-disable-line no-undef
            elapsed: 0,
        };
    };

    findById = (array, id, cb) => {
        array.forEach((el) => {
            if (el.id === id) {
                cb(el);
            }
        });
    };

    renderElapsedString = (elapsed, runningSince) => {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }
        return this.millisecondsToHuman(totalElapsed);
    };
}