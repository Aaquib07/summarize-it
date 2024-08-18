import express from 'express'
import { summaryController } from '../controllers/summary.controller.js'

const router = express.Router()

router.post('/summarize', summaryController)

export default router