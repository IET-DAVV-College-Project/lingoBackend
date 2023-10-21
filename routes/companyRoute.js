import express from "express";
import {getAllCompanies, addCompany }  from "../controllers/companyController.js";
const router = express.Router();

router.get('/companies',getAllCompanies);
router.post('/companies',addCompany);

export default router;