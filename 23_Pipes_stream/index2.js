import {createWriteStream} from 'fs'

const writeStram = createWriteStream('file.txt')
process.stdin.pipe(writeStram)