import { casetest } from './casetest.js'

const lib = {}
lib.adder =(a,b)=> [0, a+b] // result type

const argsConverter = (s) => {
    const n = Number(s)
    return isFinite(n) ? n : s
}

casetest('./case', (t, {func,args,want})=>{
    // map it onto your lib
    // e.g. fromHex
    let [err, ret] = lib[func](...args.map(argsConverter))
    t.ok(!err)
    t.equal(ret, want[1])
})

