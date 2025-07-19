import { Router } from "express";

const router = Router();

router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('New product created');
});
router.post('/', (req, res) => {
    res.send('New product created')
});
router.get('/', (req, res) => {
    res.send('List of all products')
});

export default router;
