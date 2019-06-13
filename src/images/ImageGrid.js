import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../Layout.css'
import ImageStore from './ImageStore.js'

class ImageGrid extends React.Component {

    render() {
        return (
            <div className="root">
              <GridList cellHeight={260} className="gridList" cols={3}>
                {ImageStore.map(image => (
                  <GridListTile key={image.id} >       
                    <img src={require(""+image.src)} alt={image.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          );
    }
}

export default ImageGrid
