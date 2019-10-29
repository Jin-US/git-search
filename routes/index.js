import express from 'express';
import gitController from '../gitControllers/get_git';

const router = express.Router();

//router.get('/api/v1/get_git', gitController.getAllGit);
//router.get('/api/v1/get_git/:id', gitController.getGit);
router.get('/api/v1/get_info', gitController.getInfo);


export default router;