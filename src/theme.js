import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[300],
        },
        secondary: {
            main: blue[500],
        },
        status: {
            danger: 'orange'
        }
    },
});

export default theme