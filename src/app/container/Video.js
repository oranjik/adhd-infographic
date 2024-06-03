export function Video({ src, width = 1300 }) {
  return (
    <video width={width} autoPlay loop muted>
      <source src={src} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="kr"
        label="Korean"
      />
      Your browser does not support the video tag.
    </video>
  );
}
