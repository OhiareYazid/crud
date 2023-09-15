const ErrorResponse = require('./utils/errorResponse');
const asyncHandler = require('./utils/async');
const Person = require('./person.model');


/**
 * @desc Get one person
 * @route GET /api/:id
 * @access Public
 */
exports.getPersons = asyncHandler(async (req, res, next) => {

    {
        const persons = await Person.find();

        res.status(200).json({
            success: true,
            count: persons.length,
            data: persons,
            status: 200
        });
    }
});

/**
 * @desc Get one person
 * @route GET /api/:id
 * @access Public
 */
exports.getPerson = asyncHandler(async (req, res, next) => {
  
    const person = await Person.findById(req.params.id)

    res.status(200).json({
        success: true,
        data: person,
        status: 200
    });
   
});

/**
 * @desc Get people by name
 * @route GET /api/:id
 * @access Public
 
exports.getPeople = asyncHandler(async (req, res, next) => {
    
    let myName = req.params.name;
    myName = myName.toLowerCase()

    const persons = await Person.find({});
    let arr = []

    for(let i = 0; i < persons.length; i++){
        if(persons[i]['name'].includes(myName)){
            arr.push(persons[i]);
        }
    }

    res.status(200).json({
        success: true,
        count: arr.length,
        data: arr,
        status: 200
    });
});
*/
/**
 * @desc Create a person
 * @route POST /api
 * @access Public
 */
exports.createPerson = asyncHandler(async (req, res, next) => {
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
});

/**
 * @desc Update a person
 * @route PUT /api/:id
 * @access Public
 */
exports.updatePerson = asyncHandler(async (req, res, next) => {
    const {name, state, address, occupation, annualSalary, monthlySalary} = req.body;

    const person = await Person.findById(req.params.id);

    person.name = name ?  name.toLowerCase().split(" ").join('') : person.name;
    person.state = state ? state : person.state;
    person.address = address ? address : person.address;
    person.occupation = occupation ? occupation : person.occupation;
    person.annualSalary = annualSalary ? annualSalary : person.annualSalary;
    person.monthlySalary = monthlySalary ? monthlySalary : person.monthlySalary;

    await person.save();

    res.status(200).json({
        success: true,
        data: person,
        status: 200
    });
});

/**
 * @desc Delete a Person
 * @route DELETE /api/:id
 * @access Public
 */
exports.deletePerson = asyncHandler(async (req, res, next) => {
    const person = await Person.findById(req.params.id);

    await Person.deleteOne(person._id);

    res.status(200).json({
        success: true,
        data: {},
        status: 200
    });
})