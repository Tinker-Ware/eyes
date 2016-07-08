import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Map, fromJS} from 'immutable';
import SSHKeysItem from './SSHKeysItem';

const SSHKeys = ( {deleteSSHKey, enableSSHKey, showSSHKey, setSSHKey, setSSHKeyTitle, setSSHKeyContent, sshKeysAppState} ) => {
  const handleSSHKeyClick = (e) => {
    
  };
  
  const StoreSSHKeyKeypress = (e) => {
    if(sshKeysAppState.get('ssh_keys_title') && sshKeysAppState.get('ssh_keys_content')){
      setSSHKey(
        fromJS({
          sshKeys: (sshKeysAppState.get('ssh_keys')) ? sshKeysAppState.get('ssh_keys') : [],
          sshKey: {
            id: 1, 
            title: sshKeysAppState.get('ssh_keys_title'),
            content: sshKeysAppState.get('ssh_keys_content')
          }
        })
      );
      setSSHKeyTitle(fromJS({
        title: ''
      }));
      setSSHKeyContent(fromJS({
        content: ''
      }));
    }
  };
  
  const ShowSSHKeyButtonKeypress = (e) => {
    showSSHKey(
      fromJS({
        show_ssh_key: !sshKeysAppState.get('show_ssh_key')
      })
    );
  };
  
  const SSHKeyTitleKeypress = (e) => {
    setSSHKeyTitle(fromJS({
      title: e.target.value
    }));
  };
  
  const SSHKeyContentKeypress = (e) => {
    setSSHKeyContent(fromJS({
      content: e.target.value
    }));
  };
  
  const PrintSSHKeys = 
    (sshKeysAppState.get('ssh_keys')) ?
      sshKeysAppState.get('ssh_keys').map((value, index) => 
        <SSHKeysItem
          handleClick={handleSSHKeyClick}
          identifier={index}
          key={index}
          value={value.get('title')}
          isActive={value.get('enable')?true:false}
          end={(index == sshKeysAppState.get('ssh_keys').size - 1) ? "end" : ""}
        />) : "";
  
  const AddSHHKeyButton = 
    !(sshKeysAppState.get('show_ssh_key')) ?
      <a
        href="javascript:void(0);"
        onClick={ShowSSHKeyButtonKeypress}
        id="show_ssh_key">+ Add SSH Key</a> : "";
      
  const SSHKeyForm =
    (sshKeysAppState.get('show_ssh_key')) ?
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
                  value={sshKeysAppState.get('ssh_keys_content')?sshKeysAppState.get('ssh_keys_content'):''}
                  onChange={SSHKeyContentKeypress}
                  placeholder="SSH Key Content"></textarea>
              </label>
              <div 
                className="hide" 
                id="ssh_key_content_value_error">
                <small className="error hide">SSH Key Content can't be blank</small>
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
                      value={sshKeysAppState.get('ssh_keys_title')?sshKeysAppState.get('ssh_keys_title'):''}
                      onChange={SSHKeyTitleKeypress}
                      placeholder="Title" />
                  </label>
                  <div 
                    className="hide" 
                    id="ssh_key_content_title_error">
                    <small className="error">SSH Key Title can't be blank</small>
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
  sshKeysAppState: PropTypes.object.isRequired
};

export default SSHKeys;