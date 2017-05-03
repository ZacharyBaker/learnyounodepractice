let args = process.argv.slice(2)

console.log(args.reduce((a,b)=>{return Number(a)+Number(b)},0))