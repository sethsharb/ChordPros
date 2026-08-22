Assets this site expects
========================

Drop these three files in here, with these exact names.

iphone.png
  Portrait iPhone preview, ~9:19.5. Displayed 270px wide, so export at least
  540 x 1170 for Retina.

ipad.png
  Landscape iPad preview, ~4:3. Displayed 460px wide, so export at least
  920 x 690.

app-store-badge.svg
  Apple's OFFICIAL "Download on the App Store" badge, black version.
  Download the artwork from Apple rather than redrawing it:
  https://developer.apple.com/app-store/marketing/guidelines/#section-badges
  The CSS sizes it to 56px tall. If you end up with a PNG instead of an SVG,
  change the src on index.html line 44 to match.

Optional, referenced by both pages:
  favicon.png            32 x 32
  apple-touch-icon.png   180 x 180

Also still to do before launch
------------------------------
- index.html: replace the App Store link (id0000000000) with the real listing.
- Both footers link info@chordpros.com, matching Support.email in the app.
