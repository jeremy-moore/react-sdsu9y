import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from './sample-base';

export class Dock extends SampleBase {
  constructor() {
    super(...arguments);
    this.enableDock = true;
    this.dockSize = '72px';
    this.width = '220px';
  }
  render() {
    return (
      <div className="control-section">
        <div className="col-lg-12 col-sm-12 col-md-12 center">
          Click/Touch the button to view the sample
        </div>
        <div className="col-lg-12 col-sm-12 col-md-12 center">
          <a
            className="e-btn"
            id="newTab"
            target="_blank"
            onClick={this.newTabClick.bind(this)}
          >
            Open in new tab
          </a>
        </div>
        <div className="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
          <div id="wrapper">
            <SidebarComponent
              id="dockSidebar"
              ref={(Sidebar) => (this.dockBar = Sidebar)}
              enableDock={this.enableDock}
              dockSize={this.dockSize}
              width={this.width}
            >
              <div className="dock">
                <ul>
                  <li
                    className="sidebar-item"
                    id="toggle"
                    onClick={this.toggleClick.bind(this)}
                  >
                    <span className="e-icons expand"></span>
                    <span className="e-text" title="menu">
                      Menu
                    </span>
                  </li>
                  <li className="sidebar-item">
                    <span className="e-icons home"></span>
                    <span className="e-text" title="home">
                      Home
                    </span>
                  </li>
                  <li className="sidebar-item">
                    <span className="e-icons profile"></span>
                    <span className="e-text" title="profile">
                      Profile
                    </span>
                  </li>
                  <li className="sidebar-item">
                    <span className="e-icons info"></span>
                    <span className="e-text" title="info">
                      Info
                    </span>
                  </li>
                  <li className="sidebar-item">
                    <span className="e-icons settings"></span>
                    <span className="e-text" title="settings">
                      Settings
                    </span>
                  </li>
                </ul>
              </div>
            </SidebarComponent>
            <div id="main-content container-fluid col-md-12 ">
              <div className="title">Main content</div>
              <div className="sub-title">
                <div className="center-align">
                  <p>Click the radio button to switch the sidebar position</p>
                  <div className="column">
                    <RadioButtonComponent
                      id="left"
                      label="Left"
                      name="state"
                      checked={true}
                      change={this.positionChange.bind(this)}
                    ></RadioButtonComponent>
                  </div>
                  <div className="column">
                    <RadioButtonComponent
                      id="right"
                      label="Right"
                      name="state"
                      change={this.positionChange.bind(this)}
                    ></RadioButtonComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // open new Tab
  newTabClick() {
    let URL = location.href.replace(location.search, '');
    document
      .getElementById('newTab')
      .setAttribute(
        'href',
        URL.split('#')[0] + 'sidebar/docking-sidebar/index.html'
      );
  }
  positionChange(args) {
    //RadioButton change event handler
    this.dockBar.position = args.event.target.id == 'left' ? 'Left' : 'Right';
  }
  // open / close the sidebar
  toggleClick() {
    this.dockBar.toggle();
  }
}

render(<Dock />, document.getElementById('sample'));
