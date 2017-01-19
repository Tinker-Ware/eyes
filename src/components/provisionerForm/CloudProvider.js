import React, {PropTypes} from "react";
import {Link} from "react-router";
import {fromJS} from "immutable";
import cookie from "react-cookie";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

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
          title="DigitalOcean"
          subtitle="Cloud Provider"
          avatar={<FontIcon className="icon icon-digitalocean"/>}
        />
        <CardActions>
          <FlatButton
              label={cloudProviderAppState.get("cloud_provider")? "Connected":"Connect Digital Ocean"}
              primary
              onClick={(event)=>handleDigitalOceanLogin(event, cloudProviderAppState.get("cloud_provider")? true : false)}
          />
        </CardActions>
      </Card>
    </div>
  );
};

CloudProvider.propTypes = {
  clearCloudProviderSSHKeys: PropTypes.func.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  requestCloudProviderAccess: PropTypes.func.isRequired,
  setCloudProvider: PropTypes.func.isRequired
};

export default CloudProvider;
