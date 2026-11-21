/// <reference path="./sdk/index.d.ts" />

// To use this file, set `"type": "extension"` and `"entry": "index.js"` in plugin.json,
// and declare the events/domains you need inside `"permissions"`.

noctrinth.log('Plugin loaded, version', noctrinth.version)

noctrinth.on('instance:launch', async (payload) => {
	const raw = await noctrinth.storage.get('launch_count')
	const count = (Number(raw) || 0) + 1
	await noctrinth.storage.set('launch_count', String(count))
	noctrinth.log(`Instance launched: ${payload.instanceId} (total: ${count})`)
})

noctrinth.on('instance:exit', (payload) => {
	noctrinth.log(`Instance exited: ${payload.instanceId}`)
})
