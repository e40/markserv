import path from 'path'
import chalk from 'chalk'
import termImg from 'term-img'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const msg = (type, msg) => {
	console.log(chalk`{bgGreen.black   Markserv  }{white  ${type}: }` + msg)
}

export const splash = flags => {
	if (flags && flags.silent) {
		return
	}

	const logoPath = path.join(__dirname, '..', 'media', 'markserv-logo-term.png')
	termImg(logoPath, {
		width: 12,
		fallback: () => {}
	})

	msg('boot', 'starting Markserv...', flags)
}
