const employeesMdl = require('../models/employees');

const employeesCtrl = {
    getEmployees: async (req,res)=>{
        const employees = await employeesMdl.find();        
        res.json(employees);
    },
    getEmployee: async (req,res)=>{
        const employee = await employeesMdl.findById(req.params.id);
        res.json(employee);
    },
    saveEmployee: async (req,res)=>{
        const employee = new employeesMdl({
            name:req.body.name,
            position:req.body.position,
            office:req.body.office,
            salary:req.body.salary
        });
        await employee.save();
        res.json({'status':'Employee saved'});
    },
    updateEmployee: async (req,res)=>{
        const { id } = req.params;
        const employee={
            name :req.body.name,
            position :req.body.position,
            office :req.body.office,
            salary :req.body.salary
        }
        await employeesMdl.findByIdAndUpdate(id,{$set:employee},{new: true});
        res.json({'status':'Employee Updated'});
    },
    deleteEmployee: async (req,res)=>{
        await employeesMdl.findByIdAndRemove(req.params.id);
        res.json({'status':'Employee Removed'});

    },
};

module.exports= employeesCtrl;