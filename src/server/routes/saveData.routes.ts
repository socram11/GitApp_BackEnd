import express from 'express';
import { saveGitHubData } from '../../controllers/saveData.controller';

const router = express.Router();


router.post('/saveGitHubData', saveGitHubData);

export default router; 