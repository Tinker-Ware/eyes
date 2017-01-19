import React, { PropTypes } from "react";
import { fromJS } from "immutable";
import SSHKeysItem from "./SSHKeysItem";
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkbox: {
    marginLeft: "1em"
  },
  flatButton: {
    width: "100%"
  }
};

const SSHKeys = ( { enableSSHKey, showSSHKey, setSSHKeyTitle, requestPostCloudProviderSSHKey, setSSHKeyContent, cloudProviderAppState, userAppState} ) => {
  const handleSSHKeyClick = (e) => {
    e.preventDefault();
    enableSSHKey(fromJS({
      sshKeys: cloudProviderAppState.get("cloud_provider_ssh_keys"),
      id: parseInt(e.target.parentNode.id)
    }));
  };

  const StoreSSHKeyKeypress = (e) => {
    if(cloudProviderAppState.get("cloud_provider_ssh_keys_name") && cloudProviderAppState.get("cloud_provider_ssh_keys_public_key")){
      requestPostCloudProviderSSHKey(fromJS({"authorization": userAppState.get("user_session").toJS().token,"user_id": userAppState.get("user_session").toJS().id,"sshKeys": cloudProviderAppState.get("cloud_provider_ssh_keys"),"sshKey": {"name": cloudProviderAppState.get("cloud_provider_ssh_keys_name"),"public_key": cloudProviderAppState.get("cloud_provider_ssh_keys_public_key")
        }
      }));
      ShowSSHKeyButtonKeypress(e);
      setSSHKeyTitle(fromJS({
        name:""}));
      setSSHKeyContent(fromJS({
        public_key:""}));
    }
  };
  const ShowSSHKeyButtonKeypress = (e) => {
    showSSHKey(
      fromJS({
        show_cloud_provider_ssh_key: !cloudProviderAppState.get("show_cloud_provider_ssh_key")
      })
    );
  };
  const SSHKeyTitleKeypress = (e, title) => {
    e.preventDefault();
    setSSHKeyTitle(fromJS({
      name: e.target.value
    }));
  };
  const SSHKeyContentKeypress = (e, sshKeyContent) => {
    e.preventDefault();
    setSSHKeyContent(fromJS({
      public_key: e.target.value
    }));
  };
  const PrintSSHKeys =
    (cloudProviderAppState.get("cloud_provider_ssh_keys")) ?
      cloudProviderAppState.get("cloud_provider_ssh_keys").map((value, index) =>
        <SSHKeysItem
            end={(index == cloudProviderAppState.get("cloud_provider_ssh_keys").size - 1) ? "end" : ""}
            handleClick={handleSSHKeyClick}
            id={value.get("id")}
            identifier={index}
            isActive={value.get("enable")?true:false}
            key={index}
            value={value.get("title")}
        />) : "";

  const actions = [
      <RaisedButton
        label="Add SSH Key"
        primary
        onTouchTap={StoreSSHKeyKeypress}
        style={styles.flatButton}
      />,
    ];

  return (
    <div className="row">
      <div className="small-6 medium-3 large-3 columns">
        <FlatButton
            label="New SSH Key"
            primary
            onTouchTap={ShowSSHKeyButtonKeypress}
        />
      </div>
      <div className="small-6 medium-3 large-3 columns">
        <Checkbox
            label="Leonel"
            style={styles.checkbox}
        />
      </div>
      <div className="small-6 medium-3 large-3 columns end">
        <Checkbox
            label="Antonio"
            style={styles.checkbox}
        />
      </div>
      {PrintSSHKeys}
      <Dialog
        title="New SSH key"
        actions={actions}
        modal={false}
        open={cloudProviderAppState.get("show_cloud_provider_ssh_key")?true:false}
        onRequestClose={ShowSSHKeyButtonKeypress}
      >
        <TextField
          floatingLabelText="SSH Key Content"
          fullWidth
          hintText=
            "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
            GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
            Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
            t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
            mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
            NrRFi9wrf+M7Q== schacon@mylaptop.local"
          name="SSHKeyContent"
          multiLine={true}
          onChange={SSHKeyContentKeypress}
          type="text"
          value={cloudProviderAppState.get("cloud_provider_ssh_keys_public_key")?cloudProviderAppState.get("cloud_provider_ssh_keys_public_key"):""}
          rows={6}
          rowsMax={6}
        />
        <TextField
            floatingLabelText="Name"
            fullWidth
            hintText="Devop Key"
            name="Name"
            onChange={SSHKeyTitleKeypress}
            type="text"
            value={cloudProviderAppState.get("cloud_provider_ssh_keys_name")?cloudProviderAppState.get("cloud_provider_ssh_keys_name"):""}
        />
      </Dialog>
    </div>
  );
};

SSHKeys.propTypes = {
  enableSSHKey: PropTypes.func.isRequired,
  requestPostCloudProviderSSHKey: PropTypes.func.isRequired,
  showSSHKey: PropTypes.func.isRequired,
  setSSHKeyTitle: PropTypes.func.isRequired,
  setSSHKeyContent: PropTypes.func.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default SSHKeys;
