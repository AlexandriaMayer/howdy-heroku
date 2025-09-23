import express, { response } from 'express'

// looks for HTML files, sends them back as a response
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'


const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const greetings = {
    'hi' : {
        'greeting':'Hi',
        'lang': 'eng',
        'context': 'casual',
        'day': 'any',
        'time':'any'
    },
    'howdy': {
        'greeting':'Howdy',
        'lang': 'eng',
        'context': 'casual',
        'day': 'any',
        'time':'any'
    },
    "how you doing?":{
        'greeting':"How you doing?",
        'lang': 'eng',
        'context': 'casual',
        'day': 'any',
        'time':'any'
    },
    "guten morgen":{
        'greeting':'Guten Morgen',
        'lang': 'de',
        'context': 'casual',
        'day': 'any',
        'time':'morning'
    },
    "guten tag":{
        'greeting':'Guten Tag',
        'lang': 'de',
        'context': 'casual',
        'day': 'any',
        'time':'afternoon'
    },
    "guten abend":{
        'greeting':'Guten Abend',
        'lang': 'de',
        'context': 'casual',
        'day': 'any',
        'time':'evening'
    },
    "happy friday":{
        'greeting':'Happy Friday',
        'lang':'eng',
        'context':'professional',
        'day':'friday',
        'time':'any'
    },
    "unknown":{
        'greeting':'unknown',
        'lang':'unknown',
        'context':'unknown',
        'day':'unkown',
        'time':'any'
    }

}

console.log("remember, we will be watching")

// gets the path to the URL
const __filename = fileURLToPath(import.meta.url)

// get the directory name
const __dirname = dirname(__filename)

// serving the HTML file from the public directory

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/api',(req, res)=>{
    const howdy = req.params.greeting.toLowerCase()
    if (howdy == greetings[howdy]){
        res.json(greetings[howdy])
    } else {
        res.json(greetings["unknown"])
    }
    res.json(greetings)
})

// waiter waiter! more GIRLS KISSING please!!!
// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})