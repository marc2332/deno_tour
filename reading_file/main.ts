//Async - UTF-8 by default
const utf8Content = await Deno.readTextFile('some_data.txt')
console.log('UTF-8 by default, Async -> ',utf8Content)

//Async - Specyfing the encoding
const decoder = new TextDecoder('utf-8')
const encodedContent= await Deno.readFile('some_data.txt')
console.log('UTF-8, Async -> ',decoder.decode(encodedContent))

//Sync - UTF-8 by default
const utf8ContentSync = Deno.readTextFileSync('some_data.txt')
console.log('UTF-8 by default, Sync -> ',utf8ContentSync)

//Sync - Specyfing the encoding
const decoderSync = new TextDecoder('utf-8')
const encodedContentSync = Deno.readFileSync('some_data.txt')
console.log('UTF-8, Sync -> ',decoderSync.decode(encodedContentSync))
