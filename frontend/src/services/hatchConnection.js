const spawn = require('child_process').spawn

let command = {
    command: "rest.power_on()"
}

let stringifiedCmd = JSON.stringify(command)

const py = spawn('python', ['hatch_connect.py', stringifiedCmd])

let resultString = ''

py.stdout.on('data', function (stdData) {
    resultString += stdData.toString()
})

const resultData = py.stdout.on('end', () => {
    console.log(JSON.parse(resultString))
})




