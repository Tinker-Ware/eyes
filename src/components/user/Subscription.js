import { Card } from "material-ui/Card";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import React from "react";

const style = {
  button: {
   margin: 12,
  },
  chip: {
   margin: 4,
  },
  container: {
   position: "fixed",
  },
  refresh: {
   display: "inline-block",
   position: "relative",
  },
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

const Subscription = () => {
  return (
    <div className="card">
      <AppBar
          iconElementLeft={
            <IconButton href="/user/1">
              <FontIcon className="icon icon-arrow-back"/>
            </IconButton>
          }
          iconElementRight={
            <IconMenu
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "top"
                }}
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                targetOrigin={{
                  horizontal: "right",
                  vertical: "top"
                }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
          title="My DevOp"
      />
      <Card>
        <Toolbar style={style.toolbar}>
          <ToolbarGroup firstChild>
            <FontIcon className="icon icon-person"/>
            <ToolbarTitle
                style={style.toolbarTitle}
                text="Subscription"
            />
          </ToolbarGroup>
        </Toolbar>
        <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
        >
          <input
              name="cmd"
              type="hidden"
              value="_s-xclick"
          />
          <input
              name="hosted_button_id"
              type="hidden"
              value="BP39QFDD8SR4S"
          />
          <table>
            <tr>
              <td>
                <input
                    name="on0"
                    type="hidden"
                    value="Numero de empleados"
                />
                {"Numero de empleados"}
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option value="1-5">
                    {"1-5 : $29.00 USD - mensual"}
                  </option>
                  <option value="6-15">
                    {"6-15 : $79.00 USD - mensual"}
                  </option>
                  <option value="16-30">
                    {"16-30 : $149.00 USD - mensual"}
                  </option>
                </select>
              </td>
            </tr>
          </table>
          <input
              name="currency_code"
              type="hidden"
              value="USD"
          />
          <input
              alt="PayPal, la forma más segura y rápida de pagar en línea."
              border="0"
              name="submit"
              src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_subscribeCC_LG.gif"
              type="image"
          />
          <img
              alt=""
              border="0"
              height="1"
              src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
              width="1"
          />
        </form>
      </Card>
    </div>
  );
};

export default Subscription;
