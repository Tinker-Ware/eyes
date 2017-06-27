import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Repositories = ( {rolesActions, setActiveStep, setRepo, removeRepo, repositoriesOptions, repositories} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeRepository = (repository, insert) => {
    if(insert){
      setRepo(fromJS({
        repository: repository
      }));
      if(repositories.size != 0)
        handleChangeStatusStack(repositories.first(), false);
      handleChangeStatusStack(repository, true);
    }else{
      removeRepo(fromJS({
        repository: repository
      }));
      handleChangeStatusStack(repository, false);
    }
  };
  const handleChangeStatusStack = (repository, status) => {
    switch (repository) {
      case "yii":
        rolesActions.setEnableYii(
          fromJS({
            enable_yii: status
          })
        );
        break;
      case "yiiadvanced":
        rolesActions.setEnableYiiAdvanced(
          fromJS({
            enable_yii_advanced: status
          })
        );
        break;
      case "html5":
        break;
      default:
        break;
    }
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"Which framework do you need?"}</p>
      <Options
          handleChange={handleChangeRepository}
          options={repositoriesOptions}
          optionsActives={repositories}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Previous Step"}
            onTouchTap={()=>setActiveStep(0)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={repositories.size==0?true:false}
            label={"Next Step"}
            onTouchTap={()=>setActiveStep(2)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Repositories.propTypes = {
  removeRepo: PropTypes.func.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setRepo: PropTypes.func.isRequired,
  repositories: PropTypes.object.isRequired,
  repositoriesOptions: PropTypes.object.isRequired
};

export default Repositories;
