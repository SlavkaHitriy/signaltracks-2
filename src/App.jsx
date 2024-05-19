import { Sidebar } from '@/components/Sidebar';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Settings } from '@/modules/Settings/index.js';
import { AssetMapView } from '@/modules/AssetMapView/index.js';
import { AssetListing } from '@/modules/AssetListing/index.js';
import { Asset } from '@/modules/Asset/index.js';
import { AssetNew } from '@/modules/AssetNew/index.js';
import { Login } from '@/modules/Login/index.js';
import { Events } from '@/modules/Events/index.js';
import { Devices } from '@/modules/Devices/index.js';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('login') && <Sidebar />}
            <div className={'app-inner'}>
                <main className={'main'}>
                    <Routes>
                        <Route path='/asset-mapview' element={<AssetMapView />} />
                        <Route path='/asset-new' element={<AssetNew />} />
                        <Route path='/asset/1' element={<Asset />} />
                        <Route path='/asset-listing' element={<AssetListing />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/devices' element={<Devices />} />
                        <Route path='/login' element={<Login />} />

                        <Route path='*' element={<Navigate to='/login' replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
