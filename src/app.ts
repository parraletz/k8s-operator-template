import { watchExampleCRD } from '@controllers/example.controller'

console.log('Starting controller...')
setInterval(watchExampleCRD, 5000)
