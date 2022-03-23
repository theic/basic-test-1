import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 2004;
const allRockets = ['SpaceXRocket', 'NasaRocket', 'MilitaryRocket'];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/list', (req: Request, res: Response) => {
    try {
        const result = allRockets.sort((a, b) => {
            const nameA = a.toLocaleString();
            const nameB = b.toLocaleString();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        }).join(', ');

        res.send(result);
    } catch (err) {
        const errorMsg = (err as Error).message || 'HTTP error';
        res.status(500).send({ errorMsg });
    }
});

app.get('/:rocketName', (req: Request, res: Response) => {
    try {
        const index = allRockets.map(v => v.toLowerCase())
            .indexOf(req.params.rocketName?.toLowerCase());

        if (index >= 0) {
            res.send({
                date: new Date().toISOString(),
                name: allRockets[index],
            });
            return;
        }

        res.sendStatus(404);

    } catch (err) {
        const errorMsg = (err as Error).message || 'HTTP error';
        res.status(500).send({ errorMsg });
    }
});

app.post('/add', (req: Request, res: Response) => {
    try {
        const name = req.body.name;

        if (!name
            || name === 'list'
            || allRockets.map(v => v.toLowerCase()).includes(name.toLowerCase())) {
            res.sendStatus(409);
            return;
        }

        allRockets.push(name);
        res.sendStatus(200);

    } catch (err) {
        const errorMsg = (err as Error).message || 'HTTP error';
        res.status(500).send({ errorMsg });
    }
});

app.get('/', (req: Request, res: Response) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Started listening to ${port}`)
});
