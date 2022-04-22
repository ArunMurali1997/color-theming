# color-theming

## setting up

hsl stands for
h - hue
l - lightness
s - saturation

`css --colorPrimary:hsl(0,100%,50%); `

Custom declaration, hsl values broken out

`css --colorPrimary-h:0; --colorPrimary-s:100; --colorPrimary-l:50%: --colorPrimary: var(--colorPrimary-h), var(--colorPrimary-s), --colorPrimary-l); `

Adjustion values with hsl
`css --lightne-percenrage:20%; --darken-percentage:15%; `

color primary lightnen

`css --colorPrimary--light: var(--colorPrimary-h), var(--colorPrimary-s), calc(var(--colorPrimary-l) + var(--lighten-percentage))); `

color primary darken

`css --colorPrimary--dark: var(--colorPrimary-h), var(--colorPrimary-s), calc(var(--colorPrimary-l) - var(--darken-percentage))); `

Getting the Complement and Triads

To get the complimentary or triadic shades, we'll need to adjust the hue of the primary color instead of the lightness.
but can also take a shorcut and remember that the color wheel in HSL goes from 0 to 360. That means adding or subtracting 180 will give us the complementary shade.

complimentary function
`css
--colorPrimary--complement: calc(var(--colorPrimary-h) + 180), var(--colorPrimary-s), var(--colorPrimary-l));

`
Triad function
For triadic colors, we cut 360 into thirds, meaning we can get the first and second triad by adding or subtracting 120 and 240 respectively.

`css
-colorPrimary--triad1: calc(var(--colorPrimary-h) + 120), var(--colorPrimary-s), var(--colorPrimary-l));

--colorPrimary--triad2: calc(var(--colorPrimary-h) + 240), var(--colorPrimary-s), var(--colorPrimary-l));

`

Recreating Mix

we need two colors to mix, so let's break them down:
`css
--color-1-h: 0;
--color-1-s: 100%;
--color-1-l: 50%;

--color-2-h: 50;
--color-2-s: 80%;
--color-2-l: 50%;
`

mixed color:

`css --mixed-color: hsl(var(--avg-1-2-h), var(--avg-1-2-s), var(--avg-1-2-l)); `

## ref: https://una.im/css-color-theming/
