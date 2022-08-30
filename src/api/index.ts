import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import user from './user/user.route';


const router = express.Router();

router.get("/",(req,res)=>{
res.json({
theResult :"Api - Emojis - ✏ "
})
});

router.use('/emojis', emojis);
router.use('/user', user);


export default router;
