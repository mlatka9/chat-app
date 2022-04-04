const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

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
