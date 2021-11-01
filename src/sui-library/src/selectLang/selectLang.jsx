import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../typography/typography.jsx';
import './selectLang.css';


const SelectLang = ({className, languages, onClick, selectedLang}) => {
    
    return (
        <div className='selectLangComponent'>
            {
                languages.map((lang, index) => 
                  
                    <button 
                        key={index}
                        className={`${className} selectLangButton`}
                        onClick={()=> onClick(lang)}
                    >
                       <span className={`addPiped ${selectedLang.id === lang.id && "selectLangButton--active" }`}>
                           <Typography  variant='textButton' size={0.6}>
                                {lang.name}
                           </Typography>
                       </span>
                    </button>
                   
                )
            }
        </div>
    )
};

SelectLang.defaultProps = {
    selectedLang: {id:1},
    onClick:()=>{},
    languages:[],
  };
  
SelectLang.propTypes = {
    selectedLang: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    languages: PropTypes.array.isRequired,
  };
  

export default SelectLang;