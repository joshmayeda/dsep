import {useState} from 'react';
import Popup from 'reactjs-popup';
import { RingModal } from './RingModal';
import axios from 'axios';
import APIInterface from '../API_Interface/API_Interface';

export function ItemSlot(props) {
    const [slotColor, setSlotColor] = useState("");
    const styles = {
        "backgroundColor": slotColor,
        "boxShadow": "0 0 1rem 1rem #1f1d1d inset",
    }

  return (
    <>

    </>
  );
}