import { test } from 'tapzero'
import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import { jams } from 'jams.js/jams.js'

const clean = (ext) => (String(ext).substring(1))

export function casetest(dir, f) {
    const cases = readdirSync(dir)
    cases.forEach(file => {
        const filepath = path.resolve(path.join(process.cwd(), dir, file))
        const ext = clean(path.extname(filepath))
        const data = readFileSync(filepath) // TODO os.path

        let obj

        if (ext === 'json') {
            obj = JSON.parse(data)
        } else if (ext === 'jams') {
            // Convert `data` type from Buffer to String
            obj = jams(data.toString())
        } else {
            throw new Error('Unhandled filetype.')
        }

        test(`file ${file}\nnote ${obj.note}`, t=>{
            t.ok(obj.func, 'no test func')
            t.ok(obj.args, 'no test args')
            t.ok(obj.want, 'no test want')
            t.equal(obj.want.length, 2,
                    'want length must be 2, must use result type')

            f(t, obj)
        })
    })
}
