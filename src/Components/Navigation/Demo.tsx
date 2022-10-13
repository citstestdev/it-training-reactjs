// import { render } from "react-dom";
import "./index.css";
import * as React from "react";
// import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
// import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';ej2-navigations
import SampleBase from "./SampleBase";
// import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
// import "../../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";

import * as dataSource from "./menu-data.json";
/**
 * Menu data binding sample
 */
class Demo extends SampleBase {
  data = dataSource;
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div className="menu-section">
            <div id="dataBinding">
              <MenuComponent items={this.data.dataBinding}></MenuComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
