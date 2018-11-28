const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const DATA_FILE = path.join(__dirname, "src", "data", "data.json");


exports.api = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/api/timers', (req, res) => {
        fs.readFile(DATA_FILE, (err, data) => {
            res.setHeader('Cache-Control', 'no-cache');
            res.json(JSON.parse(data));
        });
    });
    app.post('/api/timers', (req, res) => {
        fs.readFile(DATA_FILE, (err, data) => {
            const timers = JSON.parse(data);
            const newTimer = {
                title: req.body.title,
                project: req.body.project,
                id: req.body.id,
                elapsed: 0,
                runningSince: null,
            };
            timers.push(newTimer);
            fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
                res.setHeader('Cache-Control', 'no-cache');
                res.json(timers);
            });
        });
    });
    app.post('/api/timers/start', (req, res) => {
        fs.readFile(DATA_FILE, (err, data) => {
            const timers = JSON.parse(data);
            timers.forEach((timer) => {
                if (timer.id === req.body.id) {
                    timer.runningSince = req.body.start;
                }
            });
            fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
                res.json({});
            });
        });
    });
    app.post('/api/timers/stop', (req, res) => {
        fs.readFile(DATA_FILE, (err, data) => {
            const timers = JSON.parse(data);
            timers.forEach((timer) => {
                if (timer.id === req.body.id) {
                    timer.elapsed += req.body.stop - timer.runningSince;
                    timer.runningSince = null;
                }
            });
            fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
                res.json({});
            });
        });
    });
    app.put('/api/timers', (req, res) => {
        fs.readFile(DATA_FILE, (err, data) => {
            const timers = JSON.parse(data);
            timers.forEach((timer) => {
                if (timer.id === req.body.id) {
                    timer.title = req.body.title;
                    timer.project = req.body.project;
                }
            });
            fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
                res.json({});
            });
        });
    });
    app.delete('/api/timers', (req, res) => {
        fs.readFile(DATA_FILE, (err, data) => {
            let timers = JSON.parse(data);
            timers = timers.reduce((memo, timer) => {
                if (timer.id === req.body.id) {
                    return memo;
                } else {
                    return memo.concat(timer);
                }
            }, []);
            fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
                res.json({});
            });
        });
    });
};