import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SSHKeys = ( {deleteSSHKey, enableSSHKey, setSSHKey, sshKeysAppState} ) => {

  const AddSSHKeyKeypress = (e) => {
    //setSSHKey(e.target.value);
  };
  
  return (
    <div
      className="row"
      data-magellan-destination="ssh-keys" 
      id="ssh-keys">
    <h2>
      <i className="step fi-key"></i>
       Add SSH Keys
    </h2>
    <div id="ssh_keys">
    </div>
      <div className="large-12 medium-12 small-12 columns end">
        <p><a
          href="javascript:void(0);"
          id="show_ssh_key">+ Add SSH Key</a>
        </p>
        <div className="ssh_key_content">
          <div className="large-offset-9 large-3 medium-9">
            <p className="right">
              <a
                href="javascript:void(0);"
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
                        ref="title"
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
                      onClick={AddSSHKeyKeypress}
                      id="save_ssh_key" 
                      className="button postfix">Add SSH Key</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <p>Adding an SSH key is a recommended security measure.</p>
      </div>
    </div>
  );
};

SSHKeys.propTypes = {
  deleteSSHKey: PropTypes.func.isRequired,
  enableSSHKey: PropTypes.func.isRequired,
  setSSHKey: PropTypes.func.isRequired,
  sshKeysAppState: PropTypes.object.isRequired
};

export default SSHKeys;