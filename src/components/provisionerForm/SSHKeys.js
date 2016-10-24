import React, { PropTypes } from "react";
import { fromJS } from "immutable";
import SSHKeysItem from "./SSHKeysItem";

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
    e.preventDefault();
    showSSHKey(
      fromJS({
        show_cloud_provider_ssh_key: !cloudProviderAppState.get("show_cloud_provider_ssh_key")
      })
    );
  };
  const SSHKeyTitleKeypress = (e) => {
    e.preventDefault();
    setSSHKeyTitle(fromJS({
      name: e.target.value
    }));
  };
  const SSHKeyContentKeypress = (e) => {
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

  const AddSHHKeyButton =
    !(cloudProviderAppState.get("show_cloud_provider_ssh_key")) ?
      <p>
        <a
            href="javascript:void(0);"
            id="show_cloud_provider_ssh_key"
            onClick={ShowSSHKeyButtonKeypress} >
          + Add SSH Key
        </a>
      </p> :
      <div className="ssh_key_content">
        <div className="large-offset-9 large-3 medium-9">
          <p className="right">
            <a
                href="javascript:void(0);"
                id="hide_ssh_key"
                onClick={ShowSSHKeyButtonKeypress} >
              Close
            </a>
          </p>
        </div>
        <form>
          <div className="row">
            <div className="columns">
              <label className="error">
                <textarea
                    cols="50"
                    id="ssh_key_content_value"
                    onChange={SSHKeyContentKeypress}
                    placeholder="SSH Key Content"
                    rows="5"
                    value={cloudProviderAppState.get("cloud_provider_ssh_keys_public_key")?cloudProviderAppState.get("cloud_provider_ssh_keys_public_key"):""}
                />
              </label>
              <div
                  className="hide"
                  id="ssh_key_content_value_error">
                <small className="error hide">SSH Key Content can not be blank</small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="columns">
              <div className="row">
                <div className="small-9 columns">
                  <label className="error">
                    <input
                        id="ssh_key_content_title"
                        maxLength="20"
                        onChange={SSHKeyTitleKeypress}
                        placeholder="Title"
                        type="text"
                        value={cloudProviderAppState.get("cloud_provider_ssh_keys_name")?cloudProviderAppState.get("cloud_provider_ssh_keys_name"):""}
                    />
                  </label>
                  <div
                      className="hide"
                      id="ssh_key_content_title_error">
                    <small className="error">SSH Key Title can not be blank</small>
                  </div>
                </div>
                <div className="small-3 columns">
                  <a
                      className="button postfix">Add SSH Key
                      href="javascript:void(0);"
                      id="save_ssh_key"
                      onClick={StoreSSHKeyKeypress}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p>Adding an SSH key is a recommended security measure.</p>
      </div>;

  const SSHKeyForm =
    cloudProviderAppState.get("cloud_provider")?
      <div className="large-12 medium-12 small-12 columns end">
        {AddSHHKeyButton}
      </div> : "";

  return (
    <div
        className="row"
        data-magellan-destination="ssh-keys"
        id="ssh-keys">
      <h2>
        <i className="step fi-key" />
         Add SSH Keys
      </h2>
    {PrintSSHKeys}
    {SSHKeyForm}
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
