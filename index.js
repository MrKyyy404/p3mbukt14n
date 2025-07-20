const qs = require("qs")
const cheerio = require("cheerio")
const axios = require("axios")
const chalk = require("chalk")
const readline = require("readline")

const question = (text) => {
const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, (answer) => {
rl.close()
resolve(answer)
})
})
}

async function back() {
const anu = await question(chalk.red.bold("Back?y/n"))
if (anu === "y") {
start()
} else {
console.log("Mau Ngapain?")
back()
}
}
async function start() {
process.stdout.write('\x1Bc')
console.log(chalk.magenta.bold(`
[ INFORMATION ]
TOOLS NAME: SPAM UPLOADER
TOOLS DEVELOPER: MR.KYY404
TOOLS FUNCTION: SPAM UPLOADER TO DEFACERMIRROR.COM

${chalk.red.bold("[!] SAYA TIDAK HEBAT, TAPI SAYA JUGA TIDAK PERLU DI RENDAHKAN [!]")}
${chalk.blue.bold("\n\n[ MENU ]\n1. Spam Uploader\n2. Tools Information\n3. Credits")}
`))
const command = await question(chalk.cyan.bold("\n===============================\nPilih Menu: "))
switch (command) {
case "1": {
process.stdout.write('\x1Bc')
const name = await question("Masukan Nama Anda: ")
const team = await question("Masukan Nama Team Anda: ")
const count = await question("Masukan Jumlah Upload: ")
for (let i = 0; i < count; i++) {
const url = "https://puskesmaspanjatan1.kulonprogokab.go.id/admin/saran?katakunci=Hacked+By+"+name+i
const data = qs.stringify({ nickname: name+i, teamname: team, urls: url })
const html = await axios.post("https://defacermirror.com/report", data, { headers: {
'Content-Type': 'application/x-www-form-urlencoded'
}
})
const $ = cheerio.load(html.data)
console.log(chalk.red(`[ Response ] ${$(".alert").eq(2).text()}\n`))
}
back()
}
break
case "2": {
process.stdout.write('\x1Bc')
console.log(chalk.red("Halo, Tools Ini Saya Buat Dengan Tujuan Membuktikan Skill Bukan Karena Sok Hebat, Tapi Karena Di Rendahkan\nTools Ini Di Buat Oleh Mr.Kyy404 Dari Team NotraSec"))
back()
}
break
case "3": {
process.stdout.write('\x1Bc')
console.log(chalk.red.bold(`Gw Buat Ini Tools Sendiri Tapi Beberapa Oranh Di Bawah Ini Berjasa/Merupakan Teman Gw

Mr.Kyy404
Mr.HelloKity
NotraSec
PasuruanSecTeam
Ijj Comunity
Infernalxploit
Matrixman
Petrus4sec ( Member Ijj )
G4rzzxploit ( Member Ijj )
Kayzx
BullyXploit
Rafi ( My Best Friend In The School )
Daffa ( My Best Friend In The School )
RilzyX7
Maaf Jika Saya Tidak Sempat Menyebutkan Nama Anda`))
back()
}
break
default:
console.log(chalk.red.bold("[ 404 ] Command Not Found"))
}
}
start()
