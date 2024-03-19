const mongoose = require('mongoose');
const cors = require('cors');
const URL = require('./config')
const Event = require('./model')

const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5003;







app.post('/events', async(request, response) => 
{
    //try catch that requires all parameters of schema to be entered to create entry
    try
    {
        if
        (
        !request.body.name ||
        !request.body.description ||
        !request.body.location  ||
        !request.body.date  ||
        !request.body.cost
        )
        response.status(500).send
        ({
            message: "please send all feilds"
        })
        //creates new game when all feilds are entered
        const newEvent = 
        {
            name: request.body.name,
            description: request.body.description,
            location: request.body.location,
            date: request.body.date,
            cost: request.body.cost
        }
        // Create the game entry in the database
        const createdEvent = await Event.create(newEvent);
            
            // Send the newly created game as response
            return response.status(201).send("event has been created in database");

            //catch block which send the actual error message instead of custom message
    }catch(error)
    {
        response.status(500).send({message: error.message})
    }
});




app.put('/events/:id', async(request, response) => 
{
    try 
    {
       if
       (
        !request.body.name ||
        !request.body.description ||
        !request.body.location  ||
        !request.body.date  ||
        !request.body.cost
        )
        {
            return response.status(400).json
            (
                {
                    message: 'please send all fields'
                }
            )
        }

        const {id} = request.params;

        

        const updatedEvent = await Event.findByIdAndUpdate(id, request.body);

        if(!updatedEvent)
        {
            return response.status(404).json({message: 'event not found'})
        }

        return response.status(200).send({message: 'event has been updated'})


    }
    catch(error)
    {
        response.status(500).send({message: error.message})
    }
});



app.delete('/events/:id', async(request, response) => 
{
    
   
    
    try 
    {
        
      

        const eventId = request.params.id;

      

        //function to find game object
        //then ise .find method to find the object
        const deletedEvent = await Event.findByIdAndDelete(eventId);


        if (!deletedEvent)
        {
            response.status(201).send("cannot find event")
        }

        return response.status(200).json({ message: 'Item deleted successfully' });

    }
    catch(error)
    {
        response.status(500).send({message: error.message})
    }
})





//route to find all games in database
app.get('/events', async(request, response) => 
{
    try
    {
        //function to find game object
        //first must initialize object you are trying to find
        //then ise .find method to find the object
        const Events = await Event.find({})

        //use response .status .json to return object initialized above
        return response.status(200).json(Events)
    }
    catch(error)
    {
        return response.status(500).send({message: error.message})
    }
})



//route to find game by its id
app.get('/events/:id', async(request, response) => 
{
    try
    {
        //first must initialize object you are trying to find
        //in this case you must initialize id before you can use it
        const eventId = request.params.id

        ;

        //function to find game object
        //then ise .find method to find the object
        const event = await Event.findById(eventId);

        if (!event) {
          return response.status(404).json({ message: 'Event not found' });
      }

        //use .json to return object
        //use response .status .json to return object initialized above
        return response.status(200).json(event)
    }
    catch(error)
    {
        return response.status(500).send({message: error.message})
    }
})


// Serve the static files from the specified directory
app.use(express.static(path.join(__dirname, 'build')));

// An API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



mongoose
    .connect(URL)
    .then(() => 
    {
        console.log("successfully connected to database")
    })
    .catch(error => 
    {
        console.log(error)
    })




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

