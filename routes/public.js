import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET

// CADASTRO
router.post("/cadastro", async (req, res) => {
    try {
        const user = req.body
        const salt = await bcrypt.genSalt(10) // Utilizando 10 saltos de segurança para crypt
        const hashPassword = await bcrypt.hash(user.password, salt) 

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword
            }
        })
        res.status(201).json(userDB)
    }catch(error){
        res.status(500).json({message: 'Erro ao cadastrar', error: error.message})
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    
    try{
        const userInfo = req.body

        // Busuca usuário no banco de dados
        const user = await prisma.user.findUnique({
            where: { email : userInfo.email },
        })

        // Verifica se há o usuário no banco de dados
        if (!user){
            return res.status(404).json({ message: "Usuário não encontrado."})
        }

        // Descriptografa a senha e verifica se é igual a digitada
        const isMatch = bcrypt.compare(userInfo.password, user.password)

        // Caso não seja um MATCH
        if (!isMatch){
            res.status(400).json({message: "Senha inválida"})
        }

        // Gerar o token JWT - Nas options coloca o tempo, podendo ser 7d, 5m, 1m...
        const token = jwt.sign({ id: user.id}, JWT_SECRET, {expiresIn: "5m"})

        res.status(200).json(token)

    }catch(error){
        res.status(500).json({message: 'Erro ao logar', error: error.message})
    }
})

export default router
