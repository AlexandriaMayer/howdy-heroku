import express from 'express'

// looks for HTML files, sends them back as a response
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'


const app = express()
const PORT = process.env.PORT || 5000

console.log("remember, we will be watching")

// gets the path to the URL
const __filename = fileURLToPath(import.meta.url)

// get the directory name
const __dirname = dirname(__filename)

// serving the HTML file from the public directory

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// waiter waiter! more GIRLS KISSING please!!!
// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})