import { Router } from "express";


const router = Router();

router.post('/auth/register', (req, res)=>{
    res.send('Desde register, lo envia res.send!...');
    console.log('Desde register!...');
    console.log(req.body);


})

export default router;