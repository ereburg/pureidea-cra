const path = require('path')
const { ESLINT_MODES } = require('@craco/craco')
const resolve = arg => path.resolve(__dirname, arg)

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		alias: {
			'~': resolve('src/'),
			'@components/*': resolve('src/components/*'),
			'@images/*': resolve('src/assets/images/*'),
		},
	},
	jest: {
		configure: {
			moduleNameMapper: {
				'^~(.*)$': '<rootDir>/src$1',
			},
			roots: ['<rootDir>/src/', '<rootDir>/test/'],
			testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).[jt]s?(x)'],
			setupFilesAfterEnv: '<rootDir>/test/setupTests.ts',
		},
	},
	eslint: {
		mode: ESLINT_MODES.file,
	},
}
