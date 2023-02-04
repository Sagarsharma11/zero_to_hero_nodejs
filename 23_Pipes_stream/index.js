import {createReadStream, createWriteStream} from 'fs'

const readStream = createReadStream('../powder-day.mp4')
const writeStram = createWriteStream('./copyfile.mp4')

readStream.pipe(writeStram).on('error',console.error)