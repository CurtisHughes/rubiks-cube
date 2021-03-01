<img src="assets/classic.gif" height="150px" />

# Rubik's Cube
A web based Rubik's Cube implementation. The goal of this package was to provide a minimal interface to the rendered Rubik's cube that would allow consumers to implement custom UI elements and build upon the provided functionality.

## Features
* 3D rendered Rubik's Cube
* Customizable material and textures
* Exposed Singmaster notation methods
* Configurable rotation speed
* Responsive canvas

## Installation
```
yarn add @curtishughes/rubiks-cube three
```

```
npm install @curtishughes/rubiks-cube three
```

## Usage
*Rubik's Cube* is not coupled with any specific framework. However, I have included some examples of how it can be used with a few of the popular frontend frameworks:

### React
```tsx
import React, { useRef, useEffect, useState } from 'react';
import RubiksCube, { materials } from '@curtishughes/rubiks-cube';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cube, setCube] = useState<RubiksCube>();

  useEffect(() => {
    if (canvasRef.current) {
      setCube(new RubiksCube(canvasRef.current, materials.classic, 100));
    }
  }, []);

  return (
    <>
      <canvas width="200px" height="200px" ref={canvasRef} />
      <button onClick={() => { if (cube) cube.F() }}>F</button>
      <button onClick={() => { if (cube) cube.F(false) }}>F'</button>
      {/** ... **/}
    </>
  );
}

export default App;
```

### Vue
```vue
<template>
  <div>
    <canvas ref="cube" />
    <button @click="() => cube.F()">F</button>
    <button @click="() => cube.F(false)">F'</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RubiksCube, { materials } from '@curtishughes/rubiks-cube';

@Component
export default class Editor extends Vue {
  private cube!: RubiksCube;

  mounted() {
    const canvas = this.$refs.cube as HTMLCanvasElement;
    this.cube = new RubiksCube(canvas, materials.classic, 100);
  }
}
</script>
```

### Customize material/textures
```ts
/* IMPORTANT: Load RubiksCube from the 'core' sub-module to avoid loading unnecessary material assets */
import RubiksCube from '@curtishughes/rubiks-cube/core';

new RubiksCube(canvas,  [
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('path/to/texture1') }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('path/to/texture2') }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('path/to/texture3') }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('path/to/texture4') }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('path/to/texture5') }),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('path/to/texture6') }),
], 100);
```

## License
MIT License

Copyright (c) [2021] [Curtis Hughes]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
