import React, { Component } from 'react';

class SearchBox extends Component {
  search = text => {
    this.props.search(text);
  };
  render() {
    return (
      <div
        style={{
          borderColor: '#367d88',
          borderStyle: 'solid',
          width: '30%',
          margin: '30px auto',
          height: '30%'
        }}
      >
        <img
          alt=""
          src="/resource/image/icon/search.png"
          style={{ height: '23px' }}
        />

        <input
          type="text"
          style={{
            position: 'absolute',
            color: 'white',
            backgroundColor: '#34585e',
            width: '30%',
            height: '23px',
            font: "16pt 'calibri','Arial',sans-serif"
          }}
          id="searchTxt"
          ref="searchInput"
          placeholder="Search by Name, Title, Department, Location"
          onChange={event => this.search(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBox;
