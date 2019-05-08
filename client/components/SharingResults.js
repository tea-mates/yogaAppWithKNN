import React from "react";

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          class="fb-share-button"
          data-href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Nyan-nyan.jpg/1280px-Nyan-nyan.jpg"
          data-layout="button"
          data-size="large"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4a%2FNyan-nyan.jpg%2F1280px-Nyan-nyan.jpg&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
          >
            Share
          </a>
        </div>
      </div>
    );
  }
}
