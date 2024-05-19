import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { geojsonView } from './data/geojson-view.js';
import { useRecoilValue } from 'recoil';
import { sidebarOpened } from '@/core/store/index.js';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

export const MapView = ({ sx, rerenderDependencies }) => {
    const isOpenedSidebar = useRecoilValue(sidebarOpened);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.01521529520066);
    const [lat, setLat] = useState(40.73760113154407);
    const [zoom, setZoom] = useState(9);

    function createCluster(props) {
        let html = `<div class="map-cluster">
        <span></span>
        <span></span>
        ${props.point_count}
            <div />`;

        const el = document.createElement('div');
        el.innerHTML = html;
        return el.firstChild;
    }

    const renderMap = () => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/slavkahitriy/cltt8cmn4005r01qs37ovguaf',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.on('load', () => {
            map.current.addSource('tracks', {
                type: 'geojson',
                data: geojsonView,
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50,
            });

            map.current.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'tracks',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': 'transparent',
                    'circle-radius': 40,
                },
            });

            map.current.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'tracks',
                filter: ['has', 'point_count'],
            });

            map.current.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'tracks',
                filter: ['!', ['has', 'point_count']],
                paint: {
                    'circle-color': '#11b4da',
                    'circle-radius': 4,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff',
                },
            });

            map.current.on('click', 'clusters', (e) => {
                const features = map.current.queryRenderedFeatures(e.point, {
                    layers: ['clusters'],
                });
                const clusterId = features[0].properties.cluster_id;
                map.current.getSource('tracks').getClusterExpansionZoom(clusterId, (err, zoom) => {
                    if (err) return;

                    map.current.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom,
                    });
                });
            });

            const markers = {};
            let markersOnScreen = {};

            function updateMarkers() {
                const newMarkers = {};
                const features = map.current.querySourceFeatures('tracks');

                for (const feature of features) {
                    const coords = feature.geometry.coordinates;
                    const props = feature.properties;
                    if (!props.cluster) continue;
                    const id = props.cluster_id;

                    let marker = markers[id];
                    if (!marker) {
                        const el = createCluster(props);
                        marker = markers[id] = new mapboxgl.Marker({
                            element: el,
                        }).setLngLat(coords);
                    }
                    newMarkers[id] = marker;

                    if (!markersOnScreen[id]) marker.addTo(map.current);
                }

                for (const id in markersOnScreen) {
                    if (!newMarkers[id]) markersOnScreen[id].remove();
                }
                markersOnScreen = newMarkers;
            }

            map.current.on('render', () => {
                if (!map.current.isSourceLoaded('tracks')) return;
                updateMarkers();
            });

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });

            map.current.on('mouseenter', 'clusters', () => {
                map.current.getCanvas().style.cursor = 'pointer';
            });
            map.current.on('mouseleave', 'clusters', () => {
                map.current.getCanvas().style.cursor = '';
            });
        });
    };

    const initMap = () => {
        if (!map.current && mapContainer.current) {
            renderMap();
        }
    };

    const handleStorageChange = useDebouncedCallback(() => {
        map.current.remove();
        renderMap();
    }, 500);

    useEffect(() => {
        const tempInterval = setInterval(() => {
            if (map.current) clearInterval(tempInterval);
            else initMap();
        }, 100);

        return () => clearInterval(tempInterval);
    }, []);

    useEffect(() => {
        if (map.current) {
            initMap();
        }
    }, [rerenderDependencies]);

    useEffect(() => {
        handleStorageChange();
    }, [isOpenedSidebar]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            ref={mapContainer}
        />
    );
};
