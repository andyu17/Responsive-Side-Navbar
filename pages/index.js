import Head from "next/head";
import SideNavbar from "@/components/SideNavbar";
import Map from '@/components/map';

import styles from '@/../styles/Home.module.scss';

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Home() {
  return (
    <div className="bg-blue-800">
      <Head>
        <title>home</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <SideNavbar />
      <Map className={styles.homeMap} width="100%" height="100%" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
    </div>
  );
}
