import { Searchbar } from './Searchbar';
import '../modal.css';

export function RingModal( {rings} ) {
  return (
    <div className="ring-modal">
      <Searchbar rings={rings} />
      <ul className="ring-modal-ul">
        {rings.map((ring) => (
          <li key={ring.Name}>
            <div className="ring-modal-item">
              <div className="ring-modal-item-name">{ring.Name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}