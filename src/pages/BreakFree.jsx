import "../BreakFree.css";
import pirata from '../assets/pirata.jpg';

export default function BreakFree() {
  return (
    <div className="breakfree">
      <marquee scrollAmount={8} className="marquee">
        WELCOME TO THE DIGITAL UNDERGROUND NO PAYWALLS, NO MASTERS, NO TELEMETRY
      </marquee>

      <h1 className="typewriter">
        ditch paywalls and ads ------ how to break free
      </h1>

      <div className="container">
        <div className="section">
          <h2>
            <span className="rainbow-trans">piracy</span> for free stuff
            <br />
            <small>
              (don’t forget to install adblocker, vpn, download manager and
              torrent client, no i’m not giving you the links, go dig your own
              rabbit hole)
            </small>
          </h2>

          <div className="pirate-flags">
            {Array.from({ length: 9 }).map((_, i) => (
              <img key={i} src={pirata} alt="pirate flag" />
            ))}
          </div>

          <ul>
            <li>
              <a
                href="https://steamrip.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                steamrip
              </a>
              <br />
              usually preinstalled, comes with patches and QOLs, fast
              downloads, frequent false positives, not for the paranoid.
            </li>
            <li>
              <a
                href="https://steamunlocked.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                steamunlocked
              </a>
              <br />
              usually just raw preinstalled, slow downloads but bigger library
              than steamrip, faster on adding to library too.
            </li>
            <li>
              <a
                href="https://fitgirl-repacks.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fitgirl repacks
              </a>
              <br />
              for the people with slow internet at the cost of needing bigger
              free space for install.
            </li>
            <li>
              <a
                href="https://cs.rin.ru/forum"
                target="_blank"
                rel="noopener noreferrer"
                className="invi-link"
              >
                cs.rin
              </a>
              <br />
              the underground, clean steam files, patches, community, the
              heart, the soul. If it’s on steam and has no DRM, slap in
              goldberg and you’re in the game.
            </li>
            <li>
              <a
                href="https://github.com/KobeW50/ReVanced-Documentation/blob/main/YT-ReVanced-Guide.md#before-you-begin"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube revanced
              </a>
              <br />
              a fully free youtube premium, skip promos in videos, blocks ads
              and- whatever premium does idk
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <h2>
            ditch windows telemetry
            <br />
            &lt;use arch linux or strip windows&gt;
          </h2>
          <p>windows is watching your every move, sending it to microsoft’s fat pockets.</p>
          <p>
            switch to{" "}
            <a
              href="https://archlinux.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              arch linux
            </a>{" "}
            — minimal, transparent, and totally yours.
          </p>
          <p>no links for “debloated telemetryless windows” here, find your own rabbit hole.</p>
        </div>

        <div className="section">
          <h2>audio freedom</h2>
          <ul>
            <li>
              <b>spotdl</b>
              <br />
              rip your spotify playlists without the corporate DRM bullshit.
              <br />
              <code>yay -S spotdl</code>
              <br />
              <a
                href="https://github.com/spotDL/spotify-downloader"
                target="_blank"
                rel="noopener noreferrer"
              >
                spotdl homepage
              </a>
            </li>
            <li>
              <b>audacious</b>
              <br />
              lightweight, no spyware.
              <br />
              <code>sudo pacman -S audacious</code>
              <br />
              <a href="https://audacious-media-player.org/" target="_blank">
                audacious official
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>browse like a ghost</h2>
          <ul>
            <li>
              <b>firefox</b>
              <br />
              open-source with privacy options.
              <br />
              <code>sudo pacman -S firefox</code>
              <br />
              <a
                href="https://www.mozilla.org/en-US/firefox/new/"
                target="_blank"
              >
                firefox official
              </a>
            </li>
            <li>
              <b>tor browser</b>
              <br />
              slower, more anonymous.
              <br />
              <code>sudo pacman -S tor</code>
              <br />
              <a href="https://www.torproject.org/download/" target="_blank">
                tor project download
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>communication</h2>
          <ul>
            <li>
              <b>whatsdesk</b>
              <br />
              unofficial whatsapp client (just a browser wrapper).
              <br />
              <code>yay -S whatsdesk-bin</code>
            </li>
            <li>
              <b>discord</b>
              <br />
              client or web version.
              <br />
              <code>sudo pacman -S discord</code>
              <br />
              <a href="https://discord.com/" target="_blank">
                discord web
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>(arch) gaming</h2>
          <ul>
            <li>
              <b>steam</b>
              <br />
              <code>sudo pacman -S steam</code>
              <br />
              <a href="https://store.steampowered.com/" target="_blank">
                steam web
              </a>
            </li>
            <li>
              <b>protontricks</b>
              <br />
              run games with steams proton compatibility layer without runnning steam.
              <br />
              <code>yay -S protontricks</code>
              <br />
              <a
                href="https://github.com/Matoking/protontricks"
                target="_blank"
              >
                protontricks github
              </a>
            </li>
            <li>
              <b>wine</b>
              <br />
              run windows apps.
              <br />
              <code>sudo pacman -S wine</code>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>devkit</h2>
          <ul>
            <li>
              <b>vscodium</b>
              <br />
              vscode without telemetry.
              <br />
              <code>yay -S vscodium-bin</code>
              <br />
              <a href="https://vscodium.com/" target="_blank">
                official site
              </a>
            </li>
            <li>
              <b>apache netbeans</b>
              <br />
              you know the one
              <br />
              <code>sudo pacman -S netbeans</code>
              <br />
              <a
                href="https://netbeans.apache.org/download/index.html"
                target="_blank"
              >
                official site
              </a>
            </li>
          </ul>
        </div>
      </div>

      <audio autoPlay loop>
        <source
          src="https://files.catbox.moe/l2g90v.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
