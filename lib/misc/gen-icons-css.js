import fs from 'fs'
import path from 'path'

import {materialIcons} from 'icons/material-icons.js'

const iconCSS = []

iconCSS.push(`.icon {
    content: "";
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    float: left;
    margin: 0 -28px 0 0;
}
`)

Reflect.ownKeys(materialIcons.iconDefinitions).forEach(iconName => {
	const iconFile = materialIcons.iconDefinitions[iconName].iconPath
	iconCSS.push(`.icon.${iconName}:before {
    background: url("{markserv}icons/${iconFile}") no-repeat;
}
`)
})

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.writeFileSync(path.join(__dirname, 'icons', 'icons.css'), iconCSS.join(''))
