import React from 'react';
import { Button } from './Buttons';
import Camera from './Camera';
import Navbar from './Navbar';

class SelectPose extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <table>
        <thead>
          <Navbar />
        </thead>
        <tbody>
          <th>
            <Camera />
          </th>
          <th class="sidebar sidebar-left">
            <tr>
              <Button buttonName="Pose 1" />
            </tr>
            <tr>
              <Button buttonName="Pose 2" />
            </tr>
            <tr>
              <Button buttonName="Pose 3" />
            </tr>
          </th>
        </tbody>
      </table>
    );
  }
}

export default SelectPose;
