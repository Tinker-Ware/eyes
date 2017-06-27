import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Addons = ( {setActiveStep, setAddons, removeAddons, addonsOptions, addons} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeAddons = (addon, insert) => {
    if(insert)
      setAddons(fromJS({
        addon: addon
      }));
    else
      removeAddons(fromJS({
        addon: addon
      }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"Select your Add-ons"}</p>
      <Options
          handleChange={handleChangeAddons}
          options={addonsOptions}
          optionsActives={addons}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Previous Step"}
            onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
        <RaisedButton
            label={"Create Project"}
            // onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Addons.propTypes = {
  removeAddons: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setAddons: PropTypes.func.isRequired,
  addons: PropTypes.object.isRequired,
  addonsOptions: PropTypes.object.isRequired
};

export default Addons;
