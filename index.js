import Another from  './another';
import example, { Example } from './example';

const another = new Another();
another.example.title = "Another";

console.log([another, example, Example.title])
