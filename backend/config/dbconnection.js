const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/college').then(
//     console.log('Connected to database')
// )

mongoose.connect('mongodb+srv://gouravc60:gouravch60@college.mbwlu30.mongodb.net/College').then(
    console.log('Connected to database')
)