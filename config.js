import { Regex } from '@companion-module/base'

export function getConfigFields() {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module will connect to an MT-VIKI MT-HD0808 8x8 HDMI Matrix switch.',
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'IP Address',
			width: 6,
			default: '192.168.1.200',
			regex: Regex.IP,
		},
		{
			type: 'number',
			id: 'port',
			label: 'IP Port',
			width: 6,
			min: 1,
			max: 65535,
			default: 8080,
		},
		{
			type: 'number',
			id: 'poll_interval',
			label: 'Polling Interval (ms)',
			min: 300,
			max: 300000,
			default: 60000,
			width: 8,
		},
		{
			type: 'checkbox',
			id: 'polled_data',
			label: 'Use polled data from unit:',
			default: false,
			width: 8,
		},
		{
			type: 'checkbox',
			id: 'log_responses',
			label: 'Debug returned data    :',
			default: false,
			width: 6,
		},
		{
			type: 'checkbox',
			id: 'log_tokens',
			label: 'Debug token data    :',
			default: false,
			width: 6,
		},
	]
}
