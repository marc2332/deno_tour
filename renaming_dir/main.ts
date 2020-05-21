//Async way
await Deno.rename('async_method.txt', 'async_renamed.txt')

console.log('Async file renamed.')

//Sync way
Deno.renameSync('sync_method.txt', 'sync_renamed.txt')

console.log('Sync file renamed.')