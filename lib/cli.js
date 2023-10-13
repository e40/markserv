#!/usr/bin/env node

'use strict'

import path from 'path'
import fs from 'fs'
import meow from 'meow'

import {init} from './server.js'
import {splash} from './splash.js'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {cliDefs} from './cli-defs.js'
const cliHelp = String(fs.readFileSync(path.join(__dirname, './cli-help.txt')))
const cliOpts = meow(cliHelp, cliDefs)

const validateServerPath = (serverPath, cwd) => {
	if (serverPath === cwd) {
		return cwd
	}

	let validatedPath

	if (serverPath[0]) {
		validatedPath = path.normalize(path.join(cwd, serverPath))
	}

	if (serverPath[0] === '/' || serverPath[0] === '.') {
		validatedPath = path.normalize(path.join(cwd, serverPath))
	}

	return validatedPath
}

const run = opts => {
	splash(opts.flags)

	const cwd = process.cwd()

	let dir = opts.input[0]
	if (dir === undefined) {
		dir = cwd
	}

	const validatedServerPath = validateServerPath(dir, cwd)
	opts.flags.dir = validatedServerPath
	opts.flags.$pathProvided = true
	opts.flags.$openLocation = true

	return init(opts.flags)
}

//TODO: asked Dima about this, but I have no idea how to fix:
// const cli = module.children

// if (cli) {
	// Run without args (process.argv will be picked up)
	run(cliOpts)
// } else {
	// module.exports = {run}
// }
