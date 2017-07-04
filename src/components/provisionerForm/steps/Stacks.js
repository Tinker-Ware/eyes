import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Steps = ( {rolesActions, setActiveStep, setStack, removeStack, stacksOptions, stacks} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeStack = (stack, insert) => {
    if(insert){
      setStack(fromJS({
        stack: stack
      }));
      if(stacks.size != 0)
        handleChangeStatusStack(stacks.first(), false);
      handleChangeStatusStack(stack, true);
    }else{
      removeStack(fromJS({
        stack: stack
      }));
      handleChangeStatusStack(stack, false);
    }
  };
  const handleChangeStatusStack = (stack, status) => {
    switch (stack) {
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
      case "spring":
        rolesActions.setEnableSpring(
          fromJS({
            enable_spring: status
          })
        );
        break;
      case "html5":
        rolesActions.setEnablePlainhtml(
          fromJS({
            enable_plainhtml: status
          })
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"Which framework do you need?"}</p>
      <Options
          handleChange={handleChangeStack}
          options={stacksOptions}
          optionsActives={stacks}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Previous Step"}
            onTouchTap={()=>setActiveStep(0)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={stacks.size==0?true:false}
            label={"Next Step"}
            onTouchTap={()=>setActiveStep(2)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  removeStack: PropTypes.func.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setStack: PropTypes.func.isRequired,
  stacks: PropTypes.object.isRequired,
  stacksOptions: PropTypes.object.isRequired
};

export default Steps;
