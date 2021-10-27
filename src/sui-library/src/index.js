import Button from "./button/button.jsx";
import Typography from "./typography/typography.js";
import SplightNameIcon from "./icons/splightName.jsx";
import SplightRoundedIcon from "./icons/splightRounded.jsx";
import ThemeContextProvider, {ThemeContext} from "./themeContextProvider/themeContextProvider.jsx"
import theme from './ThemeContextProvider/theme.js'

// eslint-disable-next-line import/no-anonymous-default-export

export default { 
    Button, 
    Typography, 
    ThemeContextProvider, 
    ThemeContext, 
    theme,
    SplightRoundedIcon,
    SplightNameIcon
 };