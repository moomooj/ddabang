import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import MapSide from "../Components/map/MapSide";
import MapMenu from "../Components/map/MapMenu";

function Map() {
  const mapRef = useRef<any | null | any>(null);

  useEffect(() => {
    mapRef.current = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(Number(37.5101646), Number(127)),
      maxZoom: 19,
      minZoom: 10,
      zoomControl: false,
      mapTypeControl: false,
      zoom: Number(9),
    });
  }, []);

  return (
    <>
      <Helmet title="부동산 필수 앱 따방" />
      <MapMenu />
      <MapWrap>
        <MapSide />
        <NaverMap id="map" />
      </MapWrap>
    </>
  );
}

const MapWrap = styled.div`
  display: flex;
  width: 100%;
  min-width: 600px;
`;

const NaverMap = styled.div`
  width: 100%;
  height: calc(100vh - 143px);
  background-color: yellow;
`;

export default Map;
