const json_server = require('json-server')

// create server
const video_server= json_server.create()

// connect with frond-end

const cors = require('cors')

video_server.use(cors())

// conver json to js using middleware

const middleware = json_server.defaults()

video_server.use(middleware)

// database connection routes


const router = json_server.router('db.json')

video_server.use(router)



// port mention

const PORT =8001

video_server.listen(PORT, ()=>{
    console.log(`server runnin on ${PORT}successfully`);
    
})