import {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import { RingModal } from './RingModal';
import axios from 'axios';
import APIInterface from '../API_Interface/API_Interface';

export function RingSlot(props) {
    const [slotColor, setSlotColor] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [rings, setRings] = useState([]);
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

    const api = new APIInterface();

    useEffect(() => {
      async function getRings() {
          await axios.get("http://localhost:8080/api/rings").then((response) => {
            //console.log('response: ' + JSON.stringify(response.data));
            setRings(JSON.parse(JSON.stringify(response.data)));
            setIsLoaded(true);
          });
      }
      getRings();
    }, []);

    return (
      <>
      <Popup trigger={<button className="grid-item-slot"
                      style={styles}
                      onMouseEnter={() => setSlotColor("#676949")}
                      onMouseLeave={() => setSlotColor("transparent")}
                      >
                      <p className="slot-name">{props.title}</p>
                      </button>} position="right center">
          <RingModal rings={rings} />
      </Popup>
      </>
    );
}