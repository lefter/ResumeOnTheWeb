import Button from "components/Button";
import Heading from "components/Heading";
import { openURLInNewTab } from "utils";
import { FaSpotify } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";

const Music = () => {
  return (
    <div id="music">
      <Heading icon={MdMusicNote}>Music</Heading>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="max-w-full prose prose-neutral dark:prose-invert">
          <p>
            If you&apos;ve read about my profile so far and you found it interesting, studies show that knowing what
            type of music a person listens to would say a lot about them.
          </p>

          <p>
            Also, I&apos;ve been known for my good taste in music and I&apos;ve always wanted to share the latest and
            greatest hits through an easy medium, so here&apos;s a Spotify Playlist I&apos;ve created called My
            Everyday: A dynamic playlist of what&apos;s on my daily roster of music.
          </p>

          <div className="text-sm inline-block">
            <Button
              icon={FaSpotify}
              onClick={() => openURLInNewTab("https://open.spotify.com/playlist/58Kg5IirKtASXLYosizqnm")}
            >
              Listen to My Everyday on Spotify
            </Button>
          </div>
        </div>

        <iframe
          src="https://open.spotify.com/embed/playlist/58Kg5IirKtASXLYosizqnm"
          width="100%"
          height="512"
          frameBorder="0"
          allow="encrypted-media"
          className="rounded col-span-2"
        />
      </div>
    </div>
  );
};

export default Music;