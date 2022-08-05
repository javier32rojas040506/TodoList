import './todoLoading.css';
import React from "react"
import ContentLoader from "react-content-loader";
function TodoLoading(props){
    return(
      <>
        <SnapchatThread/>
        <SnapchatThread/>
        <SnapchatThread/>
        <SnapchatThread/>
        <SnapchatThread/>
        <SnapchatThread/>
        <SnapchatThread/>
      </>
    );
}

const SnapchatThread = () => {
    return (
      <ContentLoader
        speed={2}
        width={600}
        height={92.8}
        viewBox="0 0 600 92.8"
        backgroundColor="#4717F6"
        foregroundColor="#A239CA"
      >
      <rect x="0" y="5" rx="0" ry="0" width="800" height="100" />     
 
      </ContentLoader>
    )
  }
export {TodoLoading};