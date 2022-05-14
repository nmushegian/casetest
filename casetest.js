import { test } from 'tapzero'
import { readdirSync, readFileSync } from 'fs'

export function casetest(dir, f) {
    const cases = readdirSync(dir)
    cases.forEach(file => {
        const data = readFileSync(dir + '/' + file) // TODO os.path
        const json = JSON.parse(data)
        test(`file ${file}\nnote ${json.note}`, t=>{
            t.ok(json.func, 'no test func')
            t.ok(json.args, 'no test args')
            t.ok(json.args, 'no test want')
            t.equal(json.args.length, 2,
                    'args length is not 2, must use result type')
        })
    })
}