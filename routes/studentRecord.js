import express from 'express';
import { createStudentRecord, displayStudentRecords } from '../controller/studentRecord'; 

const router = express.Router();

router.post('/createRecord',createStudentRecord);
router.get('/displayRecords', displayStudentRecords);

module.exports = router;
