import { dbConfig } from '../config/db';
import mysql from 'mysql2/promise';

export const createStudentRecord = async(req,res)=>{
    try{
        const {
            RollNo,
            Name,
            MathsMarks,
            PhysicsMarks,
            ChemMarks,
        } = req.body;


        if(!RollNo || !Name ){
            return res.status(400).json({
                msg: 'Please enter all the fields!'
            });
        }

        const rollNoExists = 'Select * from student_record where RollNo=?';

        if(MathsMarks>100 || PhysicsMarks >100 || ChemMarks >100){
            return res.status(400).json({
                msg:'Marks entered should be between 0 and 100!!'
            })
        }

        const TotalMarks = parseInt(MathsMarks)+parseInt(PhysicsMarks)+parseInt(ChemMarks);
        const Percentage = (TotalMarks/300) * 100;

        const connect = await mysql.createConnection(dbConfig);
        const [rollNoRes] = await connect.execute(rollNoExists,[RollNo]);

        if(rollNoRes.length!==0){
            return res.status(409).json({
                msg: 'Student Record already exists!!'
            });
        }

        const createRecord = 'Insert into student_record(RollNo,StudentName,MathsMarks,PhysicsMarks,ChemMarks,TotalMarks,Percentage) values(?,?,?,?,?,?,?)';

        const [recordCreated] = await connect.execute(createRecord,[RollNo,Name,MathsMarks,PhysicsMarks,ChemMarks,TotalMarks,Percentage]);


        return res.status(201).json({
            msg: 'Record Added Successfully!!'
        });

       
    } catch(err){
        console.log(err);
        return res.status(500).json({
            msg: 'Error in Inserting Student Record! Try Again!'
        });
    }
};

export const displayStudentRecords = async (req,res) => {
    try{
        const getStudentRecordsQuery = 'Select * from student_record ORDER BY student_record.Percentage DESC';

        const connect = await mysql.createConnection(dbConfig);
        const [studentRecords] = await connect.execute(getStudentRecordsQuery);
        
        return res.status(200).json({
            data:studentRecords
        });
    } catch(err){
        console.log(err);
        return res.status(500).json({
            msg:'Error in getting student records!'
        });
    }

};
