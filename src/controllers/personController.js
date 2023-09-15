const Person = require('../models/personModel');


/**
 * @desc Get one person
 * @route GET /api/:id
 * @access Public
 */
exports.getPersons = async (req, res) => {

    {
        const persons = await Person.find();

        res.status(200).json({
            success: true,
            count: persons.length,
            data: persons,
            status: 200
        });
    }
};

/**
 * @desc Get one person
 * @route GET /api/:id
 * @access Public
 */
exports.getPerson = async (req, res) => {
  
    const person = await Person.findById(req.params.id)

    res.status(200).json({
        success: true,
        data: person,
        status: 200
    });
   
};

/**
 * @desc Get people by name
 * @route GET /api/:id
 * @access Public
 
*/
/**
 * @desc Create a person
 * @route POST /api
 * @access Public
 */
exports.createPerson = async (req, res) => {
    const {name, state, address, occupation, annualSalary, monthlySalary} = req.body;


    const person = await Person.create({
        name : name.toLowerCase().split(" ").join(''),
        state,
        address,
        occupation,
        annualSalary,
        monthlySalary
    });

    res.status(200).json({
        success: true,
        data: person,
        status: 200
    });
};

/**
 * @desc Update a person
 * @route PUT /api/:id
 * @access Public
 */
exports.updatePerson = async (req, res, next) => {
    const {name, state, address, occupation, annualSalary, monthlySalary} = req.body;

    const person = await Person.findById(req.params.id);

    person.name = name ?  name.toLowerCase().split(" ").join('') : person.name;
    // person.state = state ? state : person.state;
    // person.address = address ? address : person.address;
    // person.occupation = occupation ? occupation : person.occupation;
    // person.annualSalary = annualSalary ? annualSalary : person.annualSalary;
    // person.monthlySalary = monthlySalary ? monthlySalary : person.monthlySalary;

    await person.save();

    res.status(200).json({
        success: true,
        data: person,
        status: 200
    });
};

/**
 * @desc Delete a Person
 * @route DELETE /api/:id
 * @access Public
 */
exports.deletePerson = async (req, res) => {
    const person = await Person.findById(req.params.id);

    await Person.deleteOne(person._id);

    res.status(200).json({
        success: true,
        data: {},
        status: 200
    });
};