<script lang="ts">
  import { T, useTask } from "@threlte/core";
  import {
    CubeCamera,
    Environment,
    GLTF,
    OrbitControls,
  } from "@threlte/extras";

  import { base } from "$app/paths";
  let rotation = 0;
  useTask((delta) => {
    rotation += delta * 1.2;
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[40, 0, 0]}
  oncreate={(ref) => {
    ref.lookAt(0, 0, 0)
  }}
/>
<GLTF
  url={`${base}/gltf/helix.glb`}
  rotation.y={rotation}
  rotation={[-0.4, 0, 0]}
/>

<T.AmbientLight />
