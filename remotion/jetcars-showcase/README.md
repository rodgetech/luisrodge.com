# JetCarsBelize motion case study

A silent, 30fps Remotion recreation of the editorial motion system used by the
ZeroLeaks case-study film. It uses fresh captures of the real JetCarsBelize
site—no browser chrome, fake device mockups, stock footage, or fabricated copy.

## Compositions

- `JetCarsFacebookReel`: 1080×1920, 779 frames (25.97 seconds)
- `JetCarsReference`: 1252×900, 779 frames (25.97 seconds)

Both versions share the same six opening cuts, four scrolls, holds, and rewind.
The Reel uses the production mobile layout; the reference composition uses the
desktop layout and original film dimensions.

## Commands

```sh
npm install
npm run dev
npm run lint
npm run render:reel
npm run render:reference
```

Rendered files are written to `out/`.

The render commands generate `jetcars-reference-v3.mp4` and
`jetcars-facebook-reel-v3.mp4`. Generated exports are ignored by Git and were
removed during local cleanup; run `npm ci` and the render commands to recreate them.
The v3 surround uses the site's deep coastal blue-green (`#092c3a`). Its
booking zoom preserves complete labels and inputs: 1.55x on desktop, focused
on the experience/date column, and a restrained 1.06x on mobile.

## Capture corrections

The v2 captures settle scroll reveals and load images and the 3D model before
capture. The fixed navigation is captured separately and composited at the top
of the hero and scrolling viewport, never baked into the page body. The pricing
shot moves as one intact image; the old independently animated horizontal bands
have been removed. Exponential easing is normalized at both endpoints, and the
render pipeline uses PNG intermediate frames for text clarity.

The reference informs timing and panel choreography. This is not a pixel-identical
copy: JetCars content and responsive section proportions differ, and its captured
UI does not reproduce the reference's individual dashboard-widget animations.

## Motion map

Opening cuts begin at frames `0`, `46`, `91`, `165`, `205`, and `270`. The
full-page scene begins at frame `329`. Its scroll ranges are `390–432`,
`474–508`, `553–589`, and `627–663`; the page rewinds during `700–774` and
holds on the returned hero through frame `778`.

All movement is driven by Remotion frames and explicit easing curves. There are
no CSS transitions or time-based animations, so previews and renders are
deterministic.
