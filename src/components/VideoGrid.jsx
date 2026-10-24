// 2-column grid of short demo clips, each with a title and one-line description
export default function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div className="video-card" key={video.src}>
          <h5>{video.title}</h5>
          {video.desc && <p>{video.desc}</p>}
          <video controls>
            <source src={video.src} type="video/mp4" />
            Cannot load video.
          </video>
        </div>
      ))}
    </div>
  );
}
