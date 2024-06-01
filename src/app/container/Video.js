export function Video({ src }) {
  return (
    <video width="1300" autoPlay loop muted>
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
