import Button from "./button/button.jsx";
import Typography from "./typography/typography.jsx";
import SplightNameIcon from "./icons/splightName.jsx";
import SplightRoundedIcon from "./icons/splightRounded.jsx";
import Avatar from "./avatar/avatar.jsx";
import ToggleSwitch from "./switch/toggleSwitch.jsx";
import SelectLang from "./selectLang/selectLang.jsx";
import Popover from "./popover/popover.jsx";
import Header from "./header/header.jsx";
import ThemeContextProvider, {ThemeContext} from "./themeContextProvider/themeContextProvider.jsx"
import theme from './ThemeContextProvider/theme.js'


// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    Avatar,
    Button, 
    Typography, 
    ThemeContextProvider, 
    ThemeContext, 
    theme,
    SplightRoundedIcon,
    SplightNameIcon,
    ToggleSwitch,
    SelectLang,
    Popover,
    Header,
 };
