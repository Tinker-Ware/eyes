import {Map, fromJS} from "immutable";
import {expect} from "chai";
import base from "../../reducers/roles/base";

describe("base role", () => {
  it("handles SET_USER", () => {
    const initialState = Map();
    const action = {type:"SET_USER", value: fromJS({
      user:"user"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      user:"user"}));
  });
  it("handles SET_SSH", () => {
    const initialState = Map();
    const action = {type:"SET_SSH", value: fromJS({
      ssh:"yes"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh:"yes"}));
  });
  it("handles SET_SSH_KEY_PATH", () => {
    const initialState = Map();
    const action = {type:"SET_SSH_KEY_PATH", value: fromJS({
      ssh_key_path:"/home/tinkerware/.ssh/ansible_id_rsa"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_key_path:"/home/tinkerware/.ssh/ansible_id_rsa"}));
  });
  it("handles SET_USER_EMAIL", () => {
    const initialState = Map();
    const action = {type:"SET_USER_EMAIL", value: fromJS({
      user_email:"user@email.com"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      user_email:"user@email.com"}));
  });
  it("handles SET_USER_NAME", () => {
    const initialState = Map();
    const action = {type:"SET_USER_NAME", value: fromJS({
      user_name:"name"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      user_name:"name"}));
  });
  it("handles SET_PRIVATE_KEY", () => {
    const initialState = Map();
    const action = {type:"SET_PRIVATE_KEY", value: fromJS({
      private_key:"yes"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      private_key:"yes"}));
  });
  it("handles SET_PRIVATE_KEY_NAME", () => {
    const initialState = Map();
    const action = {type:"SET_PRIVATE_KEY_NAME", value: fromJS({
      private_key_name:"id_rsa"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      private_key_name:"id_rsa"}));
  });
  it("handles SET_SERVER_USER", () => {
    const initialState = Map();
    const action = {type:"SET_SERVER_USER", value: fromJS({
      server_user:"server user"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_user:"server user"}));
  });
  it("handles SET_ENABLE_BASE", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_BASE", value: fromJS({
      enable_base:true})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_base:true}));
  });
  it("handles SET_SHOW_BASE", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_BASE", value: fromJS({
      show_base:true})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_base:true}));
  });
  it("handles SET_REQUEST_ACTIVE_BASE", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_BASE", value: fromJS({
      request_active_base:true})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_base:true}));
  });
  it("handles SET_SERVER_GROUP", () => {
    const initialState = Map();
    const action = {type:"SET_SERVER_GROUP", value: fromJS({
      server_group:"server group"})};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_group:"server group"}));
  });
  it("handles SET_USERS", () => {
    const initialState = Map();
    const action = {
      type:"SET_USERS",
      value: fromJS({
        users:
          [{
            name: "user",
            group: "group",
            ssh_key: true,
            groups: "sudo",
            password: "$6$JteLKTVD7r0cqVa$QjHtFHeeOKVvn47nbWziKeoxJrzVTyqFq82iPZzC5HK5iJmBCjCu/GHP6jsUsFkTvILo7o6nG37H3neqhbTHP/",
            authorized_keys: [
              "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDZ7DLbiAQ680hZlapMm7hsvuslplUd9PvDx1eoXjCHkDvMZPf2N6nH0ziOYWt9Z3h1GRGHu+3mfQ/FR12uQUqxLir+p0FoN4YUmN38LUrz/nlpqE8I1/izqXuiwId63p28logIM3Grb19w+5a0ubV248TAT+L0ch0IG60bCyrDYZ2gdpdxAnuObpSTEi+bQ3fSM2lF/h3tCrgprhlCUSH6SKvBeYAjovwjY+dJ4ZM2IOdpeSIoZc6yGA16jTKg6lVB926GeboqAO2MsUerHw8T2OPC0975oEpiUDh4TUVoMScP2eWdV4KsR0d11rYqIuEkSzeUfLVR2pP9oRxm2JkLQUqk5H/SqRxhw2NKMSzaC8vmTXWCD2l2Gm4y2X+fsGdjsTpfNXF+ayCFaKV+0pE0jBBjalXeAHi1/W1OJCWjl0ZUc9zSv+bn+GypxH4/g9vK8GMPjq7M4TjtEMexVGTntcpH44G3Tj1ziIcsidoj3UqD1HX+UWpEIRATyAKLd/d2lnQBWOvmuztuRghxGaMyNkEXowd6s/pfQii2/aU6lH50WsDlY+5Bwa/k6dN5iir4hSStK0SO0Zx6j969Zz6wLbITzZoq1ThW73ErWFwjuxdx1bcYzyCvTQx6Ck9wgrv5zZGJmYD6Dg2d730odHKwnWKRpEa97usQ/HwWMXH2UQ== tinkerware@ansible1",
              "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCjQkZ+EHUOH0IgxbW4iupKPvRkP/X9AuVnCLTdJ0UEkT38lJJXpoucOgwPRDqJfwzhI896U+QUw4j8CCN20A3FAYF+b/scseSCGIqMmbfPH1vrDA5l7RThquvH+CUYBQpjw6n8cn0jE21eq0Cplp+4HpymZ9VLMdkBQ/fRpO24W5KacckcHXwTHN0SZjhC22ahGDFIEG/51fEKVWgP4EuTab3fgmFX4/FmG4y5jP+4PPF7MckbN2nan525DqCM4AkO92zK2UzP96xBwOEcJ9yXeIwyqIO1HhiKf/DBA2YmfcJ2DJiXpCSKzcq5F+K/8dHvccBQ5Y59kmYHfrmHCQGQ/RDmzaxxtpkNFH5a+FgvVwPtMsELiSuR5IVqL9/0H9ZLV+5Cpo5qGuj44n+i5pJtBLoUDW+uHIVnuo3MyiL/WxBXQzaT0EgwlbCmiResFZdgj5W00bnFXiv8nuZ5847X+ojCBnsG8DVUON+wN5Q4YinJmKCc9bmJRwoP3bl0lG24frHHBzJdgvLWXNmuZ5OaJ+uk9Ts+RB4NjZXnyn6sP9rOz6dFjIzp9ZkhNvS4dS78rCGliKeblcxNQDyi+8oJ9yryVWR/xGlby8n7lzM/ZMTE0JaWyyQXj4yRAYbuBYCUeE/fO41a/eegGmPa6yh5GHQLX0aoMrjqby5wWavrqQ== alfonso.alvz@gmail.com"
            ]
          }],
        user: [{
          name: "user2",
          group: "group",
          ssh_key: true,
          groups: "sudo",
          password: "$6$JteLKTVD7r0cqVa$QjHtFHeeOKVvn47nbWziKeoxJrzVTyqFq82iPZzC5HK5iJmBCjCu/GHP6jsUsFkTvILo7o6nG37H3neqhbTHP/",
          authorized_keys: [
            "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDZ7DLbiAQ680hZlapMm7hsvuslplUd9PvDx1eoXjCHkDvMZPf2N6nH0ziOYWt9Z3h1GRGHu+3mfQ/FR12uQUqxLir+p0FoN4YUmN38LUrz/nlpqE8I1/izqXuiwId63p28logIM3Grb19w+5a0ubV248TAT+L0ch0IG60bCyrDYZ2gdpdxAnuObpSTEi+bQ3fSM2lF/h3tCrgprhlCUSH6SKvBeYAjovwjY+dJ4ZM2IOdpeSIoZc6yGA16jTKg6lVB926GeboqAO2MsUerHw8T2OPC0975oEpiUDh4TUVoMScP2eWdV4KsR0d11rYqIuEkSzeUfLVR2pP9oRxm2JkLQUqk5H/SqRxhw2NKMSzaC8vmTXWCD2l2Gm4y2X+fsGdjsTpfNXF+ayCFaKV+0pE0jBBjalXeAHi1/W1OJCWjl0ZUc9zSv+bn+GypxH4/g9vK8GMPjq7M4TjtEMexVGTntcpH44G3Tj1ziIcsidoj3UqD1HX+UWpEIRATyAKLd/d2lnQBWOvmuztuRghxGaMyNkEXowd6s/pfQii2/aU6lH50WsDlY+5Bwa/k6dN5iir4hSStK0SO0Zx6j969Zz6wLbITzZoq1ThW73ErWFwjuxdx1bcYzyCvTQx6Ck9wgrv5zZGJmYD6Dg2d730odHKwnWKRpEa97usQ/HwWMXH2UQ== tinkerware@ansible1",
            "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCjQkZ+EHUOH0IgxbW4iupKPvRkP/X9AuVnCLTdJ0UEkT38lJJXpoucOgwPRDqJfwzhI896U+QUw4j8CCN20A3FAYF+b/scseSCGIqMmbfPH1vrDA5l7RThquvH+CUYBQpjw6n8cn0jE21eq0Cplp+4HpymZ9VLMdkBQ/fRpO24W5KacckcHXwTHN0SZjhC22ahGDFIEG/51fEKVWgP4EuTab3fgmFX4/FmG4y5jP+4PPF7MckbN2nan525DqCM4AkO92zK2UzP96xBwOEcJ9yXeIwyqIO1HhiKf/DBA2YmfcJ2DJiXpCSKzcq5F+K/8dHvccBQ5Y59kmYHfrmHCQGQ/RDmzaxxtpkNFH5a+FgvVwPtMsELiSuR5IVqL9/0H9ZLV+5Cpo5qGuj44n+i5pJtBLoUDW+uHIVnuo3MyiL/WxBXQzaT0EgwlbCmiResFZdgj5W00bnFXiv8nuZ5847X+ojCBnsG8DVUON+wN5Q4YinJmKCc9bmJRwoP3bl0lG24frHHBzJdgvLWXNmuZ5OaJ+uk9Ts+RB4NjZXnyn6sP9rOz6dFjIzp9ZkhNvS4dS78rCGliKeblcxNQDyi+8oJ9yryVWR/xGlby8n7lzM/ZMTE0JaWyyQXj4yRAYbuBYCUeE/fO41a/eegGmPa6yh5GHQLX0aoMrjqby5wWavrqQ== alfonso.alvz@gmail.com"
          ]
        }]
      })
    };
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      users: [{
        name: "user",
        group: "group",
        ssh_key: true,
        groups: "sudo",
        password: "$6$JteLKTVD7r0cqVa$QjHtFHeeOKVvn47nbWziKeoxJrzVTyqFq82iPZzC5HK5iJmBCjCu/GHP6jsUsFkTvILo7o6nG37H3neqhbTHP/",
        authorized_keys: [
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDZ7DLbiAQ680hZlapMm7hsvuslplUd9PvDx1eoXjCHkDvMZPf2N6nH0ziOYWt9Z3h1GRGHu+3mfQ/FR12uQUqxLir+p0FoN4YUmN38LUrz/nlpqE8I1/izqXuiwId63p28logIM3Grb19w+5a0ubV248TAT+L0ch0IG60bCyrDYZ2gdpdxAnuObpSTEi+bQ3fSM2lF/h3tCrgprhlCUSH6SKvBeYAjovwjY+dJ4ZM2IOdpeSIoZc6yGA16jTKg6lVB926GeboqAO2MsUerHw8T2OPC0975oEpiUDh4TUVoMScP2eWdV4KsR0d11rYqIuEkSzeUfLVR2pP9oRxm2JkLQUqk5H/SqRxhw2NKMSzaC8vmTXWCD2l2Gm4y2X+fsGdjsTpfNXF+ayCFaKV+0pE0jBBjalXeAHi1/W1OJCWjl0ZUc9zSv+bn+GypxH4/g9vK8GMPjq7M4TjtEMexVGTntcpH44G3Tj1ziIcsidoj3UqD1HX+UWpEIRATyAKLd/d2lnQBWOvmuztuRghxGaMyNkEXowd6s/pfQii2/aU6lH50WsDlY+5Bwa/k6dN5iir4hSStK0SO0Zx6j969Zz6wLbITzZoq1ThW73ErWFwjuxdx1bcYzyCvTQx6Ck9wgrv5zZGJmYD6Dg2d730odHKwnWKRpEa97usQ/HwWMXH2UQ== tinkerware@ansible1",
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCjQkZ+EHUOH0IgxbW4iupKPvRkP/X9AuVnCLTdJ0UEkT38lJJXpoucOgwPRDqJfwzhI896U+QUw4j8CCN20A3FAYF+b/scseSCGIqMmbfPH1vrDA5l7RThquvH+CUYBQpjw6n8cn0jE21eq0Cplp+4HpymZ9VLMdkBQ/fRpO24W5KacckcHXwTHN0SZjhC22ahGDFIEG/51fEKVWgP4EuTab3fgmFX4/FmG4y5jP+4PPF7MckbN2nan525DqCM4AkO92zK2UzP96xBwOEcJ9yXeIwyqIO1HhiKf/DBA2YmfcJ2DJiXpCSKzcq5F+K/8dHvccBQ5Y59kmYHfrmHCQGQ/RDmzaxxtpkNFH5a+FgvVwPtMsELiSuR5IVqL9/0H9ZLV+5Cpo5qGuj44n+i5pJtBLoUDW+uHIVnuo3MyiL/WxBXQzaT0EgwlbCmiResFZdgj5W00bnFXiv8nuZ5847X+ojCBnsG8DVUON+wN5Q4YinJmKCc9bmJRwoP3bl0lG24frHHBzJdgvLWXNmuZ5OaJ+uk9Ts+RB4NjZXnyn6sP9rOz6dFjIzp9ZkhNvS4dS78rCGliKeblcxNQDyi+8oJ9yryVWR/xGlby8n7lzM/ZMTE0JaWyyQXj4yRAYbuBYCUeE/fO41a/eegGmPa6yh5GHQLX0aoMrjqby5wWavrqQ== alfonso.alvz@gmail.com"
        ]
      },{
        name: "user2",
        group: "group",
        ssh_key: true,
        groups: "sudo",
        password: "$6$JteLKTVD7r0cqVa$QjHtFHeeOKVvn47nbWziKeoxJrzVTyqFq82iPZzC5HK5iJmBCjCu/GHP6jsUsFkTvILo7o6nG37H3neqhbTHP/",
        authorized_keys: [
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDZ7DLbiAQ680hZlapMm7hsvuslplUd9PvDx1eoXjCHkDvMZPf2N6nH0ziOYWt9Z3h1GRGHu+3mfQ/FR12uQUqxLir+p0FoN4YUmN38LUrz/nlpqE8I1/izqXuiwId63p28logIM3Grb19w+5a0ubV248TAT+L0ch0IG60bCyrDYZ2gdpdxAnuObpSTEi+bQ3fSM2lF/h3tCrgprhlCUSH6SKvBeYAjovwjY+dJ4ZM2IOdpeSIoZc6yGA16jTKg6lVB926GeboqAO2MsUerHw8T2OPC0975oEpiUDh4TUVoMScP2eWdV4KsR0d11rYqIuEkSzeUfLVR2pP9oRxm2JkLQUqk5H/SqRxhw2NKMSzaC8vmTXWCD2l2Gm4y2X+fsGdjsTpfNXF+ayCFaKV+0pE0jBBjalXeAHi1/W1OJCWjl0ZUc9zSv+bn+GypxH4/g9vK8GMPjq7M4TjtEMexVGTntcpH44G3Tj1ziIcsidoj3UqD1HX+UWpEIRATyAKLd/d2lnQBWOvmuztuRghxGaMyNkEXowd6s/pfQii2/aU6lH50WsDlY+5Bwa/k6dN5iir4hSStK0SO0Zx6j969Zz6wLbITzZoq1ThW73ErWFwjuxdx1bcYzyCvTQx6Ck9wgrv5zZGJmYD6Dg2d730odHKwnWKRpEa97usQ/HwWMXH2UQ== tinkerware@ansible1",
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCjQkZ+EHUOH0IgxbW4iupKPvRkP/X9AuVnCLTdJ0UEkT38lJJXpoucOgwPRDqJfwzhI896U+QUw4j8CCN20A3FAYF+b/scseSCGIqMmbfPH1vrDA5l7RThquvH+CUYBQpjw6n8cn0jE21eq0Cplp+4HpymZ9VLMdkBQ/fRpO24W5KacckcHXwTHN0SZjhC22ahGDFIEG/51fEKVWgP4EuTab3fgmFX4/FmG4y5jP+4PPF7MckbN2nan525DqCM4AkO92zK2UzP96xBwOEcJ9yXeIwyqIO1HhiKf/DBA2YmfcJ2DJiXpCSKzcq5F+K/8dHvccBQ5Y59kmYHfrmHCQGQ/RDmzaxxtpkNFH5a+FgvVwPtMsELiSuR5IVqL9/0H9ZLV+5Cpo5qGuj44n+i5pJtBLoUDW+uHIVnuo3MyiL/WxBXQzaT0EgwlbCmiResFZdgj5W00bnFXiv8nuZ5847X+ojCBnsG8DVUON+wN5Q4YinJmKCc9bmJRwoP3bl0lG24frHHBzJdgvLWXNmuZ5OaJ+uk9Ts+RB4NjZXnyn6sP9rOz6dFjIzp9ZkhNvS4dS78rCGliKeblcxNQDyi+8oJ9yryVWR/xGlby8n7lzM/ZMTE0JaWyyQXj4yRAYbuBYCUeE/fO41a/eegGmPa6yh5GHQLX0aoMrjqby5wWavrqQ== alfonso.alvz@gmail.com"
        ]
      }]
    }));
  });
  it("handles SET_CRONJOBS", () => {
    const initialState = Map();
    const action = {
      type:"SET_CRONJOBS",
      value: fromJS({
        cronjobs:
          [],
        cronjob: [{
          name: "cronname",
          special_time: "daily",
          job: "cd /opt/tinker/shared_files/ghost/ && git fetch --all && git checkout bot_updates && git pull git@github.com:tinkerwarebot/ghost-blog-site.git bot_updates && git add content/images/* && git commit -m 'Update images' && git push git@github.com:tinkerwarebot/ghost-blog-site.git bot_updates",
          user: "user"
        }]
      })
    };
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
      cronjobs: [{
        name: "cronname",
        special_time: "daily",
        job: "cd /opt/tinker/shared_files/ghost/ && git fetch --all && git checkout bot_updates && git pull git@github.com:tinkerwarebot/ghost-blog-site.git bot_updates && git add content/images/* && git commit -m 'Update images' && git push git@github.com:tinkerwarebot/ghost-blog-site.git bot_updates",
        user: "user"
      }]
    }));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = base(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
