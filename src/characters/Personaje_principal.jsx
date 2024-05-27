import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


export default function Personaje_principal(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/Character/majd_the_boy.glb')
  const { actions } = useAnimations(animations, group);
  const [rotationY, setRotationY] = useState(0); // Estado para la rotación del personaje

  useEffect(() => {

    console.log(animations);
}, [animations]);

// Controla la rotación y las animaciones
useEffect(() => {
    const turnSpeed = Math.PI / 4; // Velocidad de giro

    if (props.movement.left) {
      setRotationY(turnSpeed); // Gira a la izquierda
    } else if (props.movement.right) {
      setRotationY(-turnSpeed); // Gira a la derecha
    } else {
      setRotationY(0); // Frente
    }

    // Control de animaciones en base a los estados de movimiento
    if (props.movement.run && actions.Run) {
      actions.Run.play();
    } else if (actions.Run && actions.Run.isRunning()) {
      actions.Run.stop();
    }
  
    if (props.movement.jump && actions.Jump) {
      actions.Jump.play();
    } else if (actions.Jump && actions.Jump.isRunning()) {
      actions.Jump.stop();
    }
  
    if ((props.movement.walk || props.movement.left || props.movement.right) && actions.Walk) {
        actions.Walk.play();
      } else if (actions.Walk && actions.Walk.isRunning()) {
        actions.Walk.stop();
      }

    if (props.movement.walkingBackword && actions.WalkingBackword) {
        actions.WalkingBackword.play();
      } else if (actions.WalkingBackword&& actions.WalkingBackword.isRunning()) {
        actions.WalkingBackword.stop();
      }


  }, [props.movement, actions]);
  

  return (
    <group ref={group} {...props} dispose={null} position={[0, -0.7, 0]} rotation={[0, rotationY, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_70" rotation={[Math.PI / 2, 0, 0]} scale={0.028}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Bootsmat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials['Ch46_body.001mat']}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Eyesmat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Hairmat}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Pantsmat}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Shirtmat}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.TatRezmat}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Hairmat}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Hairmat}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Hairmat}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.ScafPalmat}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.ScarfBlackmat}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <group name="Ch46_Mesh_65" />
                  <group name="Frame_Mesh_0_66" />
                  <group name="Handles_Mesh_1_67" />
                  <group name="KidHair_68" />
                  <group name="scarf_Cube002_69" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/models/Character/majd_the_boy.glb')