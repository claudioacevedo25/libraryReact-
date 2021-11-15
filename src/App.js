import { useContext, useState } from "react";
import Button from "./sui-library/src/button";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider";
import Typography from "./sui-library/src/typography";
import SplightRounded from "./sui-library/src/icons/splightRounded.jsx";
import SplightName from "./sui-library/src/icons/splightName.jsx";
import Avatar from "./sui-library/src/avatar";
import SwitchTest from "./components/switchTest";
import SelectLang from "./sui-library/src/selectLang";
import Popover from "./sui-library/src/popover";
import Header from "./sui-library/src/header";
import Spinner from "./sui-library/src/spinner";
import Tabs,{ Tab } from "./sui-library/src/tab/tabs.jsx";
import BasicCard from "./sui-library/src/basicCard/basicCard";
import UserCard from "./sui-library/src/userCard";
import "./App.css";

const languages = [
  { name: "en", id: 1 },
  { name: "sp", id: 2 },
  { name: "pr", id: 3 },
];
const pages = [
  { name: "home", id: 1, url: "/home" },
  { name: "digital solution", id: 2, url: "/digital-solution" },
  { name: "artificial energy", id: 3, url: "/artificial-energy" },
];

function App() {
  const { setTheme } = useContext(ThemeContext);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const isLoading = false; //turn on true to test Spinner component

  const handle = (lang) => {
    setSelectedLang(lang);
  };
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Header pages={pages} currentPage={currentPage} onClick={changePage} />
      <div className="App">
       
        <BasicCard
          title="Digital Protection Manager"
          subtitle="Go Now"
          width="250"
          height="124"
          onClick={setTheme}
        />
         <UserCard
          name="Cholod Estrella"
          image="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
          actionLabel="Actions"
          backLabel="Back"
          content={<Typography> Cosas </Typography>}
        />
        <div className="App__buttons">
          <Button onClick={setTheme}>invite user</Button>
          <Button onClick={setTheme} variant="alternate">
            Variant Alternate
          </Button>
        </div>
        <div className="App__Switch">
          <SwitchTest />
        </div>
        <div className="App__Icons">
          <SplightRounded />
          <SplightName />
        </div>
        <div className="App__SelectLang">
          <SelectLang
            onClick={handle}
            selectedLang={selectedLang}
            languages={languages}
          />
        </div>
        <div className="App__labels">
          <Typography variant="h1">Label h1</Typography>
          <Typography variant="h2">Label h2</Typography>
          <Typography variant="h3">Label h3</Typography>
          <Typography variant="h4">Label h4</Typography>
          <Typography variant="h5">Label h5</Typography>
          <Typography variant="h6">Label h6</Typography>
          <Typography variant="h7">Label h7</Typography>
          <Typography variant="subtitle">Label subtitle</Typography>
          <Typography variant="body1">Label body1</Typography>
          <Typography variant="bodyBold1">Label bodyBold1</Typography>
          <Typography variant="body2">Label body2</Typography>
          <Typography variant="bodyBold2">Label bodyBold2</Typography>
          <Typography variant="small">Label small</Typography>
          <Typography variant="smallBold">Label smallBold</Typography>
          <Typography variant="preTitle">Label preTitle</Typography>
          <Typography variant="textButton">Label textButton</Typography>
          <Typography>No variant</Typography>
          <Typography variant="body" color="red" size="1.8">
            Color and size
          </Typography>
      </div>
      </Tab>
      <Tab label="avatar" tabName='Avatar' height='50'>
        <Avatar
            src="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
            name="Thomas "
          />
          <Avatar name="Estrella cholod" />
<<<<<<< HEAD
      </Tab>
      <Tab label="popover" tabName='Popover' height='50'>
        <Popover position="left" displayLabel={<Avatar name="Estrella cholod" />}> <Avatar
          src="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
          name="Thomas "
        />
            <Typography variant="h3">Daniel moore</Typography>
            <Button >My Profile</Button>
        </Popover>
      </Tab>
      <Tab label="icons" tabName='Icons' height='50'>
          <SplightRounded />
          <SplightName />
      </Tab>
      <Tab label="selectLang" tabName='SelectLang' height='50' disabled>
        <div className='App__SelectLang'>
          <SelectLang onClick={handle} selectedLang={selectedLang} languages={languages} style={{width:'50px'}} />
        </div>
      </Tab>
      </Tabs>
    </div>
=======
        </div>
        <Popover
          position="left"
          displayLabel={<Avatar name="Estrella cholod" />}
        >
          {" "}
          <Avatar
            src="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
            name="Thomas "
          />
          <Typography variant="h3">Daniel moore</Typography>
          <Button>My Profile</Button>
        </Popover>
      </div>
>>>>>>> 3af52ef079373bd6d9ec4dd0da08a254d6076a8b
    </>
  );
}

export default App;
