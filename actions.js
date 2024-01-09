export function getActionDefinitions(self) {
	return {
		select_input: {
			name: 'Select Input',
			options: [
				{
					type: 'dropdown',
					label: 'Input Port',
					id: 'input',
					default: '1',
					choices: self.CHOICES_INPUTS,
				},
			],
			callback: (action) => {
				self.selectedInput = action.options.input

				self.checkFeedbacks()
			},
		},
		switch_output: {
			name: 'Switch Output',
			options: [
				{
					type: 'dropdown',
					label: 'Output Port',
					id: 'output',
					default: '1',
					choices: self.CHOICES_OUTPUTS,
				},
			],
			callback: (action) => {
				self.sendCommand(`SW ${self.selectedInput} ${action.options.output}`)
				self.updateRoute(action.options.output, self.selectedInput)

				self.checkFeedbacks()
			},
		},
		input_output: {
			name: 'Input to Output',
			options: [
				{
					type: 'dropdown',
					label: 'Input Port',
					id: 'input',
					default: '1',
					choices: self.CHOICES_INPUTS,
				},
				{
					type: 'dropdown',
					label: 'Output Port',
					id: 'output',
					default: '1',
					choices: self.CHOICES_OUTPUTS,
				},
			],
			callback: (action) => {
				self.sendCommand(`SW ${action.options.input} ${action.options.output}`)
				self.updateRoute(action.options.output, action.options.input)

				self.checkFeedbacks()
			},
		},
		lock_keys: {
			name: 'Lock keys',
			options: [],
			callback: (action) => {
				self.sendCommand(`SetKeyLock 1`)
				self.updateLock(1)

				self.checkFeedbacks()
			},
		},
		unlock_keys: {
			name: 'Unlock keys',
			options: [],
			callback: (action) => {
				self.sendCommand(`SetKeyLock 0`)
				self.updateLock(0)

				self.checkFeedbacks()
			},
		},
		toggle_keylock: {
			name: 'Toggle keylock',
			options: [],
			callback: (action) => {
				self.sendCommand(`SetKeyLock ${ 1 - self.keylock }`)
				self.updateLock(1 - self.keylock)

				self.checkFeedbacks()
			},
		},
		all: {
			name: 'All outputs to selected input',
			options: [
				{
					type: 'checkbox',
					label: 'Use selected (or defined input)',
					id: 'selected',
					default: false,
				},
				{
					type: 'dropdown',
					label: 'Defined Input Port',
					id: 'input',
					default: '1',
					choices: self.CHOICES_INPUTS,
				},
			],
			callback: (action) => {
				let myInput = self.selectedInput
				if (!action.options.selected) {
					myInput = action.options.input
				}
				self.sendCommand(`SW ${myInput} ` + generateNumberString(self.CHOICES_OUTPUTS.length))
				for (let key in self.outputRoute) {
					self.updateRoute(key, myInput)
				}

				self.checkFeedbacks()
			},
		},
	}
}

function generateNumberString(n) {
	let result = ''

	for (let i = 1; i <= n; i++) {
		result += i + ' '
	}

	// Trim the trailing space
	result = result.trim()
	return result
}
