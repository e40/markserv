
export const cliDefs = {
    importMeta: import.meta, //required
    flags: {
	port: {
	    shortFlag: 'p',
	    default: '8642'
	},
	livereloadport: {
	    shortFlag: 'b',
	    default: 35729
	},
	address: {
	    shortFlag: 'a',
	    default: 'localhost'
	},
	silent: {
	    shortFlag: 's',
	    default: false
	},
	disableupgrade: {
	    type: 'boolean',
	    shortFlag: 'D',
	    default: false
	},
	verbose: {
	    shortFlag: 'v',
	    default: false
	}
    }
}
