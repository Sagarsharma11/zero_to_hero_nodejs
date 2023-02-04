import { stdout } from 'process';
import { Transform } from 'stream'

class ReplaceText extends Transform {
    constructor(ch) {
        super()
        this.replace_char = ch
    }
    _transform(chunk, encoding, callback) {
        const transform_str = chunk
            .toString()
            .replace(/[A-Z]|[a-z]|[0-9]/g, this.replace_char)
            this.push(transform_str)
            callback();
    }
    _flush(callback){
        this.push('more stuff being passed')
        callback()
    }
}

let xStream = new ReplaceText('#');

process.stdin
.pipe(xStream)
.pipe(process.stdout)