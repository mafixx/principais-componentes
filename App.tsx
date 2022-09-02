import { Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { DimensionsComponent } from './components/Dimensions';
import { DrawerLayoutAndroidComponent } from './components/DrawerLayoutAndroidComponent';
import FlatListComponent from './components/FlatListComponent';
import { ModalComponent } from './components/ModalComponent';
import { PermissionComponent } from './components/PermissionsComponent';
import { RefreshComponent } from './components/RefreshComponent';
import { ScrollViewComponent } from './components/ScrollViewComponent';
import { ToastComponent } from './components/ToastComponent';

export default function App() {
  return (
    <SafeAreaView>
    <StatusBar/>
    <RefreshComponent/>
    {/* <DimensionsComponent/> */}
    {/* <PermissionComponent/> */}
    {/* <ModalComponent/> */}
    {/* <DrawerLayoutAndroidComponent/> */}
    {/* <ToastComponent/> */}
    {/* <ScrollViewComponent/> */}
    {/* <FlatListComponent/> */}
    <ModalComponent/>
    </SafeAreaView>
  );
}



