import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { geojson } from './data/geojson.js';
import { useRecoilValue } from 'recoil';
import { sidebarOpened } from '@/core/store/index.js';
import { Tabs } from '@/ui/Tabs/index.js';
import { tabs } from './data/tabs.js';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

// eslint-disable-next-line react/display-name
export const Map = memo(({ sx, rerenderDependencies }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleChangeTab = (value) => {
        setActiveTab(value);
    };

    const isOpenedSidebar = useRecoilValue(sidebarOpened);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.01521529520066);
    const [lat, setLat] = useState(40.73760113154407);
    const [zoom, setZoom] = useState(12);

    const initLines = () => {
        map.current.addSource('LineString', {
            type: 'geojson',
            data: geojson,
        });

        map.current.addLayer({
            id: 'LineString',
            type: 'line',
            source: 'LineString',
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#1E75FF',
                'line-width': 3,
            },
        });

        for (const feature of geojson.features) {
            if (feature.geometry.type === 'Point') {
                const el = document.createElement('div');
                el.className = 'map-marker';

                new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.current);
            }
        }
    };

    const renderMap = () => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/slavkahitriy/clu8wd2m000sg01prgthyf88f',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.on('load', () => {
            initLines();

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });
        });

        map.current.on('style.load', () => {
            initLines();
        });
    };

    const initMap = () => {
        if (!map.current && mapContainer.current) {
            renderMap();
        }
    };

    const handleStorageChange = useDebouncedCallback(() => {
        map.current?.remove();
        renderMap();
    }, 500);

    useEffect(() => {
        if (map.current) {
            initMap();
        }
    }, [rerenderDependencies]);

    useEffect(() => {
        handleStorageChange();
    }, [isOpenedSidebar]);

    useEffect(() => {
        if (map.current) {
            map.current.setStyle(`mapbox://styles/slavkahitriy/${activeTab}`);
        }
    }, [activeTab]);

    return (
        <Box position={'relative'} width={'100%'} height={'100%'}>
            <Box position={'absolute'} left={12} top={12} zIndex={3}>
                <Tabs data={tabs} setActiveTab={handleChangeTab} activeTab={activeTab} inline />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    ...sx,
                }}
                ref={mapContainer}
            />
        </Box>
    );
});
