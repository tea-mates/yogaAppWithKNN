import React from 'react';
import { Button } from './Buttons';
import Camera from './Camera';

class SelectPose extends React.Component {
  constructor() {
    super();
    this.state = {
      poses: ['Namaste', 'Tree'],
    };
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.poses.map((pose, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Button buttonName={pose} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPose;
