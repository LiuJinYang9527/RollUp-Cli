import foo from "./foo";
import { version } from "../package.json";
import answer from "the-answer";
const a  = 1;
const b = 2;
console.log(a);
export default ()=>{
        console.log(`the answer is ${answer}`)
        console.log(`version:${version}`)
}