import express from 'express'
import { PrismaClient } from '../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

// LISTAR USUÁRIOS
router.get('/listar-usuarios', async (req, res) => {

    try{
        // Omitir a senha dos usuários quando listá-los
        const users = await prisma.user.findMany({omit: {password:true}})



        res.status(200).json({message: "Usuários listados com sucesso.", users})
    }catch(err){
        res.status(500).json({message: "Falha no servidor.", error: err})
    }
})
export default router