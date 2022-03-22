const express = require('express')
const app = express()
const port = 5000
const {auth} = require('./firebase')

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World!')
})

// app.get('/api/random', async (req, res) => {
//     const authorizationHeader = req.headers.authorization;
//     const token = authorizationHeader.slice(7)
//     try{
//         const decodedToken = await auth.verifyIdToken(token);
//         console.log(decodedToken.uid)
//         auth
//         .getUser(decodedToken.uid)
//           .then(user=>console.log(user))
//           .catch(err=>console.log(err))

//         return res.json({data: "success"})
//     } catch(err) {
//         console.log(err)
//     }
//     return res.json({data: "fail"})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})