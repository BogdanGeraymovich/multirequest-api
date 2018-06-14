import { Transform } from 'stream';

export default class TransformDataStream extends Transform {

  _transform(chunk, encoding = 'utf-8', done) {
    console.log(chunk)
    this.push(chunk.toString());
    done();
  }
}