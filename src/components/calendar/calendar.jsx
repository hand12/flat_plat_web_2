import React from 'react';
import styles from './calendar.scss';

import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	palette: {
		pickerHeaderColor: "#343744",
		primary1Color: "#EB8012",
		primary2Color: "#EB8012",
	}
})

class CalendarField extends React.Component {
	constructor(props) {
    super(props);

		const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: true,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
	};

	formatDate(date){
		return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
	}

	render () {
		return (
			<div className={ styles.date_container }>
				<div className={ styles.left_date_container }>
					<div className={ styles.date_field }>
						<label htmlFor="departure_date">出発日</label>
						<MuiThemeProvider muiTheme={ muiTheme } >
							<DatePicker
								onChange={this.handleChangeMinDate}
								maxDate={this.state.maxDate}
								defaultDate={this.props.form.plan.departure_date}
								disableYearSelection={this.state.disableYearSelection}
								mode="landscape"
								autoOk={this.state.autoOk}
								formatDate={this.formatDate}
								id="departure_date"
								className={ styles.calendar }
							/>
						</MuiThemeProvider>
					</div>
				</div>
				<div className={ styles.right_date_container }>
					<div className={ styles.date_field }>
						<label htmlFor="return_date">帰宅日</label>
						<MuiThemeProvider muiTheme={ muiTheme } >
							<DatePicker
								onChange={this.handleChangeMaxDate}
								minDate={this.state.minDate}
								defaultDate={this.props.form.plan.return_date}
								disableYearSelection={this.state.disableYearSelection}
								mode="landscape"
								autoOk={this.state.autoOk}
								formatDate={this.formatDate}
								id="return_date"
								className={ styles.calendar }
							/>
						</MuiThemeProvider>
					</div>
				</div>
			</div>
		)
	}
}

export default CalendarField;