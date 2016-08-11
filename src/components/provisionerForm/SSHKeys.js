import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Map, fromJS} from 'immutable';
import SSHKeysItem from './SSHKeysItem';

const SSHKeys = ( {deleteSSHKey, enableSSHKey, showSSHKey, setSSHKey, setSSHKeyTitle, setSSHKeyContent, cloudProviderAppState} ) => {
  const handleSSHKeyClick = (e) => {
    enableSSHKey(fromJS({
      sshKeys: cloudProviderAppState.get('cloud_provider_ssh_keys'),
      id: parseInt(e.target.parentNode.id)
    }));
  };
  
  const StoreSSHKeyKeypress = (e) => {
    if(cloudProviderAppState.get('cloud_provider_ssh_keys_name') && cloudProviderAppState.get('cloud_provider_ssh_keys_public_key')){
      // async call to cloudprovider api
      ShowSSHKeyButtonKeypress();
      setSSHKeyTitle(fromJS({
        name: ''
      }));
      setSSHKeyContent(fromJS({
        public_key: ''
      }));
    }
  };
  
  const ShowSSHKeyButtonKeypress = (e) => {
    showSSHKey(
      fromJS({
        show_cloud_provider_ssh_key: !cloudProviderAppState.get('show_cloud_provider_ssh_key')
      })
    );
  };
  
  const SSHKeyTitleKeypress = (e) => {
    setSSHKeyTitle(fromJS({
      name: e.target.value
    }));
  };
  
  const SSHKeyContentKeypress = (e) => {
    setSSHKeyContent(fromJS({
      public_key: e.target.value
    }));
  };
  
  const PrintSSHKeys = 
    (cloudProviderAppState.get('cloud_provider_ssh_keys')) ?
      cloudProviderAppState.get('cloud_provider_ssh_keys').map((value, index) => 
        <SSHKeysItem
          handleClick={handleSSHKeyClick}
          identifier={index}
          id={value.get('id')}
          key={index}
          value={value.get('name')}
          isActive={value.get('enable')?true:false}
          end={(index == cloudProviderAppState.get('cloud_provider_ssh_keys').size - 1) ? "end" : ""}
        />) : "";
  
  const AddSHHKeyButton = 
    !(cloudProviderAppState.get('show_cloud_provider_ssh_key')) ?
      <a
        href="javascript:void(0);"
        onClick={ShowSSHKeyButtonKeypress}
        id="show_cloud_provider_ssh_key">+ Add SSH Key</a> : "";
      
  const SSHKeyForm =
    (cloudProviderAppState.get('show_cloud_provider_ssh_key')) ?
      <div className="ssh_key_content">
        <div className="large-offset-9 large-3 medium-9">
          <p className="right">
            <a
              href="javascript:void(0);"
              onClick={ShowSSHKeyButtonKeypress}
              id="hide_ssh_key">
              Close</a>
          </p>
        </div>
        <form>
          <div className="row">
            <div className="columns">
              <label className="error">
                <textarea
                  id="ssh_key_content_value"
                  cols="50"
                  rows="5"
                  value={cloudProviderAppState.get('cloud_provider_ssh_keys_public_key')?cloudProviderAppState.get('cloud_provider_ssh_keys_public_key'):''}
                  onChange={SSHKeyContentKeypress}
                  placeholder="SSH Key Content"></textarea>
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
                      type="text"
                      id="ssh_key_content_title" 
                      maxLength="10"
                      value={cloudProviderAppState.get('cloud_provider_ssh_keys_name')?cloudProviderAppState.get('cloud_provider_ssh_keys_name'):''}
                      onChange={SSHKeyTitleKeypress}
                      placeholder="Title" />
                  </label>
                  <div 
                    className="hide" 
                    id="ssh_key_content_title_error">
                    <small className="error">SSH Key Title can not be blank</small>
                  </div>
                </div>
                <div className="small-3 columns">
                  <a 
                    href="javascript:void(0);" 
                    onClick={StoreSSHKeyKeypress}
                    id="save_ssh_key" 
                    className="button postfix">Add SSH Key</a>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p>Adding an SSH key is a recommended security measure.</p>
      </div> : "";
  
  return (
    <div
      className="row"
      data-magellan-destination="ssh-keys" 
      id="ssh-keys">
      <h2>
        <i className="step fi-key"></i>
         Add SSH Keys
      </h2>
    {PrintSSHKeys}
    <div className="large-12 medium-12 small-12 columns end">
      <p>{AddSHHKeyButton}</p>
      {SSHKeyForm}
    </div>
    </div>
  );
};

SSHKeys.propTypes = {
  deleteSSHKey: PropTypes.func.isRequired,
  enableSSHKey: PropTypes.func.isRequired,
  showSSHKey: PropTypes.func.isRequired,
  setSSHKey: PropTypes.func.isRequired,
  setSSHKeyTitle: PropTypes.func.isRequired,
  setSSHKeyContent: PropTypes.func.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired
};

export default SSHKeys;