import React, { useState } from 'react';

export default function Modal() {
  const moreInfoText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "
  const [showDetails, changeDetailView ] = useState(false)

  if(showDetails){
    return (
      <div id="modal-container"> 
        <span id="modal-close" onClick={ ()=>{ changeDetailView(!showDetails)} }>X</span>
        <div id="modal-explore-text">Explore </div>
        <hr />
        <div id="modal-text">{moreInfoText}</div>
        <button>READ MORE</button>
      </div>
      )
  }else{
    return( 
      <div id="explore-content">
        <div id="explore-text">Explore</div>
        <div id="more-container" onClick={()=>{ changeDetailView(!showDetails)} } >
          <img id="plus" src="Plus.svg" />
          <div id="more-details">More Details</div>
        </div>
      </div>
      )
  }
}