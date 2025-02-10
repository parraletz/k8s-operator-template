import { watchExampleCRD } from '@/src/controllers/example.controller'

console.log('Starting controller...')
setInterval(watchExampleCRD, 5000)
