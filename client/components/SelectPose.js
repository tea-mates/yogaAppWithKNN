import React from 'react';
import { Button } from './Buttons';
import Camera from './Camera';

class SelectPose extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <th>
              <Camera />
            </th>
            <th>
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
          </thead>
        </table>
      </div>
    );
  }
}

export default SelectPose;
