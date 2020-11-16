import React, { useState } from 'react'
import AlarmIcon from '@material-ui/icons/AddAlarm'
import { IconButton, InputAdornment } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import LuxonUtils from '@date-io/luxon'

interface DateTimePickerProps {
	label?: string
	show: boolean
	onClose?: () => void
	selectedDate: Date | null
	handleDateChange: any
	onAccept?: any
}

// empty jsx to replace default datepicker input
const comp = () => <div></div>

function CustomDateTimePicker({ show, onClose, selectedDate, handleDateChange, onAccept }: DateTimePickerProps) {
	return (
		<MuiPickersUtilsProvider utils={LuxonUtils}>
			<DateTimePicker
				autoOk
				disableFuture
				open={show}
				onClose={onClose}
				ampm={true}
				defaultValue={selectedDate}
				value={selectedDate}
				TextFieldComponent={comp}
				onChange={(a) => handleDateChange(a)}
				onAccept={onAccept}
				animateYearScrolling={true}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton>
								<AlarmIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</MuiPickersUtilsProvider>
	)
}

export default CustomDateTimePicker