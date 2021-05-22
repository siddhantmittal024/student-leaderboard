const express = require('express');
const studentRecordController = require('../controller/studentRecord');


const router = express.Router();

router.post('/createRecord',studentRecordController.createStudentRecord);
router.get('/displayRecords', studentRecordController.displayStudentRecords);

module.exports = router;
