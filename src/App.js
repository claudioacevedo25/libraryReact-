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
import BasicCard from "./sui-library/src/basicCard/basicCard";
import UserCard from "./sui-library/src/userCard";
import Tabs, {Tab} from "./sui-library/src/tab/tabs.jsx";
import Modal from "./sui-library/src/modal";
import Search from "./sui-library/src/searchInput";
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
  const [show, setShow] = useState(false);
  const isLoading = false; //turn on true to test Spinner component

  const handle = (lang) => {
    setSelectedLang(lang);
  };
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const onChangeData = (e) => {
    
  }

  return (
    <>
      {isLoading && <Spinner />}
      <Header pages={pages} currentPage={currentPage} onClick={changePage} />
      <div className="App">
       <Tabs>
        <Tab label="basiccard" tabName='basicCard' >
          <BasicCard
          title="Digital Protection Manager"
          subtitle="Go Now"
          width="250"
          height="124"
          onClick={setTheme}
        />
        <div className="appSearch">
        <Search onChange={onChangeData} />
        </div>
        </Tab>
        <Tab label="usercard" tabName='UserCard'>
        <UserCard
          name="Cholod Estrella"
          image="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
          actionLabel="Actions"
          backLabel="Back"
          content={<Typography> Cosas </Typography>}
        />
        </Tab>
       </Tabs>
        <div className="App__buttons">
          <Button onClick={setTheme}>invite user</Button>
          <Button onClick={()=> setShow(!show)} variant="alternate">
            Show Modal
          </Button>
          <Modal show={show} onClose={()=> setShow(!show)} >
          <div>
            <Typography variant="h3">Sure you want to accept?</Typography>
            <Typography variant="h3">Label h3</Typography>
            <Typography variant="h3">Label h3</Typography>
            <Typography variant="h3">Label h3</Typography>
          </div>
          <Button onClick={setTheme}>invite user</Button>
        </Modal>
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
        <Avatar
          src="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
          name="Thomas "
        />
        <Avatar name="Estrella cholod" />
        <Popover
          position="left"
          displayLabel={<Avatar name="Estrella cholod" />}
        >
          <Avatar
            src="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
            name="Thomas "
          />
          <Typography variant="h6">Daniel moore</Typography>
          <Button>My Profile</Button>
        </Popover>
        <SplightRounded />
        <SplightName />
        <div className="App__SelectLang">
          <SelectLang
            onClick={handle}
            selectedLang={selectedLang}
            languages={languages}
            style={{ width: "50px" }}
          />
        </div>
        <div>
          <Tabs width='80'>
            <Tab label="switch" tabName='Switch' height='50' onClick={setTheme}></Tab>
            <Tab label="typography" tabName='Widgets' height='50' disabled></Tab>
          </Tabs>
        </div>
    </div>
    </>
  );
}

export default App;
