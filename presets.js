import { combineRgb } from '@companion-module/base'

export function getPresetDefinitions(self) {
	const presets = {}

	for (const input of self.CHOICES_INPUTS) {
		presets[`select_${input.id}`] = {
			type: 'button',
			category: 'Select Input',
			name: 'Select',
			style: {
				text: `${input.label}\\n> $(${self.config.label}:input_route${input.id})`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'select_input',
							options: {
								input: input.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'selected',
					options: {
						input: input.id,
					},
					style: {
						color: combineRgb(0, 0, 0),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		}
	}

	for (const output of self.CHOICES_OUTPUTS) {
		presets[`switch_output_${output.id}`] = {
			type: 'button',
			category: 'Switch Output',
			name: 'Switch',
			style: {
				text: `${output.label}\\n< $(${self.config.label}:output_route${output.id})`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'switch_output',
							options: {
								output: output.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'output',
					options: {
						output: output.id,
					},
					style: {
						color: combineRgb(0, 0, 0),
						bgcolor: combineRgb(0, 255, 0),
					},
				},
			],
		}
	}

	for (const input of self.CHOICES_INPUTS) {
		presets[`all_${input.id}`] = {
			type: 'button',
			category: 'All',
			name: 'All',
			style: {
				text: `All\\n${input.label}`,
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(32, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'all',
							options: {
								selected: false,
								input: input.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	presets['in-to-out'] = {
		type: 'button',
		category: 'In to Out',
		name: 'In to Out',
		style: {
			text: 'IN1 to OUT4',
			size: 'auto',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: 'input_output',
						options: {
							input: '1',
							output: '4',
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	return presets
}
