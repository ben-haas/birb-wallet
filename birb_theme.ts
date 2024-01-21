import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

//https://tints.dev/tezosblue/0F61FF
//https://tints.dev/tezospink/E32081
//https://tints.dev/tezosltblue/73F0FE
//https://tints.dev/tezosgrey/E3E4E5

export const birbTheme: CustomThemeConfig = {
	name: 'birb',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Hepta Slab, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #0F61FF
		'--color-primary-50': '229 238 255', // #e5eeff
		'--color-primary-100': '209 224 255', // #d1e0ff
		'--color-primary-200': '158 190 255', // #9ebeff
		'--color-primary-300': '112 160 255', // #70a0ff
		'--color-primary-400': '61 126 255', // #3d7eff
		'--color-primary-500': '15 97 255', // #0f61ff
		'--color-primary-600': '0 71 214', // #0047d6
		'--color-primary-700': '0 54 163', // #0036af
		'--color-primary-800': '0 36 107', // #00246b
		'--color-primary-900': '0 19 56', // #001338
		// secondary | #E32081
		'--color-secondary-50': '252 232 242', // #fce8f2
		'--color-secondary-100': '249 210 230', // #f9d2e6
		'--color-secondary-200': '244 164 204', // #f4a4cc
		'--color-secondary-300': '238 119 179', // #ee77b3
		'--color-secondary-400': '233 78 156', // #e94e9c
		'--color-secondary-500': '227 32 129', // #e32081
		'--color-secondary-600': '186 23 105', // #ba1769
		'--color-secondary-700': '136 17 77', // #88114d
		'--color-secondary-800': '91 11 51', // #5b0b33
		'--color-secondary-900': '45 6 26', // #2d061a
		// tertiary | #73F0FE
		'--color-tertiary-50': '240 253 255', // #f0fdff
		'--color-tertiary-100': '225 252 255', // #e1fcff
		'--color-tertiary-200': '199 249 255', // #c7f9ff
		'--color-tertiary-300': '169 246 254', // #a9f6fe
		'--color-tertiary-400': '144 243 254', // #90f3fe
		'--color-tertiary-500': '115 240 254', // #73f0fe
		'--color-tertiary-600': '42 232 254', // #2ae8fe
		'--color-tertiary-700': '2 196 218', // #02c4da
		'--color-tertiary-800': '1 132 147', // #018493
		'--color-tertiary-900': '0 64 71', // #004047
		// success | #4CAF50
		'--color-success-50': '228 243 229', // #e4f3e5
		'--color-success-100': '219 239 220', // #dbefdc
		'--color-success-200': '210 235 211', // #d2ebd3
		'--color-success-300': '183 223 185', // #b7dfb9
		'--color-success-400': '130 199 133', // #82c785
		'--color-success-500': '76 175 80', // #4CAF50
		'--color-success-600': '68 158 72', // #449e48
		'--color-success-700': '57 131 60', // #39833c
		'--color-success-800': '46 105 48', // #2e6930
		'--color-success-900': '37 86 39', // #255627
		// warning | #FFC107
		'--color-warning-50': '255 246 218', // #fff6da
		'--color-warning-100': '255 243 205', // #fff3cd
		'--color-warning-200': '255 240 193', // #fff0c1
		'--color-warning-300': '255 230 156', // #ffe69c
		'--color-warning-400': '255 212 81', // #ffd451
		'--color-warning-500': '255 193 7', // #FFC107
		'--color-warning-600': '230 174 6', // #e6ae06
		'--color-warning-700': '191 145 5', // #bf9105
		'--color-warning-800': '153 116 4', // #997404
		'--color-warning-900': '125 95 3', // #7d5f03
		// error | #F44336
		'--color-error-50': '253 227 225', // #fde3e1
		'--color-error-100': '253 217 215', // #fdd9d7
		'--color-error-200': '252 208 205', // #fcd0cd
		'--color-error-300': '251 180 175', // #fbb4af
		'--color-error-400': '247 123 114', // #f77b72
		'--color-error-500': '244 67 54', // #F44336
		'--color-error-600': '220 60 49', // #dc3c31
		'--color-error-700': '183 50 41', // #b73229
		'--color-error-800': '146 40 32', // #922820
		'--color-error-900': '120 33 26', // #78211a
		// surface | #E3E4E5
		'--color-surface-50': '252 252 253', // #fcfcfd
		'--color-surface-100': '250 250 250', // #fafafa
		'--color-surface-200': '244 245 245', // #f4f5f5
		'--color-surface-300': '239 240 240', // #eff0f0
		'--color-surface-400': '234 235 235', // #eaebeb
		'--color-surface-500': '227 228 229', // #e3e4e5
		'--color-surface-600': '181 184 186', // #b5b8ba
		'--color-surface-700': '133 138 142', // #858a8e
		'--color-surface-800': '88 92 95', // #585c5f
		'--color-surface-900': '44 46 48' // #2c2e30
	}
};
