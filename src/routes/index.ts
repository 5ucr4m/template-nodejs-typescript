import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.json('Welcome');
});

export default router;
