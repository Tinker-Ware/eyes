import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Steps = ( {setActiveStep, setStack, removeStack, stacksOptions, stacks} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeStack = (value, insert) => {
    if(insert)
      setStack(fromJS({
        stack: value
      }));
    else
      removeStack(fromJS({
        stack: value
      }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"Which framework you need?"}</p>
      <Options
          handleChange={handleChangeStack}
          options={stacksOptions}
          optionsActives={stacks}
      />
      <div className="pdt-2">
        <RaisedButton
            disabled={stacks.size==0?true:false}
            label={"Next"}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  removeStack: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setStack: PropTypes.func.isRequired,
  stacks: PropTypes.object.isRequired,
  stacksOptions: PropTypes.object.isRequired
};

export default Steps;
