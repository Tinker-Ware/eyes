import React, {PropTypes} from "react";
import {fromJS} from "immutable";
import cookie from "react-cookie";
import {Card, CardActions, CardHeader} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";

const CloudProvider = ( {clearCloudProviderSSHKeys, cloudProviderAppState, userAppState, requestCloudProviderAccess, setCloudProvider} ) => {
  if(userAppState.get("user_session")){
    let timer;
    timer = setInterval(function(){
      if(cookie.load("digitalocean_oauth")) {
        requestCloudProviderAccess(fromJS({
          "authorization": userAppState.get("user_session").toJS().token,
          "oauth_request": {
            "user_id": userAppState.get("user_session").toJS().id,
            "code": cookie.load("digitalocean_oauth").code
          }
        }));
        cookie.remove("digitalocean_oauth");
        clearInterval(timer);
      }
    }, 1000);
  }
  const handleDigitalOceanLogin = (e, isConnected) => {
    e.preventDefault();
    if(!isConnected){
      let win = window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id="+process.env.INTEGRATIONS.DIGITALOCEAN.CLIENTID+"&redirect_uri="+process.env.INTEGRATIONS.DIGITALOCEAN.REDIRECTURI+"&response_type=code&scope=read+write","Digital Ocean Oauth","height=600,width=850");
      if (win) win.focus();
    }else{
      setCloudProvider(fromJS({
        cloud_provider:""}));
      clearCloudProviderSSHKeys(fromJS({
        cloud_provider_ssh_keys:""}));
    }
  };
  return (
    <div className="small-12 medium-6 large-6 columns">
      <Card>
        <CardHeader
            avatar={<FontIcon className="icon icon-digitalocean"/>}
            subtitle="Cloud Provider"
            title="DigitalOcean"
        />
        <CardActions>
          <FlatButton
              label={cloudProviderAppState.get("cloud_provider")? "Connected":"Connect Digital Ocean"}
              onClick={(event)=>handleDigitalOceanLogin(event, cloudProviderAppState.get("cloud_provider")? true : false)}
              primary
          />
        </CardActions>
      </Card>
    </div>
  );
};

CloudProvider.propTypes = {
  clearCloudProviderSSHKeys: PropTypes.func.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  requestCloudProviderAccess: PropTypes.func.isRequired,
  setCloudProvider: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default CloudProvider;
