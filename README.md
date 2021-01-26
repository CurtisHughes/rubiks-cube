# Rubik's Cube

## Installation

### UMD
```html
<script src="%PUBLIC_URL%/js/index.umd.js"></script>
<script>
    new RubiksCube()
</script>
```

### ES
```js
import { RubiksCube } from '@curtishughes/rubiks-cube';

new RubiksCube();
```

## Methods (Singmaster notation)
F (Front): the side currently facing the solver

B (Back): the side opposite the front

U (Up): the side above or on top of the front side

D (Down): the side opposite the top, underneath the Cube

L (Left): the side directly to the left of the front

R (Right): the side directly to the right of the front

ƒ (Front two layers): the side facing the solver and the corresponding middle layer

b (Back two layers): the side opposite the front and the corresponding middle layer

u (Up two layers): the top side and the corresponding middle layer

d (Down two layers): the bottom layer and the corresponding middle layer

l (Left two layers): the side to the left of the front and the corresponding middle layer

r (Right two layers): the side to the right of the front and the corresponding middle layer

x (rotate): rotate the entire Cube on R

y (rotate): rotate the entire Cube on U

z (rotate): rotate the entire Cube on F
