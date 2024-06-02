import create from 'zustand';
import * as THREE from 'three';

const useStore = create((set) => ({
  moveToPoint: new THREE.Vector3(0, 0, 0),
  setMoveToPoint: (point) => set({ moveToPoint: point }),
}));

export default useStore;
