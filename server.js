import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import cors from 'cors'

import auth from './middleware/auth.js'

const app = express()
app.use(express.json())
app.use(cors()) // Caso tenha um site de whitelist, coloque aqui, pois até agora todos as aplicações podem acessar, isso pode ser perigoso para colocar em produção

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => console.log("Funcionando corretamente!"))